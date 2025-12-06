import { NewsArticle } from '@/types';

export const NEWS_MOCK_DATA: NewsArticle[] = [
  {
    id: 'news_001',
    title: '정부, 생성형 AI 저작권 관련 입법 예고... "창작자의 권리 보호 강화"',
    category: 'IT/과학',
    publishDate: '2025년 12월 5일',
    thumbnail: '/news/ai-copyright.jpg',
    content: `정부가 인공지능이 만든 창작물의 <span class="difficult-term" data-term-id="0">지식재산권</span> 인정 여부에 대해 새로운 <span class="difficult-term" data-term-id="1">법안</span>을 발의했다.

이번 조치는 AI 개발사와 원작자 간의 <span class="difficult-term" data-term-id="2">이해상충</span>을 해결하기 위한 것으로, 전문가들은 "AI 시대에 맞는 새로운 <span class="difficult-term" data-term-id="3">저작권법</span> 체계가 필요하다"고 입을 모았다.

특히 이번 법안에는 AI가 학습에 사용한 <span class="difficult-term" data-term-id="4">데이터셋</span>의 출처를 공개하도록 하는 <span class="difficult-term" data-term-id="5">투명성</span> 조항이 포함되어 있어 주목받고 있다.

문화체육관광부 관계자는 "창작자들의 권리를 보호하면서도 AI 기술 발전을 저해하지 않는 균형 잡힌 정책을 만들겠다"고 밝혔다.`,
    difficultTerms: [
      {
        term: '지식재산권',
        startIndex: 0,
        endIndex: 0,
        easyDefinition: '사람이 머리를 써서 만든 것(노래, 그림, 발명품 등)을 보호해주는 권리예요.',
        analogy: '내가 그린 그림은 나만의 것이잖아요? 다른 사람이 허락 없이 가져가면 안 되는 것처럼, 어른들이 만든 작품도 똑같이 보호받는 거예요.',
        relatedEmoji: '💡',
      },
      {
        term: '법안',
        startIndex: 1,
        endIndex: 1,
        easyDefinition: '새로운 규칙(법)을 만들기 위해 준비한 계획서예요.',
        analogy: '학교에서 새로운 규칙을 만들 때 선생님들이 먼저 회의하고 제안서를 쓰는 것처럼, 나라의 규칙을 만들 때도 제안서를 먼저 쓰는데 그걸 법안이라고 해요.',
        relatedEmoji: '📋',
      },
      {
        term: '이해상충',
        startIndex: 2,
        endIndex: 2,
        easyDefinition: '서로 원하는 것이 달라서 부딪히는 상황이에요.',
        analogy: '친구와 내가 같은 장난감을 갖고 싶을 때 생기는 갈등과 비슷해요. AI 회사는 자유롭게 AI를 만들고 싶고, 원래 작품을 만든 사람은 자기 것이 보호받길 원하는 거예요.',
        relatedEmoji: '⚡',
      },
      {
        term: '저작권법',
        startIndex: 3,
        endIndex: 3,
        easyDefinition: '창작물을 만든 사람의 권리를 보호해주는 법이에요.',
        analogy: '작가가 책을 쓰면 그 책은 작가의 것이에요. 다른 사람이 마음대로 복사해서 팔면 안 되는 이유가 바로 이 법 때문이에요.',
        relatedEmoji: '📚',
      },
      {
        term: '데이터셋',
        startIndex: 4,
        endIndex: 4,
        easyDefinition: 'AI가 공부할 때 사용하는 많은 자료들의 모음이에요.',
        analogy: '우리가 시험 공부할 때 교과서, 문제집을 보는 것처럼, AI도 많은 글이나 그림을 보면서 배워요. 그 공부 자료들을 모아놓은 걸 데이터셋이라고 해요.',
        relatedEmoji: '📊',
      },
      {
        term: '투명성',
        startIndex: 5,
        endIndex: 5,
        easyDefinition: '숨기는 것 없이 모든 것을 솔직하게 보여주는 것이에요.',
        analogy: '유리창처럼 안이 다 보이는 거예요. AI가 어떤 자료로 공부했는지 숨기지 않고 다 알려주면 "투명하다"고 해요.',
        relatedEmoji: '🔍',
      },
    ],
  },
  {
    id: 'news_002',
    title: '기후변화로 북극 빙하 면적 역대 최저... "2040년 북극 여름 빙하 사라질 수도"',
    category: '환경',
    publishDate: '2025년 12월 4일',
    thumbnail: '/news/arctic.jpg',
    content: `세계기상기구(WMO)가 올해 북극 <span class="difficult-term" data-term-id="0">빙하</span>의 면적이 관측 이래 가장 작아졌다고 발표했다.

전문가들은 <span class="difficult-term" data-term-id="1">지구온난화</span>가 예상보다 빠르게 진행되고 있으며, 이대로라면 2040년경에는 북극의 여름 빙하가 완전히 사라질 수 있다고 경고했다.

이로 인해 <span class="difficult-term" data-term-id="2">해수면</span> 상승이 가속화되고 있으며, 저지대 국가들은 <span class="difficult-term" data-term-id="3">침수</span> 위험에 처해 있다.

<span class="difficult-term" data-term-id="4">생태계</span>에도 큰 영향을 미쳐, 북극곰을 비롯한 여러 동물들의 서식지가 위협받고 있다.

각국 정상들은 <span class="difficult-term" data-term-id="5">탄소 배출</span>량을 줄이기 위한 긴급 회의를 소집했다.`,
    difficultTerms: [
      {
        term: '빙하',
        startIndex: 0,
        endIndex: 0,
        easyDefinition: '오랜 시간 동안 쌓인 눈이 꽁꽁 얼어서 만들어진 아주 큰 얼음덩어리예요.',
        analogy: '냉동실에 물을 넣어두면 얼음이 되잖아요? 빙하는 수천 년 동안 눈이 쌓이고 쌓여서 산처럼 커진 거대한 얼음이에요.',
        relatedEmoji: '🧊',
      },
      {
        term: '지구온난화',
        startIndex: 1,
        endIndex: 1,
        easyDefinition: '지구의 온도가 점점 더워지는 현상이에요.',
        analogy: '담요를 덮으면 따뜻해지잖아요? 자동차나 공장에서 나오는 나쁜 공기가 지구를 담요처럼 감싸서 점점 더워지는 거예요.',
        relatedEmoji: '🌡️',
      },
      {
        term: '해수면',
        startIndex: 2,
        endIndex: 2,
        easyDefinition: '바닷물의 높이예요.',
        analogy: '욕조에 물을 채우면 물 높이가 올라가잖아요? 빙하가 녹으면 그 물이 바다로 가서 바닷물 높이(해수면)가 올라가는 거예요.',
        relatedEmoji: '🌊',
      },
      {
        term: '침수',
        startIndex: 3,
        endIndex: 3,
        easyDefinition: '물에 잠기는 것이에요.',
        analogy: '비가 많이 오면 운동장에 물웅덩이가 생기잖아요? 해수면이 올라가면 바닷가 마을이 물에 잠길 수 있어요.',
        relatedEmoji: '💧',
      },
      {
        term: '생태계',
        startIndex: 4,
        endIndex: 4,
        easyDefinition: '동물, 식물, 그리고 자연환경이 서로 연결되어 함께 살아가는 시스템이에요.',
        analogy: '반 친구들이 서로 도와가며 생활하는 것처럼, 자연에서도 동물, 식물, 공기, 물이 서로 도우며 살아가요.',
        relatedEmoji: '🌿',
      },
      {
        term: '탄소 배출',
        startIndex: 5,
        endIndex: 5,
        easyDefinition: '자동차나 공장에서 나오는 나쁜 공기(이산화탄소)를 내보내는 것이에요.',
        analogy: '숨을 쉴 때 우리도 이산화탄소를 내뱉잖아요? 자동차나 공장은 훨씬 더 많이 내뿜어서 지구를 덥게 만들어요.',
        relatedEmoji: '🏭',
      },
    ],
  },
  {
    id: 'news_003',
    title: '청소년 온라인 안전 교육 의무화... "디지털 시민의식 함양이 핵심"',
    category: '사회',
    publishDate: '2025년 12월 3일',
    thumbnail: '/news/digital-safety.jpg',
    content: `교육부가 내년부터 초·중·고등학교에서 <span class="difficult-term" data-term-id="0">사이버 안전</span> 교육을 의무화한다고 발표했다.

이번 교육에는 <span class="difficult-term" data-term-id="1">개인정보</span> 보호, <span class="difficult-term" data-term-id="2">사이버 불링</span> 예방, 가짜 뉴스 판별법 등이 포함된다.

교육부 관계자는 "디지털 환경에서 자라나는 학생들에게 <span class="difficult-term" data-term-id="3">디지털 시민의식</span>을 기르는 것이 무엇보다 중요하다"고 강조했다.

전문가들은 부모와 교사의 역할도 중요하다며, <span class="difficult-term" data-term-id="4">미디어 리터러시</span> 교육의 확대를 촉구했다.`,
    difficultTerms: [
      {
        term: '사이버 안전',
        startIndex: 0,
        endIndex: 0,
        easyDefinition: '인터넷을 사용할 때 위험한 것들로부터 나를 지키는 것이에요.',
        analogy: '길을 건널 때 신호등을 보고 좌우를 살피는 것처럼, 인터넷에서도 조심해야 할 것들이 있어요.',
        relatedEmoji: '🛡️',
      },
      {
        term: '개인정보',
        startIndex: 1,
        endIndex: 1,
        easyDefinition: '나만의 비밀 정보예요. 이름, 주소, 전화번호, 학교 이름 같은 것들이에요.',
        analogy: '일기장에 쓴 비밀처럼, 아무에게나 알려주면 안 되는 나만의 정보예요.',
        relatedEmoji: '🔐',
      },
      {
        term: '사이버 불링',
        startIndex: 2,
        endIndex: 2,
        easyDefinition: '인터넷이나 메신저에서 다른 사람을 괴롭히는 것이에요.',
        analogy: '학교에서 친구를 놀리거나 따돌리면 안 되는 것처럼, 온라인에서도 나쁜 말로 다른 사람을 괴롭히면 안 돼요.',
        relatedEmoji: '😢',
      },
      {
        term: '디지털 시민의식',
        startIndex: 3,
        endIndex: 3,
        easyDefinition: '인터넷 세상에서 다른 사람을 존중하고 규칙을 지키는 마음이에요.',
        analogy: '우리 동네에서 이웃과 사이좋게 지내고 쓰레기를 함부로 버리지 않는 것처럼, 인터넷에서도 예의 바르게 행동해야 해요.',
        relatedEmoji: '🌐',
      },
      {
        term: '미디어 리터러시',
        startIndex: 4,
        endIndex: 4,
        easyDefinition: 'TV, 인터넷, 뉴스 같은 것을 올바르게 이해하고 판단하는 능력이에요.',
        analogy: '글을 읽을 줄 알아야 책을 이해할 수 있는 것처럼, 뉴스나 인터넷 정보가 진짜인지 가짜인지 구별하는 능력이에요.',
        relatedEmoji: '📱',
      },
    ],
  },
];

// 추천 뉴스 목업
export const RECOMMENDED_NEWS = [
  {
    id: 'rec_001',
    title: '초등학생이 만든 앱, 교육부 장관상 수상',
    category: '교육',
    thumbnail: '/news/rec1.jpg',
  },
  {
    id: 'rec_002',
    title: '멸종위기 동물 보호, 우리가 할 수 있는 일은?',
    category: '환경',
    thumbnail: '/news/rec2.jpg',
  },
  {
    id: 'rec_003',
    title: '겨울방학 코딩 캠프, 전국 100개 학교에서 개최',
    category: 'IT/과학',
    thumbnail: '/news/rec3.jpg',
  },
];
