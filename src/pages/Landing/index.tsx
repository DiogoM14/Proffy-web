import React from 'react';

import {
  Container,
  PageLandingContent,
  LogoContainer,
  ButtonsContainer,
  TotalConnections
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <PageLandingContent className="container">
        <LogoContainer>
          <img src={logoImg} alt="Proffy"/>
          <h2>A tua plataforma de estudos online</h2>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-img"/>

        <ButtonsContainer>
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Estudar"/>
            Estudar
          </a>
        </ButtonsContainer>

        <TotalConnections>
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>

      </PageLandingContent>
    </Container>
  );
}

export default Landing;
