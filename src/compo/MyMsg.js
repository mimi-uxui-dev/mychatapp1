const MyMsg = ({ message }) => {

    // If my msg is an attachment return this code
    if (message.attachments && message.attachments.length > 0) {
        return (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float: 'right' }}
          />
        );
      }
    
      return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#171717', borderRadius: '25px' }}>
          {message.text}
        </div>
      );
}

export default MyMsg