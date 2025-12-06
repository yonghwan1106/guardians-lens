'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Settings,
  Phone,
  Video,
  MoreVertical,
  Send,
  Image,
  Smile,
  Paperclip,
  ChevronLeft,
  AlertTriangle,
  Shield,
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SafetyShield, WritingAssistant } from '@/components/lens';
import { CHAT_ROOMS, CHAT_MESSAGES } from '@/lib/mock-data/chat-logs';
import { useLensStore } from '@/lib/store';

export default function TokPage() {
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);
  const [messages, setMessages] = useState<typeof CHAT_MESSAGES>({...CHAT_MESSAGES});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { showMascotWithMessage } = useLensStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedRoom, messages]);

  const handleSendMessage = (text: string) => {
    if (!selectedRoom) return;

    const newMessage = {
      id: `msg_new_${Date.now()}`,
      sender: '지우',
      senderId: 'user_jiwoo',
      content: text,
      timestamp: '방금 전',
      isMyMessage: true,
      riskLevel: 'SAFE' as const,
    };

    setMessages(prev => ({
      ...prev,
      [selectedRoom]: [...(prev[selectedRoom] || []), newMessage],
    }));
  };

  const currentRoom = CHAT_ROOMS.find(r => r.id === selectedRoom);
  const currentMessages = selectedRoom ? messages[selectedRoom] || [] : [];

  // 위험한 채팅방 확인
  const isDangerousRoom = selectedRoom === 'room_004';

  return (
    <div className="bg-yellow-50 min-h-[600px] flex">
      {/* 채팅방 목록 */}
      <div className={`
        w-full md:w-80 bg-white border-r flex flex-col
        ${selectedRoom ? 'hidden md:flex' : 'flex'}
      `}>
        {/* Tok 헤더 */}
        <header className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span className="font-bold text-xl">Tok</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/20 rounded-full">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/20 rounded-full">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 내 프로필 */}
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-white">
              <AvatarFallback className="bg-blue-500 text-white">지</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">지우</p>
              <p className="text-xs text-white/80">온라인</p>
            </div>
          </div>
        </header>

        {/* 채팅방 리스트 */}
        <div className="flex-1 overflow-y-auto">
          {CHAT_ROOMS.map((room) => {
            const hasDanger = room.id === 'room_004';

            return (
              <motion.button
                key={room.id}
                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                onClick={() => {
                  setSelectedRoom(room.id);
                  if (hasDanger) {
                    showMascotWithMessage('⚠️ 이 대화방에 주의가 필요한 메시지가 있어요!');
                  }
                }}
                className={`
                  w-full p-4 flex items-center gap-3 border-b transition-colors text-left
                  ${selectedRoom === room.id ? 'bg-yellow-50' : ''}
                `}
              >
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className={hasDanger ? 'bg-red-400' : 'bg-gray-300'}>
                      {room.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  {room.unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                      {room.unreadCount}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900 flex items-center gap-1">
                      {room.name}
                      {hasDanger && (
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                      )}
                    </span>
                    <span className="text-xs text-gray-500">{room.lastMessageTime}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{room.lastMessage}</p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* 채팅 내용 */}
      <div className={`
        flex-1 flex flex-col bg-yellow-50
        ${!selectedRoom ? 'hidden md:flex' : 'flex'}
      `}>
        {selectedRoom ? (
          <>
            {/* 채팅방 헤더 */}
            <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden p-1"
                  onClick={() => setSelectedRoom(null)}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <Avatar className="w-10 h-10">
                  <AvatarFallback className={isDangerousRoom ? 'bg-red-400' : 'bg-gray-300'}>
                    {currentRoom?.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-gray-900 flex items-center gap-2">
                    {currentRoom?.name}
                    {isDangerousRoom && (
                      <Badge variant="destructive" className="text-xs">주의 필요</Badge>
                    )}
                  </p>
                  <p className="text-xs text-gray-500">
                    {currentRoom?.participants.length}명
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Phone className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Video className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </header>

            {/* 위험 경고 배너 */}
            {isDangerousRoom && (
              <div className="bg-red-50 border-b border-red-200 px-4 py-3 flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-full">
                  <Shield className="w-5 h-5 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-red-800">
                    가디언즈 렌즈가 위험을 감지했어요
                  </p>
                  <p className="text-xs text-red-600">
                    모르는 사람이 개인 정보를 물어보거나 만나자고 하면 부모님께 알려주세요!
                  </p>
                </div>
                <Button size="sm" variant="destructive">
                  부모님께 알리기
                </Button>
              </div>
            )}

            {/* 메시지 목록 */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {currentMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isMyMessage ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-end gap-2 max-w-[80%] ${msg.isMyMessage ? 'flex-row-reverse' : ''}`}>
                    {!msg.isMyMessage && (
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className={msg.riskLevel === 'DANGER' ? 'bg-red-400 text-white' : 'bg-gray-300'}>
                          {msg.sender[0]}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      {!msg.isMyMessage && (
                        <p className="text-xs text-gray-500 mb-1 ml-1">{msg.sender}</p>
                      )}
                      <SafetyShield
                        isHarmful={msg.riskLevel === 'DANGER'}
                        riskCategory={msg.riskCategory}
                        explanation={msg.aiExplanation}
                      >
                        <div
                          className={`
                            px-4 py-2.5 rounded-2xl
                            ${msg.isMyMessage
                              ? 'bg-yellow-400 text-gray-900 rounded-br-none'
                              : 'bg-white text-gray-900 rounded-bl-none shadow-sm'
                            }
                          `}
                        >
                          <p className="text-sm">{msg.content}</p>
                        </div>
                      </SafetyShield>
                      <p className={`text-xs text-gray-400 mt-1 ${msg.isMyMessage ? 'text-right mr-1' : 'ml-1'}`}>
                        {msg.timestamp}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* 메시지 입력 */}
            <div className="bg-white border-t p-3">
              <div className="flex items-end gap-2">
                <div className="flex items-center gap-1">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Paperclip className="w-5 h-5 text-gray-500" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Image className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <div className="flex-1">
                  <WritingAssistant
                    placeholder="메시지 입력..."
                    onSubmit={handleSendMessage}
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          // 채팅방 선택 안 됨
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl">💬</span>
              <p className="text-gray-500 mt-4">채팅방을 선택해주세요</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
