import React from 'react';
import { Controller } from '../../services/controller';
import { ScoreQuestion } from '../../components/score-question';

import './score.css';

export class Score extends React.Component {
  constructor() {
    super();
  }

  render() {
    const score = Controller.scoreSummary;
    return	<div className='Score View'>
    		<h1>Results</h1>
        <h2>{ Controller.data.name }</h2>
        <h3>Score: { score.total }</h3>
        <a className='back' href={`#question/${ Controller.exists ? Controller.lastQuestion.id : '' }`}>Back</a>
        { Controller.data.comment !== '' ? <p className='comment'><strong>Comment: </strong>{ Controller.data.comment }</p> : '' }
        <ul className='categories'>
         { Controller.categories.map((category, i) => {
            const cat = Controller.config.categories[category]
            const maxScore = (cat.weight * Controller.config.constants.MAX_SCORE );
            return <li key={i}>
            <h3>{ cat.label }</h3>
            <h4>{ score.categories[category] } / {maxScore} ({ Math.round((score.categories[category] / maxScore) * 100) }%)</h4>
            { cat.questions.map((question, j) => {
              return <ScoreQuestion key={j} category={category} question={question}></ScoreQuestion>
            }) }
            </li>
          }) }
        </ul>
    	</div>
    	;
  }
}