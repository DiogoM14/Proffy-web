import styled from 'styled-components';

export const Container = styled.div`
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
    position: relative;
    margin: 3.2rem auto;
    display: flex;
    flex-direction: column;
  }

  header .header-content strong {
    font: 700 3.6rem Archivo;
    line-height: 4.2rem;
    color: var(--color-title-in-primary);
  }

  header .header-content p {
    max-width: 30rem;
    font-size: 1.6rem;
    line-height: 3.6rem;
    color: var(--color-text-in-primary);
    margin-top: 2.4rem;
  }

  @media (min-width: 700px) {
    height: 340px;

    header div {
      max-width: 1100px;
    }

    .header-content {
      flex: 1;
      max-width: 740px;
      margin: 0 auto;
      padding-bottom: 48px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .header-content strong {
      max-width: 350px;
    }
  }
`;
