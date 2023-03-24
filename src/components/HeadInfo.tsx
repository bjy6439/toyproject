import Head from "next/head";
import React from "react";

const HeadInfo = ({
  title,
  name,
  content,
}: {
  title: string;
  name?: string;
  content?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={name}></meta>
      <meta content={content}></meta>
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by Next js",
  content: "practice next js",
};

export default HeadInfo;
