import style from '../App.module.css'
import { SearchResult, UserSearchType } from '../App'
import axios from 'axios'
import { useEffect, useState } from 'react'

type propsType = {
	searchTerm: string
	selectedUser: UserSearchType | null
	onSelectedUser: (user: UserSearchType ) => void
}

function UserList(props: propsType) {

	const [users, setUsers] = useState<UserSearchType[]>([]);

	useEffect( () => {
		axios
		.get<SearchResult>(`https://api.github.com/search/users?q=${props.searchTerm}`)
		.then ( res => {
			setUsers(res.data.items)
		})
		}, [props.searchTerm])


return 	<ul className={style.list}>
				{ users.map( user => 
				<li 
				className={props.selectedUser === user ? style.selected : ""}
				key = {user.id}
				onClick={() => {
					props.onSelectedUser(user);
					}
				}
				> {user.login} </li>
				)}
			</ul>
}

export default UserList