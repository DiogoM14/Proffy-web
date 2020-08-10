import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;

    Form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      position: absolute;
      bottom: -74px;

      button {
        margin-top: 44px;
      }

      .input-block {
        align-content: left;
      }

      .input-block + .input-block {
        margin-top: 0;
      }
    }

    Main {
      padding: 3.2rem 0;
      max-width: 740px;
      margin: 0 auto;
    }
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;
  width: 100%;

  label {
    color: var(--color-text-in-primary);
    left: 0;
  }

  button {
    width: 100%;
    height: 5.6rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color .2s;
    margin-top: 3.2rem;

    &:hover {
      background: var(--color-secondary-dark);
    }
  }
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;

