import React from 'react';
import ChatItem from './ChatItem';

function ChatEvents(props) {
  
  const startTime = new Date(props.time);
  const chatItems = props.chatEvents.map(chatEvent => {
    // let lastParticipant = chatEvent.participantId;
    let participant = props.participants.find(participant => chatEvent.participantId === participant.id);

    return (
      <ChatItem
        key={chatEvent.timestamp}
        chatEvent={chatEvent}
        participant={participant}
      />
    )
  });

  return (
    <div class='chatEvents'>
      <p>{startTime.toLocaleTimeString()}</p>
      {chatItems}
    </div>
  )
}

// class ChatEvents extends React.Component {
//   render () {
//     const props = this.props;
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

export default ChatEvents;