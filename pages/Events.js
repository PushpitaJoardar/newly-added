import React from 'react';
import './Event.css';
import { Button } from '../Button';
import CardItem from './Event_item';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div className='cards'>
        <h1>Ongoing!</h1>
          <ul className='cards__items'>
          
            <CardItem
              //src='/images/img-9.jpg'
              text='MYSTERY QUIZ   : Every audiovisual quiz we create is tailored for you, whether we build something completely from scratch on your chosen theme, or carefully select the ideal rounds from our constantly updated library of fun and creative onscreen rounds. Even with traditionally ‘dry’ topics like history, we don’t ask “when was the Battle of Hastings?”,
               we show a video montage of historical events, film and music and ask you to identify the year.'
              label='Adventure'
              path='/go-to-event'
            />
            <CardItem
             // src='/images/img-2.jpg'
              text='MYSTERY QUIZ   : Every audiovisual quiz we create is tailored for you, whether we build something completely from scratch on your chosen theme, or carefully select the ideal rounds from our constantly updated library of fun and creative onscreen rounds. Even with traditionally ‘dry’ topics like history, we don’t ask “when was the Battle of Hastings?”,
               we show a video montage of historical events, film and music and ask you to identify the year.'
              label='Luxury'
              path='/go-to-event'
            />
          </ul>
          <h1>Upcoming!</h1>
          <ul className='cards__items'>
            <CardItem
              // src='/images/elsaq.jpg'
              text='How old is Elsa when she was becoming a crowned queen?'
              label='Animation_Movies'
              path='/go-to-event'
            />
            <CardItem
              // src='images/img-4.jpg'
              text='Who won the 2010 Football worldCup?'
              label='Games'
              path='/go-to-event'
            />
            <CardItem
              // src='images/img-8.jpg'
              text='How many tribes are there in Africa?'
              label='Continents'
              path='/go-to-event'
            />
          </ul>
        </div>
  );
}

export default Events;