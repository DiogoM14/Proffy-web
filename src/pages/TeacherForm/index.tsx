import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, PageTeacherForm, Main, ScheduleItem } from './styles';

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ]);

  function addNewScheduleItem() {
    setScheduleItems([
      ...scheduleItems,
      { week_day: 0, from: '', to: '' }
    ]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]:value }
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Registo realizado com sucesso!')

      history.push('/')
    }).catch(() => {
      alert('Erro no registo!')
    })
  }

  return (
    <Container>
      <PageTeacherForm>
        <PageHeader
          title="Que incrível quereres dar aulas."
          description="O primeiro passo é preencher este formulário de inscrição."
        />

        <Main>
          <form onSubmit={handleCreateClass}>
            <fieldset>
              <legend>Os seus dados</legend>

              <Input name="name" label="Nome completo" value={name} onChange={(e) => {setName(e.target.value) }} />
              <Input name="avatar" label="Avatar" value={avatar} onChange={(e) => {setAvatar(e.target.value) }} />
              <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={(e) => {setWhatsapp(e.target.value) }} />
              <Textarea name="bio" label="Biografia" value={bio} onChange={(e) => {setBio(e.target.value) }} />
            </fieldset>

            <fieldset>
              <legend>Sobre a aula</legend>

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

              <Input name="cost" label="Custo da sua aula à hora" value={cost} onChange={(e) => { setCost(e.target.value) }} />
            </fieldset>

            <fieldset>
              <legend>
                Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                  + Novo horário
                </button>
              </legend>

              {scheduleItems.map((scheduleItem, index) => {
                return (
                  <ScheduleItem key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da Semana"
                    value={scheduleItem.week_day}
                    onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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

                  <Input name="from" label="Das" type="time" value={scheduleItem.from} onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                  <Input name="to" label="Até" type="time" value={scheduleItem.to} onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                </ScheduleItem>
                )
              })}

            </fieldset>

            <footer>
              <p>
                <img src={warningIcon} alt="Aviso importante"/>
                Importante! <br />
                Preencha todos os dados
              </p>
              <button type="submit">Guardar registo</button>
            </footer>
          </form>
        </Main>
      </PageTeacherForm>
    </Container>
  );
}

export default TeacherForm;
