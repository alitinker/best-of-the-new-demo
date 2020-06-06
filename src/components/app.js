import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDraftingCompass } from '@fortawesome/free-solid-svg-icons';

import Header from './header';
import Footer from './footer';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Examples from '../routes/examples';

library.add(fab, faDraftingCompass);

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	// FEATURE: DYNAMIC IMPORTS
	getEnv = () => {
		import('../../src/config/config.json')
		.then(config => {
		  let configEnv = config[window.location.origin]
		  console.log(configEnv)
		})
		.catch(err => {
		  console.log(err.message)
		});
	}

	componentDidMount(){
		this.getEnv()
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Examples env={this.getEnv} path="/examples"/>
				</Router>
				<Footer/>
			</div>
		);
	}
}
