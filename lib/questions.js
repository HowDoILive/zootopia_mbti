/**
 * 주토피아 봉사 스타일 MBTI 테스트 질문 데이터
 * 각 차원(EI, SN, TF, JP)별 8개 질문
 */

export const QUESTIONS = {
  EI: [
    { q: "주토피아 축제 입구에서 사람들을 맞이해야 한다면?", e: "환영 인사하기", i: "안내 리플렛 나눠주기" },
    { q: "새로운 봉사 아이디어를 낼 때 나의 모습은?", e: "말하면서 아이디어를 다듬는다", i: "생각을 정리한 뒤 조용히 의견을 낸다" },
    { q: "봉사 활동 중간 휴식 시간에 나는?", e: "다른 팀원들과 수다 떨며 에너지를 얻는다", i: "혼자 조용히 간식을 먹으며 재충전한다" },
    { q: "길을 잃은 어린 동물을 발견했다면?", e: "주변에 크게 소리쳐 도움을 요청하거나 먼저 다가간다", i: "조심스럽게 다가가서 도움이 필요한지 눈을 맞추며 기다린다" },
    { q: "오늘 처음 본 다른 동아리 부원과 점심을 먹는다면?", e: "먼저 질문을 던지며 분위기를 띄운다", i: "상대방이 말을 걸어줄 때까지 기다리며 경청한다" },
    { q: "내가 선호하는 봉사 역할은?", e: "많은 사람을 상대하는 홍보팀", i: "집중력이 필요한 운영 지원팀" },
    { q: "동아리 홍보를 위해 피켓을 들어야 한다면?", e: "지나가는 사람들에게 눈인사를 건넨다", i: "피켓이 잘 보이도록 묵묵히 들고 있는다" },
    { q: "봉사가 끝난 후 뒤풀이 자리에 간다면?", e: "마지막까지 남아서 즐겁게 대화한다", i: "적당한 때에 인사하고 집으로 돌아가 쉬고 싶다" },
  ],
  SN: [
    { q: "새로운 봉사 업무를 배울 때 나는?", s: "구체적인 매뉴얼과 예시가 있어야 편하다", n: "대략적인 원리와 목표만 알면 바로 시작할 수 있다" },
    { q: "마을 벽화를 그릴 때 가장 중요한 것은?", s: "선을 넘지 않고 정해진 색으로 꼼꼼히 칠하기", n: "전체적인 색감과 이 벽화가 줄 감동을 상상하기" },
    { q: "봉사 물품을 창고에 넣어야 한다면?", s: "크기별, 종류별로 규칙에 맞춰 딱딱 정리한다", n: "나중에 찾기 편하게 대충 묶음별로 분류한다" },
    { q: "동아리 활동을 통해 얻고 싶은 것은?", s: "봉사 시간과 실질적인 경험", n: "세상을 바꿀 수 있다는 희망과 성취감" },
    { q: "봉사지에 도착했을 때 내가 먼저 보는 것은?", s: "오늘 당장 내가 해야 할 구체적인 일거리", n: "이곳의 전체적인 분위기와 사람들의 표정" },
    { q: "봉사 일지를 작성한다면?", s: "오늘 한 일을 시간 순서대로 정확히 적는다", n: "오늘 느낀 점과 앞으로의 개선 방향 위주로 적는다" },
    { q: "물건이 부족한 상황이 발생했다면?", s: "주변에 있는 대체품을 바로 찾아본다", n: "\"이걸 이렇게 활용해볼까?\" 기발한 방법을 제안한다" },
    { q: "다른 사람에게 봉사 내용을 알려줄 때?", s: "하나부터 열까지 세세하게 설명한다", n: "핵심적인 큰 흐름 위주로 설명한다" },
  ],
  TF: [
    { q: "동료가 봉사 중 실수를 해서 기가 죽어 있다면?", t: "실수를 바로잡을 방법부터 알려준다", f: "고생 많았다고 다독이며 기분을 먼저 살핀다" },
    { q: "봉사 장소를 정할 때 더 중요한 기준은?", t: "이동 효율성과 봉사 인원 수 등 객관적 지표", f: "그곳 사람들의 필요도와 우리 팀원들의 선호도" },
    { q: "가장 듣기 좋은 칭찬은?", t: "\"일 처리가 정말 빠르고 완벽하시네요!\"", f: "\"덕분에 마음이 따뜻해졌어요, 정말 감사해요!\"" },
    { q: "의견 충돌이 생겼을 때 나는?", t: "무엇이 옳은지 논리적으로 따져본다", f: "서로 마음 상하지 않게 원만하게 합의점을 찾는다" },
    { q: "나에게 봉사란?", t: "사회의 부족한 부분을 채우는 시스템적 도움", f: "마음과 마음을 나누는 따뜻한 교류" },
    { q: "운영진에게 피드백을 들었을 때?", t: "내용이 타당하다면 즉시 수긍하고 고친다", f: "말투나 분위기에 따라 조금 상처를 받을 수도 있다" },
    { q: "봉사 대상자들에게 줄 선물을 고른다면?", t: "가장 실용적이고 오래 쓸 수 있는 것", f: "정성이 느껴지고 기분을 좋게 해주는 것" },
    { q: "봉사 중 예외 상황이 발생한다면?", t: "원칙을 지키는 것이 가장 공정하다고 생각한다", f: "상황에 따라 사정을 봐주는 것이 인간적이라고 생각한다" },
  ],
  JP: [
    { q: "봉사 활동 전날 밤 나는?", j: "챙길 물건을 리스트로 적어두고 미리 가방을 싼다", p: "내일 아침에 일어나서 눈에 보이는 대로 챙긴다" },
    { q: "집결 시간이 오전 9시라면?", j: "10분 전에는 도착해서 대기한다", p: "정각 근처나 살짝 아슬아슬하게 도착한다" },
    { q: "갑자기 오늘 할 일이 바뀌었다면?", j: "미리 짜둔 스케줄이 꼬여서 불편하다", p: "\"오히려 좋아!\" 새로운 상황에 맞춰 즐겁게 임한다" },
    { q: "구역 청소를 할 때 나의 스타일은?", j: "구석부터 순서대로 계획적으로 청소한다", p: "일단 눈에 띄는 큰 쓰레기부터 치우기 시작한다" },
    { q: "동아리 보고서 제출 기한이 다가오면?", j: "미리미리 여유 있게 제출한다", p: "마감 직전에 집중력이 폭발해서 한 번에 끝낸다" },
    { q: "봉사 후 자유 시간이 주어졌을 때?", j: "주변 맛집이나 갈 곳을 미리 찾아본 곳으로 간다", p: "발길 닿는 대로 돌아다니다가 괜찮아 보이는 곳에 들어간다" },
    { q: "팀장을 맡게 된다면?", j: "각자 맡을 역할을 명확하게 나눠준다", p: "상황에 따라 유동적으로 서로 도와가며 하자고 한다" },
    { q: "내 가방 속 상태는?", j: "무엇이 어디 있는지 정확히 알고 정리되어 있다", p: "이것저것 다 들어있어서 가끔 물건을 한참 찾는다" },
  ],
};

