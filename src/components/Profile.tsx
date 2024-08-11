import { UserType } from '../App'
import style from '../App.module.css'


type PropsType = {
userDetails: UserType | null;
};

function Profile({ userDetails }: PropsType) {
return (
	<>
		{userDetails ? (
		<div className={style.profile}>
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