import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const About = () => {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <div>
      <h1>/pages/sub/{id}.js</h1>
      <ul>
        <li>
          <a href="/">/pages/index.js</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
