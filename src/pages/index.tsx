import Head from "next/head";
import { Inter } from "next/font/google";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li>
          <a href="/sub">/pages/sub/index.js</a>
        </li>
        <li>
          <a href="/sub/about">/pages/sub/about.js</a>
        </li>
        <li>
          <a href="/sub/1">/pages/sub/[id].js</a>
        </li>
        <li>
          <a href="/sub/2">/pages/sub/[id].js</a>
        </li>
      </ul>
    </div>
  );
}
