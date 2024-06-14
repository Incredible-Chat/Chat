import { CurrentChatDisplay } from "./current-chat-display/CurrentChatDisplay";
import { CurrentChatHeader } from "./current-chat-header/CurrentChatHeader";
import { CurrentChatInput } from "./current-chat-input/CurrentChatInput";
import style from "./CurrentChat.module.scss";

export function CurrentChat({ chatData, setChatData }) {
	return (
		<div className={style.container}>
			<CurrentChatHeader chatData={chatData} setChatData={setChatData} />
			<CurrentChatDisplay />
			<CurrentChatInput />
		</div>
	);
}
