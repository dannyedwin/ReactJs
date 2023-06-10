import React, { useEffect, useState } from "react";
import styled from "styled-components";

import backgroundImage from "./background.png";

const App = () => {
  const [aa, setAdvice] = useState("");
  let [message, setMessage] = useState({
    id: "fa1ca3c1-cc1e-4ed9-86b8-f60d8312d499",
    advice: "Neal Topham"
  });
  // const [{ displayName, email, photoURL, role }, setAdvice] = useState("");
  console.log("1=Hit");

  useEffect(() => {
    const url = "https://api.adviceslip.com/advice";
    console.log("2=Hit");
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const json = await response.json();

        console.log("A -" + json);
        setMessage(json.slip);
        setAdvice(json.slip.advice);
        console.log("55 " + aa);

        console.log("6 " + message.id);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Description>{aa}</Description>
      <Title>Fetch Data from an API</Title>
      <Description>{aa.id}</Description>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  padding-top: 150px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
