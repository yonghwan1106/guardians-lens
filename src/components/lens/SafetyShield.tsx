'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Eye, EyeOff, HelpCircle, AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useLensStore } from '@/lib/store';
import { RiskCategory } from '@/types';

interface SafetyShieldProps {
  children: React.ReactNode;
  isHarmful: boolean;
  riskCategory?: RiskCategory;
  explanation?: string;
  hiddenContent?: string;
}

const categoryLabels: Record<RiskCategory, { label: string; color: string; icon: string }> = {
  BULLYING: { label: '언어 폭력', color: 'bg-red-100 text-red-700', icon: '😢' },
  SEXUAL: { label: '선정적 내용', color: 'bg-pink-100 text-pink-700', icon: '🚫' },
  SPAM: { label: '스팸/피싱', color: 'bg-orange-100 text-orange-700', icon: '⚠️' },
  GROOMING: { label: '온라인 그루밍', color: 'bg-purple-100 text-purple-700', icon: '🚨' },
  SELF_HARM: { label: '자해 관련', color: 'bg-gray-100 text-gray-700', icon: '💙' },
  SCAM: { label: '사기 의심', color: 'bg-yellow-100 text-yellow-700', icon: '🎣' },
};

export default function SafetyShield({
  children,
  isHarmful,
  riskCategory,
  explanation,
  hiddenContent,
}: SafetyShieldProps) {
  const [isBlurred, setIsBlurred] = useState(isHarmful);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showExplanationDialog, setShowExplanationDialog] = useState(false);
  const { incrementBlocked, showMascotWithMessage, isActive } = useLensStore();

  useEffect(() => {
    if (isHarmful && isActive) {
      incrementBlocked();
    }
  }, []);

  if (!isHarmful || !isActive) {
    return <>{children}</>;
  }

  const categoryInfo = riskCategory ? categoryLabels[riskCategory] : null;

  const handleRevealClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmReveal = () => {
    setIsBlurred(false);
    setShowConfirmDialog(false);
    showMascotWithMessage('원본을 확인했어요. 이런 내용은 마음에 상처가 될 수 있으니 조심해요!');
  };

  const handleExplainClick = () => {
    setShowExplanationDialog(true);
  };

  return (
    <>
      <div className="relative">
        <AnimatePresence mode="wait">
          {isBlurred ? (
            <motion.div
              key="blurred"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative"
            >
              {/* 블러 처리된 원본 콘텐츠 */}
              <div className="blur-md select-none pointer-events-none opacity-50">
                {children}
              </div>

              {/* 오버레이 */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50/90 to-orange-50/90 rounded-lg border-2 border-red-200"
              >
                <div className="text-center p-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mb-3"
                  >
                    <Shield className="w-6 h-6 text-red-500" />
                  </motion.div>

                  <p className="font-medium text-gray-800 mb-2">
                    앗! 나쁜 말이 숨어있어요
                  </p>

                  {categoryInfo && (
                    <Badge className={`${categoryInfo.color} mb-3`}>
                      {categoryInfo.icon} {categoryInfo.label}
                    </Badge>
                  )}

                  <div className="flex gap-2 justify-center flex-wrap">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleExplainClick}
                      className="text-xs"
                    >
                      <HelpCircle className="w-3.5 h-3.5 mr-1" />
                      왜 나쁜가요?
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={handleRevealClick}
                      className="text-xs text-gray-500"
                    >
                      <Eye className="w-3.5 h-3.5 mr-1" />
                      원본 보기
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative"
            >
              <div className="border-2 border-orange-300 rounded-lg bg-orange-50/50 p-1">
                {children}
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsBlurred(true)}
                className="absolute top-1 right-1 text-xs text-orange-600 hover:text-orange-700"
              >
                <EyeOff className="w-3.5 h-3.5 mr-1" />
                다시 가리기
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 원본 보기 확인 다이얼로그 */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-orange-600">
              <AlertTriangle className="w-5 h-5" />
              정말 보시겠어요?
            </DialogTitle>
            <DialogDescription className="text-left pt-2">
              이 내용은 마음을 아프게 할 수 있어요.
              <br />
              <span className="text-gray-500 text-sm">
                불편하면 언제든 다시 가릴 수 있어요.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-2 justify-end mt-4">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              안 볼래요
            </Button>
            <Button variant="destructive" onClick={handleConfirmReveal}>
              볼게요
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* 설명 다이얼로그 */}
      <Dialog open={showExplanationDialog} onOpenChange={setShowExplanationDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {categoryInfo && (
                <span className={`px-2 py-1 rounded-full text-sm ${categoryInfo.color}`}>
                  {categoryInfo.icon} {categoryInfo.label}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">
                {explanation || '이 내용은 다른 사람의 마음을 아프게 할 수 있는 표현이 포함되어 있어요.'}
              </p>
            </div>

            {riskCategory === 'SELF_HARM' && (
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm text-purple-800 font-medium mb-2">
                  도움이 필요하다면 연락하세요
                </p>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>청소년전화: 1388</li>
                  <li>자살예방상담전화: 1393</li>
                </ul>
              </div>
            )}

            {riskCategory === 'GROOMING' && (
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-red-800 font-medium">
                  지금 바로 부모님께 이 대화를 보여주세요!
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <Button onClick={() => setShowExplanationDialog(false)}>
              알겠어요!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
