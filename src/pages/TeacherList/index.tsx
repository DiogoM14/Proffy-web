import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import { Container, Form, Main } from './styles';


const TeacherList: React.FC = () => {
  return (
    <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form id="search-teachers">
            <Input name="subject" label="Matéria" />
            <Input name="week_day" label="Dia da Semana" />
            <Input type="time" name="time" label="Hora" />
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
