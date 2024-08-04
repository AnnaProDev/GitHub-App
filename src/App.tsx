
import { useEffect, useState } from "react"
import style from "./App.module.css"
import axios from "axios"

type UserSearchType = {
login: string
id: number
}

type SearchResult = {
	items: UserSearchType[]
}

type UserType = {
	login: string
	avatar_url: string
	location: string
	followers: string
}

function App() {

const [selectedUser, setSelectedUser] = useState <UserSearchType | null> (null)
const [users, setUsers] = useState<UserSearchType[]>([]);
const [ tempSearch, setTempSearch] = useState("raspberry1")
const [ searchTerm, setSearchTerm] = useState("raspberry1")
const [ userDetails, setUserDetails] = useState <UserType | null> (null)


useEffect(() => {
	if( selectedUser) {
		document.title = selectedUser.login
	}
}, [selectedUser]
)

useEffect( () => {
axios
.get<SearchResult>(`https://api.github.com/search/users?q=${searchTerm}`)
.then ( res => {
	setUsers(res.data.items)
})
}, [searchTerm])

useEffect( () => {
	if( selectedUser) {
		axios
		.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
		.then ( res => {
			setUserDetails(res.data)
			console.log(userDetails)
		})
	}
	}, [selectedUser, userDetails])

return (
	<div className={style.main}>
	<div>
		<div>
			<input className={style.input} 
			placeholder='search' 
			value={tempSearch}
			onChange={ (e) => { setTempSearch( e.currentTarget.value) }}/> 
			<button className={style.input_button}
						onClick={() => setSearchTerm(tempSearch)}
						>FIND</button>
		</div>
		<ul className={style.list}>
			{ users.map( user => 
			<li 
			className={selectedUser === user ? style.selected : ""}
			key = {user.id}
			onClick={() => {
				setSelectedUser(user);
				}
			}
			> {user.login} </li>
			)}
		</ul>
	</div>

	{ userDetails? 
		<div className={style.profile}>
		<img src={userDetails.avatar_url}></img>
		<p>Location: {userDetails.location}</p>
		<p>Followers: {userDetails.followers}</p>
		</div>
		: <div></div>
}
	</div>
)
}

export default App
