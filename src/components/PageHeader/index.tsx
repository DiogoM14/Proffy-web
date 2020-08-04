import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Container>
        <header>
          <div>
            <Link to="/">
              <img src={backIcon} alt="Voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy"/>
          </div>

          <div className="header-content">
            <strong>{props.title}</strong>

          {props.children}

          </div>
        </header>
    </Container>
  );
}

export default PageHeader;
