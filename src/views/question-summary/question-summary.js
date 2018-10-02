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
        <h3>{index}-{ i+1 }: { item.title } <span>({category}:{item.id}, weight: { item.weight })</span></h3>
        <p>{ Array.isArray(item.description) ? item.description.map((p, j) => <span key={j}>{p}</span>) : <span>{item.description}</span> } </p>
        <p className='options'><strong>Possible Responses:</strong> { QUESTION_RANGES[item.type].join(', ') }.</p>
      </div>
    });
  }

  render() {
    return  <div className='QuestionSummary View'>
      <h1>Question Summary</h1>
      <span>
      <p>Question Count: { Object.keys(Controller.data.answers).length }</p>
      <p>Each question has a weight which determines their individual impact in determining respective category score.</p>
      <p>Each category has a weight which determines category impact when determining total score.</p>
      </span>
      {
        Object.keys(Controller.config.categories).map((item, i) => {
          return <div key={i}>
          <h2>{Controller.config.categories[item].label} <span>(questions: {Controller.config.categories[item].questions.length}, weight: { Controller.config.categories[item].weight })</span></h2>
          { this.createQuestions(Controller.config.categories[item].questions, i+1, item) }
          </div>
        })
      }
    </div>
  }
}