import { UserType } from '../App'
import style from '../App.module.css'


type PropsType = {
	userDetails: UserType
}

function Profile(props: PropsType) {

return <div className={style.profile}>
			<img src={props.userDetails.avatar_url}></img>
			<p>Location: {props.userDetails.location}</p>
			<p>Followers: {props.userDetails.followers}</p>
		</div>
}

export default Profile