const MyMsg = ({ message }) => {

    // If my msg is an attachment return this code
    if(message?.attachments?.length > 0 ){
        return (
            <img 
                src={ message.attachments[0].file }
                alt="message-attachment"
                className='message-image'
                style={{ float: 'right' }}
            />
        )
    }
    
    return (
        <div clasNmae="message" style={{ float: 'right', color: 'white', backgroundColor: '#070707'}}>
            {message.text}
        </div>
    )
}

export default MyMsg