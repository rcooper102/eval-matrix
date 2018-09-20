import React from 'react';
import { Controller } from '../../services/controller';
import { QUESTION_RANGES } from '../../constants';

import './question.css';

export class Question extends React.Component {
  constructor(props) {
    super();
    this.onSelect = this.onSelect.bind(this);
    this.state = this.componentWillReceiveProps(props, false);
  }

  componentWillReceiveProps(props, setState = true) {
    const id = props.params[1];
    const question = Controller.getQuestion(id);
    const next = Controller.getNextQuestion(id);
    const previous = Controller.getPreviousQuestion(id)
    const def = Controller.data.answers[id] || null
    const state = {
      current: def ? (Math.round(def * QUESTION_RANGES[question.question.type].length)) : null,
      id,
      question,
      next,
      previous,
    }
    if(setState) {
      this.setState(state);
    }

    return state;
  }

  onSelect(e) {
    const target = Number(e.target.getAttribute('value'));
    this.setState({
      current: target,
    })
    Controller.setAnswer(this.state.question.id, target / QUESTION_RANGES[this.state.question.question.type].length);
  }

  render() {    
    let description = Array.isArray(this.state.question.question.description) ? this.state.question.question.description : [this.state.question.question.description];

    const previousButton = <a className='previous' href={this.state.previous ? `#question/${this.state.previous.id}` : '#'}>Previous</a>;
    const nextButton = <a className='next' href={ this.state.next ? `#question/${this.state.next.id}` : '#' }>Next</a>;

    const options = QUESTION_RANGES[this.state.question.question.type];

    return <div className='Question View'>
      <h1>{this.state.question.category.label} ({this.state.question.index + 1} of {this.state.question.category.questions.length})</h1>
      <h2>{this.state.question.question.title}</h2>
      <p>{ description.map((item, i) => <span key={i}>{item}</span>) }</p>
      <ul className='questionOptions'>
        { options.map((item, i) => <li onClick={this.onSelect} className={ this.state.current !== null && Number(i) <= this.state.current ? 'active' : '' } value={i} key={i}>{item}</li>) }
      </ul>

      <div className='navigation'>
        {previousButton}
        {nextButton}
      </div>
    </div>;
  }
}