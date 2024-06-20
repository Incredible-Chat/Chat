import style from "./CurrentChatDisplay.module.scss";
import { CurrentChatMessage } from "./current-chat-message/CurrentChatMessage";

export function CurrentChatDisplay() {
	return (
		<div className={style.container}>
			<CurrentChatMessage
				name={"Jav"}
				text={"I’m down! Any ideas??"}
				time={"11:35 AM"}
				isUserMessage={false}
			/>

			<CurrentChatMessage
				name={"Danya"}
				text={"Hello, nope."}
				time={"11:40 AM"}
				isUserMessage={true}
			/>
		</div>
	);
}
