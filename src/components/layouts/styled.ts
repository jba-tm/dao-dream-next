// import styled from "styled-components"


import styled from "styled-components";
import Image from 'next/image'

export const StyledHomeWrapper = styled.div`
  background-color: var(--bg-color);
  background-image: radial-gradient(
          91.53% 133.1% at 50% 133.1%,
          rgba(255, 255, 255, 0.9) 0%,
          rgba(113, 61, 255, 0.9) 32.82%,
          rgba(0, 0, 0, 0) 78.46%
  );
  background-size: 100% 300px;
  background-position: bottom;
  background-repeat: no-repeat;
  padding-bottom: 200px;
`
export const StyleHomeLandingSection = styled.section`
  position: relative;
  // background-image: radial-gradient(
  //   100.06% 120.49% at 50% -20.49%,
  //   rgba(255, 255, 255, 0.9) 0%,
  //   rgba(113, 61, 255, 0.9) 32.82%,
  //   rgba(0, 0, 0, 0) 78.46%
  // );

  background-position: 0 -100px;
  background-repeat: no-repeat;
  min-height: 100vh;

  &::before {
    z-index: 1;
    content: "";
    top: -150%;
    left: 0;
    right: 0;
    bottom: 0;

    position: absolute;
    //background: rgb(113, 61, 255);
    background: rgb(255, 255, 255);
    background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 5%,
            rgba(113, 61, 255, 1) 28%,
            rgba(2, 18, 48, 1) 58%
    );
  }
`

export const StyleHomeImage = styled.img`
  width: 300px;

  @media (min-width: 1024px) {
    width: 450px;
  }
`