import styled from "styled-components";

export const Container = styled.div`
  --timeline: 50%;
  --box-shadow: -0.3em -0.3em 0.5em #fff,
                0.3em 0.3em 0.5em #a3b1c6;
  --background: #e0e5ec;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 0;
  padding-top: 0;
  background: var(--background);
  width: 100%;
  height: 100vh;

  &>* {
    font-size: clamp(0.5rem, 0.3rem + 0.6vw, 1.5rem);
  }

  &:before {
    position: absolute;
    content: '';
    width: 0.5em;
    height: 100vh;
    background: #f8f2f2;
    box-shadow: inset -0.3em -0.3em 0.5em #fff,
                inset 0.3em 0.3em 0.5em #a3b1c6;
    left: var(--timeline);
    transform: translateX(-50%)
  }

  @media(max-width: 320px) {
    --timeline: 10%;
  }
`
export const CardContainer = styled.div`
  z-index: 1;
  --left: 60%;
  --right: -59%;
  --text-align: ${({isOnLeft}) => isOnLeft ? "left" : "right"};
  top: 0;
  position: absolute;
  display: flex;
  cursor: pointer;
  opacity: ${({verPos}) => verPos >= 51 ? 0 : verPos < 0 ? 0 : 1};
  flex-direction: column;
  text-align: var(--text-align);
  background: var(--background);
  border-radius: 0.5em;
  box-shadow: var(--box-shadow);
  width: 16em;
  min-height: 6em;
  padding: 0.5em;
  overflow: hidden;
  transform: ${({verPos, isOnLeft}) => `translate(${isOnLeft ? "var(--left)" : "var(--right)"}, ${verPos}em)`};
  transition: opacity 2s ease-in-out, transform 1.4s ease-in-out;
  
  @media(max-width: 320px) {
    --left: 2em;
    --right: 2em;
    left: var(--timeline);
    --text-align: "left";
  }

  &>* {
    margin: 0.2em;
  }
`


export const Time = styled.div`
  font-weight: 700;
  color: #010831;

  & span{
    background: rgba(255, 255, 255, 0.4);
    padding: 0.3em 0.5em;
    border-radius: 0.5em;
    box-shadow: inset -0.15em -0.15em 0.3em #fff,
                inset 0.2em 0.2em 0.3em #a3b1c6;
  }
`

export const Title = styled.h3`
  color: red;
`

export const Description = styled.p`
  color: #010831;
`

export const Mark = styled.div`
  left: var(--timeline);
  opacity: ${({verPos}) => verPos >= 49 ? 0 : verPos < 0 ? 0 : 1};
  position: absolute;
  width: 0.6em;
  height: 0.6em;
  border-radius: 50%;
  border: 1.5px solid white;
  box-shadow: 0.3em 0.3em 0.5em #fb8e8e inset,
              -0.3em -0.3em 0.3em red inset,
              -0.3em -0.3em 0.5em #fff,
              0.3em 0.3em 0.5em #a3b1c6;
  transform: ${({verPos}) => `translate(-50%, ${verPos}em)`};
  transition: opacity 2.5s ease-in-out, transform 1.4s ease-in-out;
`

export const Modal = styled.div`
  display: ${({visible}) => visible ? "inline" : "none"};
  float: left;
  position: fixed;
  background: white;
  left: 50%;
  top: 50%;
  text-align: center;
  padding: 1em;
  transform: translate(-50%, -50%);
  transition: all 2s ease;
  z-index: 10;
`
export const Close = styled.div`
  position: fixed;
  cursor: pointer;
  top: 0.5em;
  right: 0.5em;
  width: 4em;
  padding: 0.2em;
  color: red;
  font-weight: 600;
  font-size: 0.6rem;
  height: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`