import React from 'react';
import PageHeader from '../../components/PageHeader';

import { Container, PageTeacherForm } from './styles';

const TeacherForm: React.FC = () => {
  return (
    <Container>
      <PageTeacherForm>
        <PageHeader title="Que incrível quereres dar aulas." />
      </PageTeacherForm>
    </Container>
  );
}

export default TeacherForm;
