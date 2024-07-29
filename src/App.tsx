
import { useState } from "react"
import style from "./App.module.css"

function App() {

const [selectedUser, setSelectedUser] = useState <string| null> (null)


  return (
    <div className={style.main}>
		<div>
			<input className={style.input} placeholder='search' /> <button className={style.input_button}>FIND</button>
		</div>
		<ul className={style.list}>
			{["Apple", "Orange"].map( user => 
			<li 
			className={selectedUser === user ? style.selected : ""}
			key = {user}
			onClick={() => {setSelectedUser(user)}
			}
			> {user} </li>

			)}
		</ul>
    </div>
  )
}

export default App
