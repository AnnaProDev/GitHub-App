import { useEffect, useState } from 'react';
import { UserSearchType, UserType } from '../App'
import style from '../App.module.css'
import axios from 'axios';


type PropsType = {
	selectedUser: UserSearchType | null;
};

function Profile({selectedUser }: PropsType) {

	const [ userDetails, setUserDetails] = useState <UserType | null> (null)

	useEffect( () => {
		if( selectedUser) {
			axios
			.get<UserType>(`https://api.github.com/users/${selectedUser.login}`)
			.then ( res => {
				setUserDetails(res.data)
			})
		}
		}, [selectedUser])


return (
	<>
		{userDetails ? (
		<div className={style.profile}>
			<h1>{userDetails.login}</h1>
			<img src={userDetails.avatar_url} alt="User Avatar" />
			<p>Location: {userDetails.location}</p>
			<p>Followers: {userDetails.followers}</p>
		</div>
		) : (
		<div></div>
		)}
	</>
);
}

export default Profile;