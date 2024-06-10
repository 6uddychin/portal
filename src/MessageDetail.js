import React from 'react';
import { useParams } from 'react-router-dom';
import MessagesTable from './MessagesTable';

const MessageDetail = () => {
  const { id } = useParams();
  const { subject } = useParams();
  const [ from ] = useParams();
  const { related } = useParams();
  const { summary }= useParams();
  const { date } = useParams();
  // Fetch the message detail using the id or get it from the context/state

  return (
    <div>
      <h1>{MessageDetail.subject}</h1>
      {/* Display message details here */}
      <div className="container">
      <p><strong>Date</strong> {MessageDetail.date} </p>
      </div>

    </div>
  );
};

export default MessageDetail;