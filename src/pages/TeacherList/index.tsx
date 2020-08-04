import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import { Container, Form, Main } from './styles';


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
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </Main>
    </Container>
  );
}

export default TeacherList;
