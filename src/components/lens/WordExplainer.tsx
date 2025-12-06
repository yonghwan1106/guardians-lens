'use client';

import { useState, ReactNode, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Lightbulb } from 'lucide-react';
import { useLensStore } from '@/lib/store';
import { DifficultTerm } from '@/types';

interface WordExplainerProps {
  term: string;
  definition: string;
  analogy: string;
  emoji: string;
}

export default function WordExplainer({
  term,
  definition,
  analogy,
  emoji,
}: WordExplainerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { incrementLearnedWords, isActive } = useLensStore();

  const handleMouseEnter = () => {
    if (!isActive) return;
    setIsHovered(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // 잠시 후에 툴팁 숨기기 (사용자가 툴팁으로 마우스를 옮길 수 있도록)
    setTimeout(() => {
      setShowTooltip(false);
    }, 300);
  };

  const handleLearn = () => {
    incrementLearnedWords();
  };

  if (!isActive) {
    return <span>{term}</span>;
  }

  return (
    <span className="relative inline-block">
      <motion.span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          cursor-help border-b-2 border-dashed transition-colors duration-200
          ${isHovered ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-blue-300 text-blue-500'}
        `}
        whileHover={{ scale: 1.02 }}
      >
        {term}
        <span className="ml-1 text-xs">{emoji}</span>
      </motion.span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="absolute z-50 left-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {/* 헤더 */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-white" />
                <span className="font-medium text-white">{term}</span>
                <span className="text-lg">{emoji}</span>
              </div>
            </div>

            {/* 쉬운 정의 */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {definition}
                </p>
              </div>

              {/* 비유 설명 */}
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-100">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-yellow-700 mb-1">쉽게 말하면...</p>
                    <p className="text-sm text-yellow-800 leading-relaxed">
                      {analogy}
                    </p>
                  </div>
                </div>
              </div>

              {/* 학습 완료 버튼 */}
              <button
                onClick={handleLearn}
                className="w-full text-center text-xs text-blue-500 hover:text-blue-600 py-1 hover:bg-blue-50 rounded transition-colors"
              >
                이해했어요!
              </button>
            </div>

            {/* 말풍선 꼬리 */}
            <div className="absolute -top-2 left-6 w-4 h-4 bg-blue-500 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

// 텍스트에서 어려운 단어를 찾아 WordExplainer로 감싸는 유틸리티 컴포넌트
interface TextWithExplanationsProps {
  text: string;
  difficultTerms: DifficultTerm[];
}

export function TextWithExplanations({ text, difficultTerms }: TextWithExplanationsProps) {
  // useMemo로 텍스트 처리 결과 캐싱
  const result = useMemo(() => {
    // HTML 태그 제거하고 순수 텍스트만 처리
    const processedText = text.replace(/<[^>]*>/g, '');
    const resultArray: ReactNode[] = [];
    let lastIndex = 0;

    // 단어 위치를 찾아서 정렬
    const termPositions = difficultTerms.map(term => ({
      ...term,
      position: processedText.indexOf(term.term),
    })).filter(t => t.position !== -1).sort((a, b) => a.position - b.position);

    termPositions.forEach((term, idx) => {
      // 이전 텍스트 추가
      if (term.position > lastIndex) {
        resultArray.push(processedText.slice(lastIndex, term.position));
      }

      // WordExplainer 컴포넌트 추가
      resultArray.push(
        <WordExplainer
          key={`term-${idx}`}
          term={term.term}
          definition={term.easyDefinition}
          analogy={term.analogy}
          emoji={term.relatedEmoji}
        />
      );

      lastIndex = term.position + term.term.length;
    });

    // 남은 텍스트 추가
    if (lastIndex < processedText.length) {
      resultArray.push(processedText.slice(lastIndex));
    }

    return resultArray;
  }, [text, difficultTerms]);

  return <>{result}</>;
}
