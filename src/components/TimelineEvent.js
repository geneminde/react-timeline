import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return (
    <div className="timeline-event">
      <span className="event-person">
        {props.person}
      </span>
      <span className="event-time">
        <Timestamp time={props.timestamp} />
      </span>
      <p className="event-status">{props.status}</p>
    </div>
  );
};

export default TimelineEvent;