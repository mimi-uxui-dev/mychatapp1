const TheirMsg = ({ lastMessage, message }) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
      <div className="message-row">
        {isFirstMessageByUser && (
          <div
            className="message-avatar"
            style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
          />
        )}
        {message.attachments && message.attachments.length > 0
          ? (
            <img
              src={message.attachments[0].file}
              alt="message-attachment"
              className="message-image"
              style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
            />
          )
          : (
            <div className="message" style={{ float: 'left', color:'white', background: 'linear-gradient(90deg, #fc466b 0%,#3f5efb 100% )', marginLeft: isFirstMessageByUser ? '4px' : '48px', borderRadius: '25px' }}>
              {message.text}
            </div>
          )}
      </div>
    );

}

export default TheirMsg