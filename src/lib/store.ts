import { create } from 'zustand';
import { LensNotification } from '@/types';

interface LensState {
  isActive: boolean;
  blockedCount: number;
  learnedWordsCount: number;
  notifications: LensNotification[];
  showMascot: boolean;
  mascotMessage: string;

  // Actions
  setActive: (active: boolean) => void;
  incrementBlocked: () => void;
  incrementLearnedWords: () => void;
  addNotification: (notification: Omit<LensNotification, 'id' | 'timestamp'>) => void;
  clearNotifications: () => void;
  setMascotMessage: (message: string) => void;
  hideMascot: () => void;
  showMascotWithMessage: (message: string) => void;
}

export const useLensStore = create<LensState>((set) => ({
  isActive: true,
  blockedCount: 0,
  learnedWordsCount: 0,
  notifications: [],
  showMascot: true,
  mascotMessage: '안녕! 나는 가디야. 오늘도 안전하게 지켜줄게!',

  setActive: (active) => set({ isActive: active }),

  incrementBlocked: () => set((state) => ({
    blockedCount: state.blockedCount + 1
  })),

  incrementLearnedWords: () => set((state) => ({
    learnedWordsCount: state.learnedWordsCount + 1
  })),

  addNotification: (notification) => set((state) => ({
    notifications: [
      ...state.notifications,
      {
        ...notification,
        id: `notif_${Date.now()}`,
        timestamp: new Date(),
      },
    ],
  })),

  clearNotifications: () => set({ notifications: [] }),

  setMascotMessage: (message) => set({ mascotMessage: message }),

  hideMascot: () => set({ showMascot: false }),

  showMascotWithMessage: (message) => set({
    showMascot: true,
    mascotMessage: message
  }),
}));

// 시뮬레이션 네비게이션 상태
interface SimulationState {
  currentUrl: string;
  history: string[];
  canGoBack: boolean;

  // Actions
  navigate: (url: string) => void;
  goBack: () => void;
}

export const useSimulationStore = create<SimulationState>((set, get) => ({
  currentUrl: 'mytube.com',
  history: [],
  canGoBack: false,

  navigate: (url) => set((state) => ({
    currentUrl: url,
    history: [...state.history, state.currentUrl],
    canGoBack: true,
  })),

  goBack: () => {
    const { history } = get();
    if (history.length > 0) {
      const newHistory = [...history];
      const previousUrl = newHistory.pop();
      set({
        currentUrl: previousUrl || 'mytube.com',
        history: newHistory,
        canGoBack: newHistory.length > 0,
      });
    }
  },
}));

// 채팅 상태 (메신저 시뮬레이션용)
interface ChatState {
  selectedRoom: string | null;
  inputText: string;
  showWarning: boolean;
  warningMessage: string;
  suggestion: string;

  // Actions
  selectRoom: (roomId: string | null) => void;
  setInputText: (text: string) => void;
  setWarning: (show: boolean, message?: string, suggestion?: string) => void;
  clearWarning: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
  selectedRoom: null,
  inputText: '',
  showWarning: false,
  warningMessage: '',
  suggestion: '',

  selectRoom: (roomId) => set({ selectedRoom: roomId }),

  setInputText: (text) => set({ inputText: text }),

  setWarning: (show, message = '', suggestion = '') => set({
    showWarning: show,
    warningMessage: message,
    suggestion: suggestion,
  }),

  clearWarning: () => set({
    showWarning: false,
    warningMessage: '',
    suggestion: '',
  }),
}));
