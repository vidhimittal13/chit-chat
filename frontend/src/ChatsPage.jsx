import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '37056e0e-56b8-447c-b12b-a96c93014f96', 
        props.user.username, 
        props.user.secret
    );
    return (
    <div style = {{ height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style = {{ height: '100%' }}/>
    </div>
    )
}
export default ChatsPage 