import style from "./CurrentChatInput.module.scss";


export function CurrentChatInput() {
  return (
    <div className={style.container}>
      <input placeholder="Start typing..." className={style.input} type="text" />
    </div>
  )
}