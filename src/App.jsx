import { useState } from "react";
import styles from "./App.module.scss";
import { CurrentChat } from "./components/current-chat/CurrentChat";

export function App() {
  const [chatData, setChatData] = useState({
    name: "Main chat",
    membersCount: 1,
  });
  
	return (
		<div className={styles.layout}>
			<CurrentChat chatData={chatData} setChatData={setChatData} />
		</div>
	);
}
