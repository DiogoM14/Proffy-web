import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

`;

export const PageTeacherForm = styled.div`
  max-width: 700px;

  header {
    display: flex;
    flex-direction: column;
    background: var(--color-primary);
  }

  header div {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-in-primary);
    padding: 1.6rem 0;
  }

  header div a {
    height: 3.2rem;
    transition: opacity .2s;

    &:hover {
      opacity: 0.6;
    }
  }

  header div > img {
    height: 1.6rem;
  }

  header .header-content {
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 3.2rem auto;
  }

  header .header-content strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

`;
