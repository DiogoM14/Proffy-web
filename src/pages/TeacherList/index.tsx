import React from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Form, Main } from './styles';


const TeacherList: React.FC = () => {
  return (
    <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form id="search-teachers">
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciência', label: 'Ciência' },
                { value: 'Físico Química', label: 'Físico Quimica' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'História', label: 'História' },
                { value: 'Geografia', label: 'Geografia' },
              ]}
            />

            <Select
              name="week_day"
              label="Dia da Semana"
              options={[
                { value: '0', label: 'Domingo' },
                { value: '1', label: 'Segunda-Feira' },
                { value: '2', label: 'Terça-Feira' },
                { value: '3', label: 'Quarta-Feira' },
                { value: '4', label: 'Quinta-Feira' },
                { value: '5', label: 'Sexta-Feira' },
                { value: '6', label: 'Sábado' },
              ]}
            />

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
