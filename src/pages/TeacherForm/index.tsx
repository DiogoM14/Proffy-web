import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, PageTeacherForm, Main, ScheduleItem } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <PageTeacherForm>
        <PageHeader
          title="Que incrível quereres dar aulas."
          description="O primeiro passo é preencher este formulário de inscrição."
        />

        <Main>
          <fieldset>
            <legend>Os seus dados</legend>

            <Input name="name" label="Nome completo" />
            <Input name="avatar" label="Avatar" />
            <Input name="whatsapp" label="Whatsapp" />
            <Textarea name="bio" label="Biografia" />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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

            <Input name="cost" label="Custo da sua aula à hora" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button">
                + Novo horário
              </button>
            </legend>

            <ScheduleItem className="schedule-item">
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

              <Input name="from" label="Das" type="time" />
              <Input name="to" label="Até" type="time" />
            </ScheduleItem>

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="button">Guardar registo</button>
          </footer>
        </Main>
      </PageTeacherForm>
    </Container>
  );
}

export default TeacherForm;
