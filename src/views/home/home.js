import React from 'react';
import { Controller } from '../../services/controller';

export class Home extends React.Component {
  render() {
  	if(Controller.instance) { 
  		console.log(Controller.firstQuestion)
  	}
    return	<div className='Home View'>
    		<h1>Welcome to EvalMatrix</h1>
    		<div className='navigation'>
    			<a href={`#question/${ Controller.exists ? Controller.firstQuestion.id : '' }`}>Begin</a>
    		</div>
    	</div>
    	;
  }
}