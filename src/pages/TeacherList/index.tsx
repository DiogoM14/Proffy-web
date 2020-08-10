import React, { useState, FormEvent } from 'react';

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Form, Main } from './styles';
import api from '../../services/api';


const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setTeachers(response.data);
  }

  return (
    <Container>
        <PageHeader title="Estes são os proffys disponíveis">
          <Form id="search-teachers" onSubmit={searchTeachers}>
            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
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
              value={week_day}
              onChange={(e) => { setWeekDay(e.target.value) }}
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

            <Input
              type="time"
              name="time"
              label="Hora"
              value={time}
              onChange={(e) => { setTime(e.target.value) }}
            />

            <button type="submit">Procurar</button>
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
