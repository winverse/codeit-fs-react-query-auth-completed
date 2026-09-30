import localFont from "next/font/local";
import "@/styles/globals.css.js";
import AppProviders from "@/providers/AppProviders";

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
});

export const metadata = {
  title: "React Query Auth",
  description: "React Query 기반 로그인/회원가입 실습",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
