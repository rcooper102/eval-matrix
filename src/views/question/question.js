import React from 'react';
import { Controller } from '../../services/controller';

import './question.css';

export class Question extends React.Component {


  render() {
    const id = this.props.params[1];
    const data = Controller.getQuestion(id);
    const next = Controller.getNextQuestion(id);
    const previous = Controller.getPreviousQuestion(id)
    console.log(data);

    const previousButton = <a className='previous' href={previous ? `#question/${previous.id}` : '#'}>Previous</a>;
    const nextButton = <a className='next' href={ next ? `#question/${next.id}` : '#' }>Next</a>;

    return <div className='Question View'>
      <h1>{data.category.label}</h1>
      <h2>{data.question.title}</h2>
      <p>{data.question.description}</p>

      <div className='navigation'>
        {previousButton}
        {nextButton}
      </div>
    </div>;
  }
}