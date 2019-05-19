import React, { Component, Fragment } from 'react';

import Header from '../../components/Header';
import logo from '../../assets/logo-white.svg';
import { QuestionContainer } from './styles';

import api from '../../services/api';

export default class PollStore extends Component {
  state = {
    pollName: '',
    question: '',
    options: [],
    answers: [],
    answered: false,
    radioOption: '',
  };

  async componentDidMount() {
    const question = this.props.match.params.id;
    const response = await api.get(`/question/objective/${question}`);

    this.setState({
      pollName: response.data.title,
      question: response.data.question,
      options: [
        { value: response.data.options[0].content, key: response.data.options[0]._id },
        { value: response.data.options[1].content, key: response.data.options[1]._id },
        { value: response.data.options[2].content, key: response.data.options[2]._id },
        { value: response.data.options[3].content, key: response.data.options[3]._id },
        { value: response.data.options[4].content, key: response.data.options[4]._id },
      ],
    });
  }

  handleRadioSubmit = async (e) => {
    e.preventDefault();

    const question = this.props.match.params.id;

    this.setState({
      answered: true,
    });

    await api.put(`/question/alternatives/${this.state.radioOption}`);

    const response = await api.get(`/question/objective/${question}`);

    this.setState({
      answers: [
        response.data.options[0].votes,
        response.data.options[1].votes,
        response.data.options[2].votes,
        response.data.options[3].votes,
        response.data.options[4].votes,
      ],
    });

    console.log('You have selected:', this.state.radioOption);
  };

  handleRadioOptionChange = (e) => {
    this.setState({
      radioOption: e.target.value,
    });
  };

  render() {
    const {
      pollName, options, question, radioOption, answered, answers,
    } = this.state;
    return (
      <Fragment>
        <Header logo={logo} pollName={pollName} />
        <QuestionContainer>
          <form onSubmit={this.handleRadioSubmit}>
            <div className="form-container">
              <input name="question" type="text" disabled="true" value={question} />
              {options
                && options.map((op, index) => (
                  <div className="option-container">
                    <label>
                      <input
                        name="option"
                        type="radio"
                        value={op.key}
                        checked={radioOption === options[index].key}
                        onChange={this.handleRadioOptionChange}
                      />
                      {op.value}
                    </label>
                    {answered ? (
                      <div className="parcial-result">
                        <i className="fa fa-check-circle" />
                        {answers[index]}
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                ))}
            </div>
            {answered ? '' : <button type="submit">RESPONDER</button>}
          </form>
        </QuestionContainer>
      </Fragment>
    );
  }
}