/** 차원별로 랜덤 2문항씩 뽑아 총 8문항 세트 생성 (클라이언트에서 호출) */
export function getRandomQuestionSet() {
  const dimensions = ["EI", "SN", "TF", "JP"];
  const picked = [];

  dimensions.forEach((dim) => {
    const pool = [...QUESTIONS[dim]];
    const keys = Object.keys(pool[0]).filter((k) => k !== "q");
    // 해당 차원에서 랜덤 2문항 선택 (중복 없음)
    for (let i = 0; i < 2; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      const item = pool.splice(idx, 1)[0];
      picked.push({
        dimension: dim,
        question: item.q,
        option1: { key: keys[0], text: item[keys[0]] },
        option2: { key: keys[1], text: item[keys[1]] },
      });
    }
  });

  // 8문항 순서 셔플 (차원이 연속으로 나오지 않도록)
  for (let i = picked.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [picked[i], picked[j]] = [picked[j], picked[i]];
  }

  return picked;
}

/** 차원별 질문을 섞어서 하나의 배열로 반환 (각 질문에 dimension, option1, option2 정보 포함) */
export function getShuffledQuestions() {
  const dimensions = ["EI", "SN", "TF", "JP"];
  const allQuestions = [];

  dimensions.forEach((dim) => {
    const questions = QUESTIONS[dim];
    const keys = Object.keys(questions[0]).filter((k) => k !== "q");
    questions.forEach((item) => {
      allQuestions.push({
        dimension: dim,
        question: item.q,
        option1: { key: keys[0], text: item[keys[0]] },
        option2: { key: keys[1], text: item[keys[1]] },
      });
    });
  });

  // Fisher-Yates 셔플
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  return allQuestions;
}

/** 답변 객체로부터 MBTI 유형 계산 */
export function calculateMBTI(answers) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  Object.values(answers).forEach((answer) => {
    if (answer) {
      const [dim, choice] = answer;
      const upper = choice.toUpperCase();
      scores[upper]++;
    }
  });

  let result = "";
  result += scores.E >= scores.I ? "E" : "I";
  result += scores.S >= scores.N ? "S" : "N";
  result += scores.T >= scores.F ? "T" : "F";
  result += scores.J >= scores.P ? "J" : "P";

  return result;
}
