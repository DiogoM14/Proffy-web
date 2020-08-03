import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-text-in-primary);
  background: var(--color-primary);
`;

export const PageLandingContent = styled.div`
  max-width: 700px;

  .hero-img {
    width: 100%;

    grid-area: hero;
    justify-self: end;
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: "logo hero hero" "buttons buttons total";

    .logo-container {
      align-self: center;
      margin: 0;
      text-align: left;
    }

    .slogan {
      text-align: initial;
      font-size: 3.3rem;
    }

    .hero-img {
      width: 100%;
    }

    .btns {
      justify-content: flex-start;
    }

    .btns a {
      font-size: 2.4rem;
    }

    .btns a img {
      margin-right: 2.4rem;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  grid-area: logo;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  grid-area: buttons;


  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;

    &:first-child {
      margin-right: 1.6rem;
    }

    font: 700 2.0rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: var(--color-button-text);

    transition: background-color .2s;

    img {
      width: 4rem;
    }
  }

  a.study {
    background: var(--color-primary-lighter);

    &:hover {
      background: var(--color-primary-light);
    }
  }

  a.give-classes {
    background: var(--color-secondary);

    &:hover {
    background: var(--color-secondary-dark);
    }
  }
`;

export const TotalConnections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  grid-area: total;

  img {
    margin-left: 0.8rem;
  }
`;

