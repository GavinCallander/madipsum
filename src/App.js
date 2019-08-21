import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    quotes: [
      'Random Question for you: What is Netball? ',
      'I changed Steve’s background & screensaver again. Hoping it pops up during class. ',
      'I’m worth remembering. ',
      'Yes, like I had to jump over or limbo under his charging cord to get out of my seat. ',
      'F off lol! ',
      'Lol glad you know mine at least. ',
      'Student support plans. ',
      'I update my personal laptop regularly! ',
      'They threatened to manually update it if I didn’t update it. ',
      'I wait for the angry messages from IT. ',
      'It’s the very first thing Mike told me when I got in. ',
      'Right? ',
      'You called it. ',
      'You missed wine down. ',
      'Hi there! ',
      'There is an event in the Lounge from 8:30 AM - 10 AM. ',
      "Friendly reminder that you must reserve rooms if you'd like to use them. ",
      'There is BBQ in the lounge for anyone who would like a bite! ',
      'Bring your favorite entree, appetizer, dessert, or snack to campus. ',
      'The main lounge will be broken down at Noon. ',
      'GA MOVIE NIGHT!!!!! ',
      'It’s tequila for me. ',
      'Best bars in Ballard? ',
      'This is the video that Steve was laughing at. ',
      'It’s really good. Thank you. '
    ],
    paragraphs: 0,
    sentences: 5,
    ipsum: ''
  }

  changeNumOfParagraphs = (e) => {
    this.setState({
      paragraphs: e.target.value
    })
  }

  madispumGenerator = () => {
    let paras = parseInt(this.state.paragraphs)
    let sentences = this.state.sentences
    let ipsum = [...Array(paras).keys()].map( (p, i) => {
      return [...Array(sentences).keys()].map( (s) => {
        return this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
      }).join(' ')
    }).join(' ')
    this.setState({ipsum})
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>Madipsum!</h1>
        </header>
        <main>
          <div className='input'>
            <h3>How much widsom do you require?</h3><br />
            <select onChange={this.changeNumOfParagraphs}>
              <option value='0'>-</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <button onClick={this.madispumGenerator}>Generate!</button>
          </div>
          <br />
          <hr />
          <div className='output'>
            { this.state.ipsum }
          </div>
        </main>
        <footer>
        </footer>
      </div>
    )
  }
}