import React from 'react';
import Social from './components/Social';
import './App.scss';

function App() {
	return (
		<div className="app">
			<header>
				<div className="container">
					<h1>Yamuna Acharya</h1>
					<h2>
						I am a passionate <span>graphic designer</span> from New
						York
					</h2>
					<Social />
				</div>
			</header>
		</div>
	);
}

export default App;
