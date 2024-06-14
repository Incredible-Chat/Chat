import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import style from "./CurrentChatHeader.module.scss";

export function CurrentChatHeader({ chatData, setChatData }) {
	return (
		<div className={style.container}>
			<div className={style.name}>{chatData.name}</div>
			<div className={style.options}>
				<FontAwesomeIcon icon={faEllipsis} size="lg" />
			</div>
		</div>
	);
}
