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
`;

export const Main = styled.main`
  margin: 3.2rem auto;
  width: 90%;
`;

