const TheirMsg = ({ lastMessage, message }) => {

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username 


    return (
        <div className='message-row'>
            
            {isFirstMessageByUser && ( // this is only if they have the 1st msg by the user
                <div 
                    className='message-avater'
                    style={{ backgroundImage: `url(${ message?.sender?.avatar })` }}
                />
            )
            }

            { (message?.attachments?.length > 0 )
                    ?(
                        <img 
                            src={ message.attachments[0].file }
                            alt="message-attachment"
                            className='message-image'
                            style={{ marginLeft: isFirstMessageByUser? '4px' : '48px' }}
                        />
                    )
                    : (
                        <div clasNmae="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser? '4px' : '48px'}}>
                            {message.text}
                        </div>
                    )
            }
    
            
        </div>
    )
}

export default TheirMsg