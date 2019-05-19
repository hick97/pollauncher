import React, { Component } from 'react';
import Select from 'react-select';

import { Container, Form } from './styles';
import logo from '../../assets/logo.svg';
import api from '../../services/api';

const options = [
  { value: 'radio', label: 'Múltipla escolha' },
  { value: 'text', label: 'Resposta curta' },
];

export default class Main extends Component {
  state = {
    questionTitle: '',
    selectedOption: { value: 'text', label: 'Resposta curta' },
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { selectedOption, questionTitle } = this.state;

    // 'Redirecionando' para um nova rota
    if (selectedOption.value === 'text') {
      const response = await api.post('/question/text', {
        title: questionTitle,
      });

      const { _id: id } = response.data;

      if (response.data) {
        this.props.history.push(`/textpoll/new/${id}`);
      }
    } else {
      const response = await api.post('/question/objective', {
        title: questionTitle,
      });

      const { _id: id } = response.data;

      if (response.data) {
        this.props.history.push(`/objectivepoll/new/${id}`);
      }
    }
  };

  handleInputChange = (e) => {
    this.setState({
      questionTitle: e.target.value,
    });
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <img src={logo} alt="Logo polLauncher" />
          <input
            type="text"
            placeholder="Título da pesquisa"
            value={this.state.questionTitle}
            onChange={this.handleInputChange}
          />
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder={selectedOption}
          />
          <button type="submit">CRIAR</button>
        </Form>
      </Container>
    );
  }
}
