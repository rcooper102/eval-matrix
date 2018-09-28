import React from 'react';
import { Controller } from '../../services/controller';
import { Reminder } from '../../components/reminder';

export class Home extends React.Component {

  constructor() {
    super();
    this.onNew = this.onNew.bind(this);
  }

  onNew() {
    Controller.clearCurrent();
    Controller.resetData(false);
  }

  render() {
    return  <div className='Home View'>
      <h1>Welcome to the</h1>
      <h2>GBI Front End Developer Evaluation Tool</h2>
      <p>The GBI evaluation tool is mechanism used to evaluate the progress of individual team member's in their career.</p>
      <Reminder />
      <div className='navigation'>
      <a href='#name' style={{ display: Controller.currentExists ? 'inline-block' : 'none' }}>Continue</a>
      <a href='#name' onClick={this.onNew}>New</a>
      </div>
    </div>
  }
}