import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event, i) => {
    return(
      <TimelineEvent key={i} person={event.person} status={event.status} timeStamp={event.timeStamp} />
    );
  });

  return (
    <div className="timeline">{ eventComponents }</div>
  );
};

export default Timeline;