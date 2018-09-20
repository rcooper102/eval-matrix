import React from 'react';
import { Controller } from '../../services/controller';

export class Home extends React.Component {
  render() {
    return	<div className='Home View'>
    		<h1>Welcome to the</h1>
        <h2>GBI Front End Developer Evaluation Tool</h2>
        <p>The GBI evaluation tool is mechanism used to evaluate the progress of individual team member's in their career.</p>
        <p><strong>Your score is not a grade:</strong> This tool is not a graded representation. It is a reflection of your progress thus far towards mastery of the particular skill. A score of, for example, 40% is not a failure, it only means that you are nearing the halfway point towards mastery of said skill.</p>
        <p><strong>Your score is not a deciding factor for promotion:</strong> While it certainly will be taken into account, each individual score will not be the only factor in a promotion decision. The score herein is merely a metric designed to help you build goals towards the skill levels commonly expected at various points in your career.</p>
        <p><strong>Everyone has room to improve:</strong> This score is not designed in a way that senior members of the team are expected to score 100% across the board. Senior team members also have room to grow and this tool reflects it.</p>
        <p><strong>Mastery takes time:</strong> Just because you have learned something doesn't mean you have mastered it. You have thousands of hours ahead of you before you reach mastery in many aspects. Don't try to rush your way to checking off as many boxes as possible, rather treat these as goals to work towards at a slow but steady pace.</p>
        <p><strong>Scores are based on observation:</strong> We can only evaluate you based on what we observe within the scope of what you do for GroupBy. The opportunity to prove yourself will come in time.</p>
        <div className='navigation'>
    			<a href={`#question/${ Controller.exists ? Controller.firstQuestion.id : '' }`}>Begin</a>
    		</div>
    	</div>
    	;
  }
}