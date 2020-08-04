import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;

    Form {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      position: absolute;
      bottom: -74px;

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
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;

