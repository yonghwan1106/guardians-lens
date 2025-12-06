import { DailyReport, WeeklyStats } from '@/types';

export const DASHBOARD_STATS: DailyReport[] = [
  {
    date: '2025-12-01',
    totalScreenTime: 120,
    safetyScore: 95,
    incidents: [
      { type: 'BULLYING', count: 1, resolved: true },
    ],
    topicInterests: ['마인크래프트', '건축'],
    conversationStarters: [
      '지우가 마인크래프트 건축 영상을 많이 봤어요. "어떤 건물을 지어보고 싶어?"라고 물어보세요.',
    ],
  },
  {
    date: '2025-12-02',
    totalScreenTime: 180,
    safetyScore: 82,
    incidents: [
      { type: 'BULLYING', count: 3, resolved: true },
      { type: 'SCAM', count: 1, resolved: true },
    ],
    topicInterests: ['게임', 'FPS', '총'],
    conversationStarters: [
      '오늘 게임 영상에서 다소 폭력적인 장면이 포함된 콘텐츠가 있었어요.',
      '"게임과 현실의 차이"에 대해 이야기해보시면 어떨까요?',
    ],
  },
  {
    date: '2025-12-03',
    totalScreenTime: 90,
    safetyScore: 98,
    incidents: [],
    topicInterests: ['코딩', '로블록스', '게임개발'],
    conversationStarters: [
      '지우가 코딩에 관심을 보이고 있어요. 관련 교육 프로그램을 찾아보시는 건 어떨까요?',
    ],
  },
  {
    date: '2025-12-04',
    totalScreenTime: 150,
    safetyScore: 75,
    incidents: [
      { type: 'GROOMING', count: 1, resolved: false },
      { type: 'BULLYING', count: 2, resolved: true },
    ],
    topicInterests: ['유튜브', '게임방송'],
    conversationStarters: [
      '⚠️ 중요: 지우에게 낯선 사람이 접근했어요. 꼭 대화가 필요합니다.',
      '"온라인에서 모르는 사람과 대화할 때 주의할 점"에 대해 이야기해주세요.',
    ],
  },
  {
    date: '2025-12-05',
    totalScreenTime: 100,
    safetyScore: 92,
    incidents: [
      { type: 'SPAM', count: 2, resolved: true },
    ],
    topicInterests: ['과학', 'AI', '로봇'],
    conversationStarters: [
      '지우가 AI와 로봇에 대한 뉴스를 관심있게 봤어요.',
      '"미래에 어떤 기술이 나올 것 같아?"라고 물어보시면 좋겠어요.',
    ],
  },
  {
    date: '2025-12-06',
    totalScreenTime: 85,
    safetyScore: 88,
    incidents: [
      { type: 'BULLYING', count: 1, resolved: true },
    ],
    topicInterests: ['마인크래프트', '친구들', '협동게임'],
    conversationStarters: [
      '오늘 지우가 친구들과 함께 게임을 했어요. 협동심을 기르는 좋은 활동이었어요!',
    ],
  },
];

export const WEEKLY_STATS: WeeklyStats = {
  weekStart: '2025-12-01',
  weekEnd: '2025-12-06',
  averageSafetyScore: 88,
  totalIncidents: 11,
  blockedThreats: 10,
  learnedWords: 15,
  positiveComments: 8,
};

// 차트용 데이터
export const SAFETY_SCORE_CHART_DATA = DASHBOARD_STATS.map(stat => ({
  date: stat.date.slice(5), // MM-DD 형식
  score: stat.safetyScore,
  screenTime: stat.totalScreenTime,
}));

export const INCIDENT_TYPE_CHART_DATA = [
  { name: '사이버 불링', value: 7, color: '#ef4444' },
  { name: '스팸/피싱', value: 3, color: '#f97316' },
  { name: '그루밍', value: 1, color: '#dc2626' },
];

export const INTEREST_WORD_CLOUD = [
  { text: '마인크래프트', value: 45 },
  { text: '건축', value: 30 },
  { text: '게임', value: 40 },
  { text: '코딩', value: 25 },
  { text: 'AI', value: 20 },
  { text: '로봇', value: 18 },
  { text: '유튜브', value: 35 },
  { text: '친구들', value: 28 },
  { text: '과학', value: 15 },
  { text: '로블록스', value: 22 },
];

// 부모를 위한 인사이트 카드 데이터
export const INSIGHT_CARDS = [
  {
    id: 'insight_001',
    type: 'positive',
    icon: '🌟',
    title: '긍정적인 소통 증가',
    description: '이번 주 지우가 작성한 긍정적인 댓글이 지난주 대비 30% 증가했어요.',
    action: '칭찬해주세요! "온라인에서도 예의 바르게 행동하는 구나"',
  },
  {
    id: 'insight_002',
    type: 'warning',
    icon: '⚠️',
    title: '주의가 필요해요',
    description: '12월 4일, 낯선 사람이 지우에게 개인적인 만남을 제안했어요. 가디언즈 렌즈가 차단했습니다.',
    action: '오늘 저녁, "온라인 안전"에 대해 대화해주세요.',
  },
  {
    id: 'insight_003',
    type: 'learning',
    icon: '📚',
    title: '새로운 단어 학습',
    description: '지우가 뉴스를 읽으며 15개의 새로운 단어를 배웠어요: 지식재산권, 지구온난화, 생태계 등',
    action: '"오늘 새로 배운 단어 중에 재미있는 거 있었어?" 라고 물어보세요.',
  },
  {
    id: 'insight_004',
    type: 'interest',
    icon: '🎮',
    title: '관심 분야 발견',
    description: '지우가 코딩과 게임 개발에 관심을 보이고 있어요.',
    action: '코딩 교육 프로그램이나 관련 도서를 함께 찾아보시는 건 어떨까요?',
  },
];

// 주간 요약 데이터
export const WEEKLY_SUMMARY = {
  totalThreatsBlocked: 10,
  totalWordsLearned: 15,
  averageScreenTime: 121, // 분
  topCategory: '마인크래프트',
  safetyTrend: 'stable', // 'up' | 'down' | 'stable'
  recommendedAction: '이번 주는 전반적으로 안전하게 인터넷을 사용했어요. 온라인 그루밍 시도가 있었지만 성공적으로 차단되었습니다. 아이와 "온라인에서 모르는 사람을 만났을 때" 대처법에 대해 대화해보세요.',
};
