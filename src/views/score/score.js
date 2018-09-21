import React from 'react';
import { Controller } from '../../services/controller';
import { ScoreQuestion } from '../../components/score-question';
import { ScoreRoleProgress } from '../../components/score-role-progress';

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

        <div className='reminder'>
          <p><strong>Your score is not a grade:</strong> This tool is not a graded representation. It is a reflection of your progress thus far towards mastery of the particular skill. A score of, for example, 40% is not a failure, it only means that you are nearing the halfway point towards mastery of said skill.</p>
          <p><strong>Your score is not a deciding factor for promotion:</strong> While it certainly will be taken into account, each individual score will not be the only factor in a promotion decision. The score herein is merely a metric designed to help you build goals towards the skill levels commonly expected at various points in your career.</p>
          <p><strong>Everyone has room to improve:</strong> This score is not designed in a way that senior members of the team are expected to score 100% across the board. Senior team members also have room to grow and this tool reflects it.</p>
          <p><strong>Mastery takes time:</strong> Just because you have learned something doesn't mean you have mastered it. You have thousands of hours ahead of you before you reach mastery in many aspects. Don't try to rush your way to checking off as many boxes as possible, rather treat these as goals to work towards at a slow but steady pace.</p>
          <p><strong>Scores are based on observation:</strong> We can only evaluate you based on what we observe within the scope of what you do for GroupBy. The opportunity to prove yourself will come in time.</p>
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
        <p>Also note that not all questions are listed below. Most questions are rolled into the minimum category score. Only questions are listed that have a minimum requirement.</p>
        {
          Object.keys(Controller.config.titles).map((item, i) => {
            return <ScoreRoleProgress key={i} title={item}></ScoreRoleProgress>
          })          
        }        
    	</div>
    	;
  }
}