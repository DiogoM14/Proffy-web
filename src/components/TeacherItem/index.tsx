import React from 'react';

import { Container, TeacherItems, Header, Body, Footer } from './styles';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


const TeacherItem: React.FC = () => {
  return (
    <Container>
            <TeacherItems>
            <Header>
              <img src="https://avatars3.githubusercontent.com/u/53921606?s=460&u=f37a358780cf3ad971fa0151eed1e1977a14f19e&v=4" alt="Diogo Martins"/>
              <div>
                <strong>Diogo Martins</strong>
                <span>Química</span>
              </div>
            </Header>

            <Body>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br /><br />
              Voluptatibus velit vel aut eveniet dicta nulla vitae deserunt saepe ab natus enim eos asperiores recusandae, itaque, veniam unde molestiae quidem debitis!
            </Body>

            <Footer>
              <p>
                Preço/hora
                <strong>10,00 $</strong>
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
