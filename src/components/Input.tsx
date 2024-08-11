import { useState } from 'react'
import style from '../App.module.css'

type PropsType = {
	setSearchTerm: (tempSearch: string) => void
}

function Input(props: PropsType) {

	const [ tempSearch, setTempSearch] = useState("raspberry1")


	return <div>
		<input className={style.input} 
		placeholder='search' 
		value={tempSearch}
		onChange={ (e) => { setTempSearch( e.currentTarget.value) }}/> 
		<button className={style.input_button}
					onClick={() => props.setSearchTerm(tempSearch)}
					>FIND</button>
	</div>
}

export default Input