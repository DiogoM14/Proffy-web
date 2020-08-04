import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  width: 100%;

  label {
    color: var(--color-text-in-primary);
    left: 0;
  }

  .input-block {
    position: relative;
    flex-direction: column;
    padding: 0;

  }

  .input-block + .input-block {
    margin-top: 1.4rem;
  }

  .input-block label {
    font-size: 1.4rem;
  }

  .input-block input {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  .input-block:focus-within::after {
    width: (100% - 3.2rem);
    height: 2px;
    content: "";
    background: var(--color-primary-light);
    position: absolute;
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    bottom: -74px;

    Content {
      max-width: 100%;
    }

    .input-block {
      align-content: left;
    }

    .input-block + .input-block {
      margin-top: 0;
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;

export const TeacherItem = styled.article`
  background: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;
  margin-top: 2.4rem;
  overflow: hidden;
`;

export const Header = styled.header`
  padding: 3.2rem 2rem;
  display: flex;
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
  }

  div {
    margin-left: 2.4rem;

    &.strong {
      font: 700 2.4rem Archivo;
      display: block;
      color: var(--color-text-title);
    }

    &.span {
      font: 1.6rem;
      display: block;
      margin-top: 0.4rem;
    }
  }
`;

export const Footer = styled.footer``;
