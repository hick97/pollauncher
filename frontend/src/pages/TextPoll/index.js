import React, { Component, Fragment } from 'react';
import { Form, Input } from '@rocketseat/unform';

import Header from '../../components/Header';
import logo from '../../assets/logo-white.svg';
import { QuestionContainer } from './styles';

import api from '../../services/api';

export default class PollStore extends Component {
  state = {
    pollName: '',
    createdQuestion: false,
  };

  async componentDidMount() {
    const question = this.props.match.params.id;
    const response = await api.get(`/question/text/${question}`);

    this.setState({
      pollName: response.data.title,
    });
  }

  handleOnSubmit = async (data) => {
    const question = this.props.match.params.id;
    const { pollName } = this.state;

    const response = await api.put(`/question/text/${question}`, {
      question: data.question,
    });

    this.setState({
      createdQuestion: true,
    });
  };

  render() {
    return (
      <Fragment>
        <Header logo={logo} pollName={this.state.pollName} />
        <QuestionContainer>
          <Form onSubmit={this.handleOnSubmit}>
            <div className="form-container">
              <Input name="question" type="text" placeholder="Pergunta" autoComplete="off" />
              <Input name="answer" type="text" disabled="true" placeholder="Resposta do usuário" />
            </div>
            {this.state.createdQuestion ? (
              <a
                href={`http://localhost:3000/textpoll/${this.props.match.params.id}`}
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
