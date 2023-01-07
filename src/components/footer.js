import { useState } from 'react';

const Footer = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInput = (e) => {
		setInputValue(e.target.value)
	}

	const handleBlur = () => {
		if (!inputValue.includes('@')) {
			alert("Check your email is not include @ !")
		}
	}

	return (
		<footer className=''>
			<div class="divider py-1 bg-secondary"></div>
		    <div className='my-4 d-flex justify-content-center col-auto'>
				<div className='h5'>Subscribe with us : &nbsp;&nbsp;</div>
				<input
				className=''
					placeholder='Enter your e-mail'
					onChange={handleInput}
					value={inputValue}
					onBlur={handleBlur}
				/>
			</div>
		</footer>
	)
}

export default Footer;