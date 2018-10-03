import React from 'react';
import { Controller } from '../services/controller';
import { QUESTION_RANGES } from '../constants';

export class ScoreRoleProgress extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.onOpen = this.onOpen.bind(this);
  }

  onOpen(e) {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const data = Controller.config.titles[this.props.title];
    const score = Controller.scoreSummary;

    let max = 0;
    let total = 0;
    let questionsComplete = true;
    Object.keys(data.requiredCategoryScore).forEach((item) => {
      if(data.requiredCategoryScore[item].total) {
        const weight = Controller.config.categories[item].weight;
        const qRequired =  data.requiredCategoryScore[item].total;
        const qTotal = weight *  Controller.config.constants.MAX_SCORE;
        const qAnswer = score.categories[item];
        let qPercent = qAnswer/qTotal/data.requiredCategoryScore[item].total;
        if(qPercent > 1) { qPercent = 1; }
        total += qPercent * weight;
        max += weight;
      }
      const questions = data.requiredCategoryScore[item].questions || {};
      Object.keys(questions).map((question) => {
          const q = Controller.createId(item, question);
          const answer = Controller.data.answers[q];
          if(answer <= questions[question]) {
            questionsComplete = false;
          }
      });
    });

    const combinedProgress = total < max ? Math.round(total/max*100) : 100;

    return  <div className='ScoreRoleProgress'>
        <h4 className={this.state.open ? 'open' : 'closed'} onClick={this.onOpen}>{ data.label }
        <span className={ combinedProgress >= 100 && questionsComplete ? 'progress complete' : 'progress' }>
          <div className="bar" style={{ width: `${combinedProgress}%` }}></div>
        </span>
        </h4>
        <div className="report" style={{ display: this.state.open ? 'block' : 'none' }}>
        <ol className='description'>{
          data.description ? data.description.map((item, i) => { 
            return <li key={i}>{item}</li> 
          }) : ''
        }</ol>
        <ul>
          {
            Object.keys(data.requiredCategoryScore).map((item,i) => { 
              const questions = data.requiredCategoryScore[item].questions || {};
              
              let total = null;
              if(data.requiredCategoryScore[item].total) {
                const max = Controller.config.categories[item].weight *  Controller.config.constants.MAX_SCORE * data.requiredCategoryScore[item].total;
                total = <span className={ score.categories[item] >= max ? 'complete' : '' }><div className="bar" style={{ width: `${score.categories[item]/max < 1 ? score.categories[item]/max*100 : 100}%` }}></div><div style={{ display: score.categories[item]/max >= 1 ? 'none' : 'block' }} className="label">{ Math.round(score.categories[item]/max*100) }%</div></span>
              }
              return <li key={i}>
                <h5>{Controller.config.categories[item].label} {total}</h5>
                <div className='questions'>
                {
                  Object.keys(questions).map((question, i) => {
                    const q = Controller.createId(item, question);
                    const qData = Controller.getQuestion(q);
                    const range = QUESTION_RANGES[qData.question.type];
                    return <p key={i} className={ qData.current >= questions[question] ? 'complete' : '' }><span>{qData.question.title}</span><strong>{ range[Math.round(qData.current * (range.length - 1))] } (minimum: { range[Math.round(questions[question] * (range.length - 1))] })</strong></p>
                  })
                }
                </div>

              </li>
              
            })
          }
        </ul>
        </div>
      </div>
      ;
  }
}