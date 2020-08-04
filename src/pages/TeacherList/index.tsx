import React from 'react';

import { Container, Form, Main, TeacherItem, Header, Footer } from './styles';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherList: React.FC = () => {
  return (
    <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form id="search-teachers">
            <div className="input-block">
              <label htmlFor="subject">Matéria</label>
              <input type="text" id="subject" />
            </div>

            <div className="input-block">
              <label htmlFor="week_day">Dia da Semana</label>
              <input type="text" id="week_day" />
            </div>

            <div className="input-block">
              <label htmlFor="time">Hora</label>
              <input type="text" id="time" />
            </div>
          </Form>
        </PageHeader>

        <Main>
          <TeacherItem className="teacher-item">
            <Header>
              <img src="https://avatars3.githubusercontent.com/u/53921606?s=460&u=f37a358780cf3ad971fa0151eed1e1977a14f19e&v=4" alt="Diogo Martins"/>
              <div>
                <strong>Diogo Martins</strong>
                <span>Química</span>
              </div>
            </Header>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              <br/>
              Voluptatibus velit vel aut eveniet dicta nulla vitae deserunt saepe ab natus enim eos asperiores recusandae, itaque, veniam unde molestiae quidem debitis!
            </p>

            <Footer>
              <p>
                Preço/hora
                <strong>10$</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em Contacto
              </button>
            </Footer>
          </TeacherItem>
        </Main>
    </Container>
  );
}

export default TeacherList;
