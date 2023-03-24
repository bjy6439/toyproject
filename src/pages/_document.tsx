import HeadInfo from "@/components/HeadInfo";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <HeadInfo />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
