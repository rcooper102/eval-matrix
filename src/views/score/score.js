import React from 'react';
import { Controller } from '../../services/controller';
import { ScoreQuestion } from '../../components/score-question';
import { ScoreRoleProgress } from '../../components/score-role-progress';
import { Reminder } from '../../components/reminder';

import './score.css';

export class Score extends React.Component {
  render() {
    const score = Controller.scoreSummary;
    return	<div className='Score View'>
    		<h1>Results { new Date(Controller.data.time).toLocaleDateString() }</h1>
        <h2>{ Controller.data.name }</h2>
        <h3>Score: { score.total }</h3>
        <a className='back' href={`#question/${ Controller.exists ? Controller.lastQuestion.id : '' }`}>Back</a>

        <div className='reminder'>
          <p>The numeric value of the score is based on an arbitrary maximum score. It is simply designed as a mechanism to provide a easily digestible representation of overall progress.</p>
          <Reminder />
        </div>

        { Controller.data.comment !== '' ? <div><h3>Comments</h3><p className='comment'>{ Controller.data.comment }</p></div> : '' }
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
        <h3>Position Progress</h3>
        <p>Reminder that the score below is <strong>not</strong> representative of when you will get a promotion. It represents how your career progress compares to other developers within the given role.</p>
        <p>Also note that not all questions are listed below. Most questions are rolled into the minimum category score. Only questions that have a minimum requirement are listed.</p>
        {
          Object.keys(Controller.config.titles).map((item, i) => {
            return <ScoreRoleProgress key={i} title={item}></ScoreRoleProgress>
          })
        }
    	</div>
    	;
  }
}
