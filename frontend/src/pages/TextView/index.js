import React, { Component, Fragment } from 'react';
import { Form, Input } from '@rocketseat/unform';

import Header from '../../components/Header';
import logo from '../../assets/logo-white.svg';
import { QuestionContainer } from './styles';

import api from '../../services/api';

export default class PollStore extends Component {
  state = {
    pollName: '',
    question: '',
    answers: [],
    answered: false,
  };

  async componentDidMount() {
    const question = this.props.match.params.id;
    const response = await api.get(`/question/text/${question}`);

    this.setState({
      pollName: response.data.title,
      question: response.data.question,
      answers: response.data.answers,
    });
  }

  handleOnSubmit = async (data) => {
    await this.setState({
      answers: [...this.state.answers, data.answer],
      answered: true,
    });
    const question = this.props.match.params.id;

    await api.put(`/question/text/${question}`, {
      // eslint-disable-next-line object-shorthand
      answers: this.state.answers,
    });
  };

  render() {
    const {
      question, answered, pollName, answers,
    } = this.state;
    const initialData = {
      question,
    };
    return (
      <Fragment>
        <Header logo={logo} pollName={pollName} />
        <QuestionContainer>
          <Form onSubmit={this.handleOnSubmit} initialData={initialData}>
            <div className="form-container">
              <Input name="question" type="text" disabled="true" />
              {!answered ? (
                <Fragment>
                  <Input
                    name="answer"
                    type="text"
                    placeholder="Resposta do usuário"
                    autoComplete="off"
                  />
                  <button type="submit">RESPONDER</button>
                </Fragment>
              ) : (
                <Fragment>
                  <h5>OUTRAS RESPOSTAS:</h5>
                  <ul>{answered && answers.map(ans => <li>{ans}</li>)}</ul>
                </Fragment>
              )}
            </div>
          </Form>
        </QuestionContainer>
      </Fragment>
    );
  }
}
