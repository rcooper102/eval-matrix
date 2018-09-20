import React from 'react';
import { Controller } from '../../services/controller';

import './name.css';

export class Name extends React.Component {
  constructor(props) {
    super();
    this.state = this.componentWillReceiveProps(props, false);
    this.onChange = this.onChange.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
  }

  componentWillReceiveProps(props, setState = true) {
    const state = {
      value: Controller.data.name || '',
      comment: Controller.data.comment || '',
    }
    if(setState) {
      this.setState(state);
    }

    return state;
  }

  componentDidMount(){
     document.querySelector('#name').focus(); 
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    });
    Controller.setComment(target.value);
  }

  onCommentChange(e) {
    this.setState({
      comment: e.target.value,
    });
    Controller.setName(target.value);
  }

  render() {    
    const previousButton = <a className='previous' href='#'>Previous</a>;
    const nextButton = <a className='next' href={`#question/${ Controller.exists ? Controller.firstQuestion.id : '' }`}>Next</a>;

    return <div className='Name View'>
      <h1>Starting Evaluation</h1>
      <h2>Candidate Name?</h2>
      <input id='name' onChange={this.onChange} value={this.state.value} type='text'></input>
      <h2>Comments:</h2>
      <textarea onChange={this.onCommentChange} value={this.state.comment}></textarea>
      <div className='navigation'>
        {previousButton}
        {nextButton}
      </div>
    </div>;
  }
}