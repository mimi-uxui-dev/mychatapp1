import MsgForm from './MsgForm'
import MyMsg from './MyMsg'
import TheirMsg from './TheirMsg'

const ChatFeed = (props) => {

    const { chats, activeChat, userName, messages } = props

    const chat = chats && chats[activeChat]; 

    // console.log(chat, userName, messages)

    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
    ));

    const renderMessages = () => {
        // keys are IDs of our messages
        const keys = Object.keys(messages)


        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = userName === message.sender.username

            return (
                <div key={`msg_${index}`} style={{width: '100%'}}>
                    <div className='message-block'>
                        {
                            isMyMessage
                            ? <MyMsg message={message} />
                            : <TheirMsg  message={message} lastMessage={messages[lastMessageKey]} />
                        }
                    </div>
                    <div 
                        className='read-receipts' 
                        style={{ marginRight: isMyMessage? '18px' : '0px', marginLeft: isMyMessage? '0px' : '68px' }}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>

                </div>
            )
        })

        if(!chat) return 'Loading ... ⏳'
    }

        return (
            
            <div className='chat-feed'>
                <div className="chat-title-container">
                    <div className='chat-title'>{ chat?.title }</div>
                    <div classNmae='chat-subtitle'> {chat?.people.map((person) => ` ${person.person.username}`)} </div>
                </div>
                { renderMessages() }

                <div style={{height: '100px'}} />

                <div className='message-form-container'>
                    <MsgForm { ...props} chatId={activeChat} />
                </div>
            </div>
        )


}

export default ChatFeed;