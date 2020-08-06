import styled from 'styled-components';

export const Container = styled.div``;

export const PageTeacherForm = styled.div`
  width: 100vw;
  height: 100vh;

  header .header-content {
    margin-bottom: 6.4rem;
  }
`;

export const Main = styled.main`
  background: var(--color-box-base);
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    & + fieldset {
      margin-top: 6.4rem;
    }

    & legend {
      font: 700 2.4rem Archivo;
      color: var(--color-text-title);
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-line-in-white);
    }
  }

  footer {
    padding: 4rem 2.4rem;
    background: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;

    & p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: var(--color-text-complement);
    }

    & p img {
      margin-right: 2rem;
    }

    & button {
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
  }

`;
