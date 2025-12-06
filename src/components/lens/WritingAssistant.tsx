'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, AlertCircle, Sparkles, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLensStore } from '@/lib/store';
import { WARNING_EXPRESSIONS } from '@/lib/mock-data/chat-logs';

interface WritingAssistantProps {
  placeholder?: string;
  onSubmit?: (text: string) => void;
  className?: string;
}

export default function WritingAssistant({
  placeholder = '댓글을 입력하세요...',
  onSubmit,
  className = '',
}: WritingAssistantProps) {
  const [inputText, setInputText] = useState('');
  const [warning, setWarning] = useState<{
    show: boolean;
    message: string;
    suggestion: string;
    isSevere: boolean;
  }>({ show: false, message: '', suggestion: '', isSevere: false });
  const [showSuggestionApplied, setShowSuggestionApplied] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { isActive, showMascotWithMessage } = useLensStore();

  // 입력 텍스트 분석
  useEffect(() => {
    if (!isActive || !inputText) {
      setWarning({ show: false, message: '', suggestion: '', isSevere: false });
      return;
    }

    // 경고 표현 검사
    for (const expr of WARNING_EXPRESSIONS) {
      if (inputText.includes(expr.original)) {
        const isSevere = expr.suggestion === ''; // 심각한 표현 (제안 없음)
        setWarning({
          show: true,
          message: expr.reason,
          suggestion: expr.suggestion,
          isSevere,
        });
        return;
      }
    }

    setWarning({ show: false, message: '', suggestion: '', isSevere: false });
  }, [inputText, isActive]);

  const handleSuggestionClick = () => {
    if (warning.suggestion) {
      // 문제 표현을 순화된 표현으로 교체
      const problematicExpr = WARNING_EXPRESSIONS.find(e => inputText.includes(e.original));
      if (problematicExpr) {
        const newText = inputText.replace(problematicExpr.original, problematicExpr.suggestion);
        setInputText(newText);
        setShowSuggestionApplied(true);
        showMascotWithMessage('좋아요! 더 예쁜 말로 바꿨어요 ✨');
        setTimeout(() => setShowSuggestionApplied(false), 2000);
      }
    }
  };

  const handleSubmit = () => {
    if (warning.isSevere) {
      showMascotWithMessage('이 표현은 사용할 수 없어요. 다른 말로 바꿔보세요!');
      return;
    }
    if (inputText.trim() && onSubmit) {
      onSubmit(inputText);
      setInputText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* 입력창 */}
      <div
        className={`
          relative rounded-xl border-2 transition-colors duration-300
          ${warning.show
            ? warning.isSevere
              ? 'border-red-400 bg-red-50'
              : 'border-orange-400 bg-orange-50'
            : 'border-gray-200 bg-white focus-within:border-blue-400'
          }
        `}
      >
        <textarea
          ref={inputRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={2}
          className="w-full px-4 py-3 pr-24 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-inset text-sm rounded-xl"
          aria-label={placeholder}
          aria-describedby={warning.show ? 'writing-warning' : undefined}
          aria-invalid={warning.isSevere}
        />

        {/* 전송 버튼 */}
        <div className="absolute right-2 bottom-2 flex items-center gap-2">
          <AnimatePresence>
            {showSuggestionApplied && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-xs text-green-500 flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                변환됨!
              </motion.span>
            )}
          </AnimatePresence>

          <Button
            size="sm"
            onClick={handleSubmit}
            disabled={warning.isSevere || !inputText.trim()}
            className={`
              transition-all duration-300
              ${warning.isSevere
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
              }
            `}
            aria-label="메시지 전송"
          >
            <Send className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* 경고 메시지 */}
      <AnimatePresence>
        {warning.show && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="mt-2"
          >
            <div
              id="writing-warning"
              role="alert"
              aria-live="polite"
              className={`
                rounded-lg p-3 flex items-start gap-3
                ${warning.isSevere ? 'bg-red-100 border border-red-200' : 'bg-orange-100 border border-orange-200'}
              `}
            >
              <div className={`p-1.5 rounded-full ${warning.isSevere ? 'bg-red-200' : 'bg-orange-200'}`}>
                {warning.isSevere ? (
                  <Shield className="w-4 h-4 text-red-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                )}
              </div>

              <div className="flex-1">
                <p className={`text-sm font-medium ${warning.isSevere ? 'text-red-700' : 'text-orange-700'}`}>
                  {warning.message}
                </p>

                {warning.suggestion && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs text-gray-500">추천:</span>
                    <button
                      onClick={handleSuggestionClick}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-white rounded-full text-xs text-blue-600 hover:bg-blue-50 transition-colors border border-blue-200"
                    >
                      <Sparkles className="w-3 h-3" />
                      &quot;{warning.suggestion}&quot;로 바꾸기
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 가이드 텍스트 */}
      {isActive && !warning.show && inputText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-1 text-xs text-gray-400 flex items-center gap-1"
        >
          <Shield className="w-3 h-3" />
          가디언즈 렌즈가 댓글을 검토하고 있어요
        </motion.p>
      )}
    </div>
  );
}
