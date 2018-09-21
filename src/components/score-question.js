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
    if(score) {
      result = <h6><strong>{ question[Math.round(score * (question.length - 1))] }</strong><span> Progress: { Math.round(score*100) }%</span></h6>
    }

    const comment = Controller.getQuestionComment(Controller.createId(this.props.category, this.props.question.id));

    return	<div className='ScoreQuestion'>
    		<h5>{ this.props.question.title } <span title={comment}>{ comment ? `- ${comment}` : '' }</span></h5>
        { result }
    	</div>
    	;
  }
}