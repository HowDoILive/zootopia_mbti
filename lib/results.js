/**
 * MBTI 유형별 주토피아 봉사 스타일 결과
 * - characterName: 캐릭터 이름 (영문)
 * - characterNameKo: 캐릭터 이름 (한글)
 * - volunteerStyle: 봉사 현장 속 나의 모습 (한 줄)
 * - description: 봉사 스타일 설명 (상세)
 * - image: 캐릭터 이미지 경로 (public/characters/ 에 넣을 파일명)
 */

export const MBTI_RESULTS = {
  ENFJ: {
    characterName: "Judy",
    characterNameKo: "주디",
    volunteerStyle: "모두의 사기를 북돋우는 열정적인 리더",
    description:
      "당신은 주토피아의 주디처럼 팀의 중심에서 열정을 불어넣는 리더예요. 봉사 현장에서 누구보다 앞장서 일하지만, 동시에 팀원 한 명 한 명의 상태를 살피며 '우리 함께 할 수 있어!'라는 메시지를 전합니다. 어려운 순간에도 긍정적인 에너지로 모두를 이끄는 당신의 모습이 진정한 리더십이에요.",
    color: "from-amber-400 to-orange-500",
    image: "/characters/judy.png",
  },
  ENTP: {
    characterName: "Nick",
    characterNameKo: "닉",
    volunteerStyle: "위기 상황에서 기발한 잔머리(아이디어)로 해결하는 브레인",
    description:
      "당신은 닉처럼 예상치 못한 상황에서도 기발한 아이디어로 해결책을 찾아내요. '이건 어때?', '저렇게 하면 되지 않을까?' 하며 남다른 발상으로 팀의 브레인 역할을 합니다. 봉사 현장의 돌발 상황도 당신 앞에서는 오히려 재미있는 챌린지가 되어버려요.",
    color: "from-orange-600 to-amber-700",
    image: "/characters/nick.png",
  },
  INFP: {
    characterName: "Gary",
    characterNameKo: "게리",
    volunteerStyle: "소외된 이들의 마음을 가장 깊게 공감해주는 따뜻한 조력자",
    description:
      "당신은 게리처럼 말없이 곁에서 깊은 공감을 전하는 사람이에요. 눈에 잘 띄지 않아도, 소외되기 쉬운 대상자에게 '나는 당신 편이에요'라는 메시지를 가장 진심으로 전합니다. 봉사의 본질을 마음으로 이해하고, 한 명 한 명의 이야기에 귀 기울이는 당신의 모습이 소중해요.",
    color: "from-violet-400 to-purple-500",
    image: "/characters/gary.png",
  },
  ENFP: {
    characterName: "Nibbles",
    characterNameKo: "니블스",
    volunteerStyle: "지치지 않는 에너지를 뿜어내는 동아리의 비타민",
    description:
      "당신은 니블스처럼 어디서나 에너지가 넘치는 비타민 같은 존재예요. 봉사가 길어져도 지치지 않고 오히려 '다음엔 뭐 할까?' 하며 다음 활동을 기대합니다. 팀이 힘들어 보일 때마다 당신의 유쾌한 한 마디가 분위기를 반전시키는 동아리 속 활력소예요.",
    color: "from-amber-400 to-orange-500",
    image: "/characters/nibbles.png",
  },
  ISTJ: {
    characterName: "Phoburt",
    characterNameKo: "포버트",
    volunteerStyle: "정해진 매뉴얼대로 완벽하고 꼼꼼하게 일을 처리하는 정석파",
    description:
      "당신은 포버트처럼 정해진 규칙과 매뉴얼을 신뢰하고, 그대로 완벽하게 실행하는 정석파예요. '이렇게 하기로 했으니까'를 지키며 봉사 품질을 일정하게 유지합니다. 팀원들이 당신이 맡은 구역은 걱정 없이 넘어갈 수 있을 만큼 믿음직해요.",
    color: "from-stone-500 to-stone-700",
    image: "/characters/phoburt.png",
  },
  INFJ: {
    characterName: "Fuzzby",
    characterNameKo: "퍼즈비",
    volunteerStyle: "봉사의 진정한 의미를 고민하고 팀의 방향을 잡아주는 명상가",
    description:
      "당신은 퍼즈비처럼 '우리가 왜 이 일을 하는지'를 깊이 생각하는 사람이에요. 단순히 일만 하는 것이 아니라, 봉사의 의미와 팀의 방향성을 고민하며 조용히 통찰을 나눕니다. 말은 많지 않지만 한 번 내놓는 의견이 팀의 나침반이 되는 존재예요.",
    color: "from-violet-500 to-purple-600",
    image: "/characters/fuzzby.png",
  },
  ESFP: {
    characterName: "Winddancer",
    characterNameKo: "윈드댄서",
    volunteerStyle: "친화력 끝판왕! 처음 보는 시민과도 금방 절친이 되는 소통가",
    description:
      "당신은 윈드댄서처럼 첫인상부터 벽을 없애고, 누구와도 편하게 대화하는 소통의 달인이에요. 봉사 현장에서 처음 만난 시민, 동료, 대상자와도 금방 친해져 '저 사람 좋다'는 말을 자주 듣습니다. 분위기를 만들고 사람들을 하나로 잇는 당신의 친화력이 봉사의 첫 관문을 열어요.",
    color: "from-rose-400 to-pink-500",
    image: "/characters/winddancer.png",
  },
  ESTP: {
    characterName: "Jesus",
    characterNameKo: "헤수스",
    volunteerStyle: "말이 필요 없다! 몸으로 뛰는 현장형 행동대장",
    description:
      "당신은 헤수스처럼 말보다 몸이 먼저 나가는 현장형이에요. '누가 할래?' 하면 손부터 들고, 무거운 것 나르기, 설치·철수 같은 힘든 일도 마다하지 않습니다. 회의보다 현장에서 땀 흘리며 움직일 때 가장 빛나는 타입이에요.",
    color: "from-emerald-600 to-teal-700",
    image: "/characters/jesus.png",
  },
  ISTP: {
    characterName: "Finnick",
    characterNameKo: "핀닉",
    volunteerStyle: "무심한 듯 시크하게 고장 난 물건이나 상황을 뚝딱 고쳐내는 해결사",
    description:
      "당신은 핀닉처럼 말은 적지만 손재주와 상황 대처력이 뛰어나요. 장비가 고장 나거나 예상치 못한 문제가 생기면 '내가 해볼게' 하며 조용히 해결해냅니다. 화려한 포지션이 아니어도 팀이 돌아가게 만드는 숨은 해결사예요.",
    color: "from-stone-600 to-slate-700",
    image: "/characters/finnick.png",
  },
  ESFJ: {
    characterName: "Clawhauser",
    characterNameKo: "클로하우저",
    volunteerStyle: "친절하고 사교적으로 누구에게나 웃음과 편안함을 주는 접대 담당",
    description:
      "당신은 클로하우저처럼 친절하고 사교적이어서 봉사 현장에서 처음 오는 사람, 어려워하는 사람에게 먼저 다가가 편하게 만들어요. 접대나 안내 역할을 맡으면 누구에게나 웃음과 편안함을 전하는 당신의 존재가 봉사의 첫인상을 결정해요.",
    color: "from-rose-400 to-pink-500",
    image: "/characters/clawhauser.png",
  },
  ESTJ: {
    characterName: "Bogo",
    characterNameKo: "보고 서장",
    volunteerStyle: "강력한 카리스마로 봉사 현장의 질서를 단숨에 잡는 지휘관",
    description:
      "당신은 보고 서장처럼 봉사 현장에서 '지금부터 역할은 이렇게, 시간은 이렇게' 하고 질서를 단숨에 잡는 지휘관이에요. 카리스마와 명확한 지시로 누가 무엇을 할지 분명히 하고, 덕분에 팀이 혼란 없이 움직입니다.",
    color: "from-emerald-700 to-teal-800",
    image: "/characters/bogo.png",
  },
  INTJ: {
    characterName: "Bellwether",
    characterNameKo: "벨웨더",
    volunteerStyle: "장기적인 봉사 계획을 치밀하게 설계하는 전략가",
    description:
      "당신은 벨웨더처럼 큰 그림을 보고, 장기적인 봉사 계획을 치밀하게 설계하는 전략가예요. '한 번에 끝이 아니라, 다음 달, 다음 분기에는 이렇게 가자' 하는 식으로 로드맵을 세우고, 그에 맞춰 단계별로 실행하는 데 강해요.",
    color: "from-indigo-600 to-blue-700",
    image: "/characters/bellwether.png",
  },
  ENTJ: {
    characterName: "Mr. Big",
    characterNameKo: "미스터 빅",
    volunteerStyle: "작은 체구(혹은 조용한 포스) 뒤에 숨겨진 압도적인 추진력",
    description:
      "당신은 미스터 빅처럼 겉으로는 작거나 조용해 보여도, 한번 목표를 정하면 압도적인 추진력으로 밀어붙이는 타입이에요. '이건 해야 해'라고 생각하면 장애물이 있어도 방법을 찾아 결국 이루어냅니다. 봉사 팀의 숨은 엔진이에요.",
    color: "from-slate-600 to-slate-800",
    image: "/characters/mrbig.png",
  },
  ISFP: {
    characterName: "Flash",
    characterNameKo: "플래시",
    volunteerStyle: "느긋하지만 한 번 시작하면 끝까지 책임지는 평화주의자",
    description:
      "당신은 플래시처럼 평소엔 느긋해 보여도, 한 번 맡은 일은 끝까지 책임지려 하는 평화주의자예요. 시키지 않아도 자기 구역은 꼼꼼히 하고, 팀 분위기를 싸움 없이 유지하는 데 기여합니다. 말보다 행동으로 신뢰를 쌓는 타입이에요.",
    color: "from-teal-400 to-cyan-500",
    image: "/characters/flash.png",
  },
  ISFJ: {
    characterName: "Clawhauser (Prudence)",
    characterNameKo: "프루프루",
    volunteerStyle: "보이지 않는 곳에서 팀원들을 살뜰히 챙기는 헌신적인 서포터",
    description:
      "당신은 프루프루처럼 앞에 나서기보다 보이지 않는 곳에서 팀원들을 살뜰히 챙기는 서포터예요. 물 한 병, 간식, 필요한 물품을 미리 생각해 두고, '혹시 힘들지 않아?' 하며 조용히 돌봐줍니다. 당신이 있어서 팀이 편하다는 말을 자주 들어요.",
    color: "from-teal-500 to-cyan-600",
    image: "/characters/prudence.png",
  },
  INTP: {
    characterName: "Milton (Lingsley)",
    characterNameKo: "밀턴 링슬리",
    volunteerStyle: "봉사 시스템의 효율성을 분석하고 개선안을 찾는 분석가",
    description:
      "당신은 밀턴 링슬리처럼 '이 과정이 왜 이렇게 되어 있지?', '이렇게 하면 더 효율적이지 않을까?' 하며 봉사 시스템을 분석하고 개선안을 찾는 타입이에요. 데이터나 흐름을 정리하는 데 강하고, 한 번 관심 붙인 주제는 끝까지 파서 팀에 제안해요.",
    color: "from-indigo-500 to-blue-600",
    image: "/characters/milton.png",
  },
};
