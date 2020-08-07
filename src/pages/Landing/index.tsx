import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
import api from '../../services/api';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, [])

  return (
    <Container>
      <PageLandingContent className="container">
        <LogoContainer className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2 className="slogan">A tua plataforma de estudos online</h2>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-img"/>

        <ButtonsContainer className="btns">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </ButtonsContainer>

        <TotalConnections className="total-connections">
          Total de {totalConnections} conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </TotalConnections>

      </PageLandingContent>
    </Container>
  );
}

export default Landing;
