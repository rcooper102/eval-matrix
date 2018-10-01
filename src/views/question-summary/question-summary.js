import React from 'react';
import { Controller } from '../../services/controller';
import { QUESTION_RANGES } from '../../constants';

import './question-summary.css';



export class QuestionSummary extends React.Component {

  constructor() {
    super();
    this.onNew = this.onNew.bind(this);
  }

  onNew() {
    Controller.clearCurrent();
    Controller.resetData(false);
  }

  createQuestions(questions, index, category) {
    return questions.map((item, i) => {
      return <div key={i}>
        <h3>{index}-{ i+1 }: { item.title } <span>({category}:{item.id})</span></h3>
        <p>{ Array.isArray(item.description) ? item.description.map((p, j) => <span key={j}>{p}</span>) : <span>{item.description}</span> } </p>
        <p className='options'><strong>Possible Responses:</strong> { QUESTION_RANGES[item.type].join(', ') }.</p>
      </div>
    });
  }

  render() {
    return  <div className='QuestionSummary View'>
      <p>Question Count: { Object.keys(Controller.data.answers).length }</p>
      {
        Object.keys(Controller.config.categories).map((item, i) => {
          return <div key={i}>
          <h2>{Controller.config.categories[item].label} ({Controller.config.categories[item].questions.length})</h2>
          { this.createQuestions(Controller.config.categories[item].questions, i+1, item) }
          </div>
        })
      }
    </div>
  }
}