import style from "./CurrentChatMessage.module.scss";

export function CurrentChatMessage({ name, text, time, isUserMessage }) {
	return (
		<div
			className={`${style.message} ${isUserMessage ? style.userMessage : ""}`}
		>
			<div className={`${style.chunk} ${isUserMessage ? style.userChunk : ""}`}>
				<svg
					width='10'
					height='12'
					viewBox='0 0 10 12'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9 0C9 0 3.26206 0 1.8 0C0.33795 0 3.14713e-05 1.5 1.35003 3C2.70003 4.5 8.50063 9.5 9 11C9.49936 12.5 9 0 9 0Z'
						fill='#F2F2F7'
					/>
				</svg>
			</div>
			<div className={style.container}>
				{!isUserMessage && <div className={style.name}>{name}</div>}
				<div className={style.text}>{text}</div>
				<div className={style.time}>{time}</div>
			</div>
		</div>
	);
}
