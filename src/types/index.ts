// 리스크 레벨 타입
export type RiskLevel = 'SAFE' | 'CAUTION' | 'DANGER';

// 리스크 카테고리 타입
export type RiskCategory = 'BULLYING' | 'SEXUAL' | 'SPAM' | 'GROOMING' | 'SELF_HARM' | 'SCAM';

// 목업 댓글 인터페이스
export interface MockComment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  likes: number;
  profileImage: string;
  riskLevel: RiskLevel;
  riskCategory?: RiskCategory;
  detectedKeywords?: string[];
  aiExplanation?: string;
  hiddenContent?: string;
}

// 뉴스 기사 내 어려운 용어
export interface DifficultTerm {
  term: string;
  startIndex: number;
  endIndex: number;
  easyDefinition: string;
  analogy: string;
  relatedEmoji: string;
}

// 뉴스 기사 인터페이스
export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  content: string;
  publishDate: string;
  thumbnail?: string;
  difficultTerms: DifficultTerm[];
}

// 채팅 메시지 인터페이스
export interface ChatMessage {
  id: string;
  sender: string;
  senderId: string;
  content: string;
  timestamp: string;
  isMyMessage: boolean;
  riskLevel: RiskLevel;
  riskCategory?: RiskCategory;
  aiExplanation?: string;
}

// 채팅방 인터페이스
export interface ChatRoom {
  id: string;
  name: string;
  participants: string[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  profileImage: string;
}

// 인시던트 (사건) 인터페이스
export interface Incident {
  type: RiskCategory;
  count: number;
  resolved: boolean;
}

// 일일 리포트 인터페이스
export interface DailyReport {
  date: string;
  totalScreenTime: number;
  safetyScore: number;
  incidents: Incident[];
  topicInterests: string[];
  conversationStarters: string[];
}

// 주간 통계 인터페이스
export interface WeeklyStats {
  weekStart: string;
  weekEnd: string;
  averageSafetyScore: number;
  totalIncidents: number;
  blockedThreats: number;
  learnedWords: number;
  positiveComments: number;
}

// 순화 표현 제안 인터페이스
export interface SuggestionItem {
  original: string;
  suggestion: string;
  reason: string;
}

// AI 분석 결과 인터페이스
export interface AnalysisResult {
  isSafe: boolean;
  riskScore: number;
  categories?: RiskCategory[];
  explanation?: string;
  suggestion?: string;
}

// 비디오 인터페이스 (MyTube용)
export interface MockVideo {
  id: string;
  title: string;
  channel: string;
  channelImage: string;
  views: string;
  uploadDate: string;
  thumbnail: string;
  duration: string;
}

// 렌즈 상태 인터페이스
export interface LensState {
  isActive: boolean;
  blockedCount: number;
  learnedWordsCount: number;
  notifications: LensNotification[];
}

// 렌즈 알림 인터페이스
export interface LensNotification {
  id: string;
  type: 'blocked' | 'learned' | 'warning';
  message: string;
  timestamp: Date;
}
