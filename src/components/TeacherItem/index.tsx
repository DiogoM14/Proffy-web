import React from 'react';

import { Container, TeacherItems, Header, Body, Footer } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

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
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }

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
              <a target="_blank" onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}`}>
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contacto
              </a>
            </Footer>
          </TeacherItems>
    </Container>
  );
}

export default TeacherItem;
