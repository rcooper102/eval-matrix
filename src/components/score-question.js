import React from 'react';
import { Controller } from '../services/controller';
import { QUESTION_RANGES } from '../constants';

export class ScoreQuestion extends React.Component {
  constructor() {
    super();
  }

  render() {
    const score = Controller.data.answers[Controller.createId(this.props.category, this.props.question.id)];
    const question = QUESTION_RANGES[this.props.question.type];

    let result = null;
    if(score !== null) {
      result = <h6><strong>{ score !== -1 ? question[Math.round(score * (question.length - 1))] : 'No Answer' }</strong><span className='progress'><div className="bar" style={{ width: `${score*100}%`}}></div><div className='label'>{ score !== -1 ? `${Math.round(score*100)}%` : 'n/a' }</div></span></h6>
    }

    const comment = Controller.getQuestionComment(Controller.createId(this.props.category, this.props.question.id));

    return	<div className='ScoreQuestion'>
    		<h5 title={ this.props.question.description }>{ this.props.question.title } <span title={comment}>{ comment ? `- ${comment}` : '' }</span></h5>
        { result }
    	</div>
    	;
  }
}