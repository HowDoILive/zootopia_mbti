import "./globals.css";

export const metadata = {
  title: "주토피아 봉사 스타일 MBTI 테스트",
  description: "나의 봉사 스타일을 알아보는 주토피아 MBTI 테스트",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
