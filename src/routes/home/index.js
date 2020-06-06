import { h,Component } from 'preact';

export default class Home extends Component {
	render() {
		return (
			<div class="grid-1">
				<div class="home">
					<h1 class="heading">the best of the <span>new.</span></h1>
					<p class="subheading">What's good in ES2020, and other newly supported features you may have missed.</p>
				</div>
			</div>
		)
	}
}

