import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, PageTeacherForm, Main } from './styles';

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
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Input name="subject" label="Matéria" />
            <Input name="cost" label="Custo da sua aula à hora" />
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
