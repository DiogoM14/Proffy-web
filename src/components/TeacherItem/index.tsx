import React from 'react';

import { Container, TeacherItems, Header, Body, Footer } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
  return (
    <Container>
            <TeacherItems>
            <Header>
              <img src={teacher.avatar} alt={teacher.name} />
              <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span>
              </div>
            </Header>

            <Body>
              {teacher.bio}
            </Body>

            <Footer>
              <p>
                Preço/hora
                <strong>{teacher.cost} $</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contacto
              </button>
            </Footer>
          </TeacherItems>
    </Container>
  );
}

export default TeacherItem;
