import React from 'react';
import { Controller } from '../../services/controller';

export class Question extends React.Component {


  render() {
    const id = this.props.params[1];
    const data = Controller.getQuestion(id);
    const next = Controller.getNextQuestion(id);
    const previous = Controller.getPreviousQuestion(id)
    console.log(data);

    const previousButton = <a href={previous ? `#question/${previous.id}` : '#'}>Previous</a>;
    const nextButton = <a href={ next ? `#question/${next.id}` : '#' }>Next</a>;

    return <div className='Question'>
      <h1>{data.category.label}</h1>
      <h2>{data.question.title}</h2>
      <p>{data.question.description}</p>

      {previousButton}
      {nextButton}
    </div>;
  }
}