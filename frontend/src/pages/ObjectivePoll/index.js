import React, { Component, Fragment } from 'react';
import { Form, Input, Scope } from '@rocketseat/unform';

import Header from '../../components/Header';

import logo from '../../assets/logo-white.svg';
import radio from '../../assets/radio-on-button.svg';
import { QuestionContainer } from './styles';

import api from '../../services/api';

export default class PollStore extends Component {
  state = {
    pollName: '',
    createdQuestion: false,
  };

  async componentDidMount() {
    const question = this.props.match.params.id;
    const response = await api.get(`/question/objective/${question}`);

    this.setState({
      pollName: response.data.title,
    });
  }

  handleOnSubmit = async (data) => {
    const op0 = await api.post('/question/alternatives', {
      content: data.options.op0,
    });
    const op1 = await api.post('/question/alternatives', {
      content: data.options.op1,
    });
    const op2 = await api.post('/question/alternatives', {
      content: data.options.op2,
    });
    const op3 = await api.post('/question/alternatives', {
      content: data.options.op3,
    });
    const op4 = await api.post('/question/alternatives', {
      content: data.options.op4,
    });

    const alternatives = [op0.data, op1.data, op2.data, op3.data, op4.data];

    const question = this.props.match.params.id;

    const response = await api.put(`/question/objective/${question}`, {
      question: data.question,
      options: alternatives,
    });

    this.setState({
      createdQuestion: true,
    });
  };

  render() {
    const { pollName, createdQuestion } = this.state;
    return (
      <Fragment>
        <Header logo={logo} pollName={pollName} />
        <QuestionContainer>
          <Form onSubmit={this.handleOnSubmit}>
            <div className="form-container">
              <Input name="question" type="text" placeholder="Pergunta" autoComplete="off" />
              <img src={radio} alt="radio button" />
              <Scope path="options">
                <Input name="op0" type="text" placeholder="Alternativa 1" autoComplete="off" />
                <img src={radio} alt="radio button" />
                <Input name="op1" type="text" placeholder="Alternativa 2" autoComplete="off" />
                <img src={radio} alt="radio button" />
                <Input name="op2" type="text" placeholder="Alternativa 3" autoComplete="off" />
                <img src={radio} alt="radio button" />
                <Input name="op3" type="text" placeholder="Alternativa 4" autoComplete="off" />
                <img src={radio} alt="radio button" />
                <Input name="op4" type="text" placeholder="Alternativa 5" autoComplete="off" />
              </Scope>
            </div>
            {createdQuestion ? (
              <a
                href={`http://localhost:3000/objectivepoll/${this.props.match.params.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link de compartilhamento
              </a>
            ) : (
              <button type="submit">COMPARTILHAR</button>
            )}
          </Form>
        </QuestionContainer>
      </Fragment>
    );
  }
}
