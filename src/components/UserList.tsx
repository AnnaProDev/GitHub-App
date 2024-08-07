import style from '../App.module.css'
import { UserSearchType } from '../App'


type propsType = {
	selectedUser: UserSearchType | null
	users: UserSearchType[]
	setSelectedUser: (user: UserSearchType) => void
}

function UserList(props: propsType) {

return 	<ul className={style.list}>
				{ props.users.map( user => 
				<li 
				className={props.selectedUser === user ? style.selected : ""}
				key = {user.id}
				onClick={() => {
					props.setSelectedUser(user);
					}
				}
				> {user.login} </li>
				)}
			</ul>
}

export default UserList