import React from 'react';
import { Controller } from '../../services/controller';
import { QUESTION_RANGES } from '../../constants';

import './question.css';

export class Question extends React.Component {
  constructor(props) {
    super();
    this.onSelect = this.onSelect.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.state = this.componentWillReceiveProps(props, false);
  }

  componentWillReceiveProps(props, setState = true) {
    const id = props.params[1];
    const question = Controller.getQuestion(id);
    const def = Controller.data.answers[id] || null
    const options = QUESTION_RANGES[question.question.type];
    const state = {
      current: def ? (Math.round(def * options.length - 1)) : null,
      id,
      question,
      options,
      next: Controller.getNextQuestion(id),
      previous: Controller.getPreviousQuestion(id),
      comment: Controller.getQuestionComment(id),
    }
    if(setState) {
      this.setState(state);
    }

    return state;
  }

  onSelect(e) {
    let target = Number(e.target.getAttribute('value'));
    if(target === this.state.current) {
      target = -1;
    }
    this.setState({
      current: target,
    })
    Controller.setAnswer(this.state.question.id, target > -1 ? target / (QUESTION_RANGES[this.state.question.question.type].length - 1) : -1);
  }

  onCommentChange(e) {
    this.setState({
      comment: e.target.value,
    });
    Controller.setQuestionComment(this.state.id, e.target.value);
  }

  render() {    
    let description = Array.isArray(this.state.question.question.description) ? this.state.question.question.description : [this.state.question.question.description];

    const previousButton = <a className='previous' href={this.state.previous ? `#question/${this.state.previous.id}` : '#name'}>Previous</a>;
    const nextButton = <a className='next' href={ this.state.next ? `#question/${this.state.next.id}` : '#score' }>Next</a>;

    return <div className='Question View'>
      <h1>{this.state.question.category.label} ({this.state.question.index + 1} of {this.state.question.category.questions.length})</h1>
      <h2>{this.state.question.question.title}</h2>
      <p>{ description.map((item, i) => <span key={i}>{item}</span>) }</p>
      <ul className='questionOptions'>
        { this.state.options.map((item, i) => <li onClick={this.onSelect} className={ this.state.current !== null && Number(i) === this.state.current ? 'active' : '' } value={i} key={i}>{item}</li>) }
      </ul>
      <textarea placeholder="Additional Comments" onChange={this.onCommentChange} value={this.state.comment}></textarea>

      <div className='navigation'>
        {previousButton}
        {nextButton}
      </div>
    </div>;
  }
}