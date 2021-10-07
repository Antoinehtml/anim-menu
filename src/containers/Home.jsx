import React from 'react'
import Header from '../components/Header'
import ContactButton from '../components/ContactButton'
import MenuManager from '../components/Menu/MenuManager'

import '../styles/home.css'

const Home = () => {
	return (
		<MenuManager>
			<Header />
			<div className="main-container">
				<h1>
					Bisous <br /> Web <br /> Agency
				</h1>

				<ContactButton />
			</div>
		</MenuManager>
	)
}

export default Home