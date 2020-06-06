import { h,Component } from 'preact';
import { getProjectById, getFireballs } from '../../services/nasa.service'

export default class Examples extends Component {
    state = {
		projects: [],
		fireballs: []
	};

	// get TechPort projects
	getFireballs = () => {
		getFireballs().then(results => {

			this.setState({ fireballs: results });
		});

	};

	// get TechPort projects
	getProjects = () => {
        const promise1 = getProjectById(94236)
        const promise2 = getProjectById(95084)
        const promise3 = getProjectById(10603)
		const promise4 = getProjectById(90000000000)
        const promises = [promise1, promise2, promise3, promise4]

		// FEATURE: PROMISE ALL SETTLED
		Promise.allSettled(promises).then(results => {
			console.log(results.filter(r => r.status === 'fulfilled'))
			this.setState({ projects: results.filter(r => r.status === 'fulfilled') });
		});
    };

    componentDidMount() {
		//this.getProjects();
		//this.getFireballs();
		let dateString = '1910-May-09 09:05, 2020-June-12 11:05';

		let regexpDateFormat =  /(?<year>\d{4})-(?<month>\w+)-(?<day>\d{2}) (?<time>\d{2}:\d{2})/gu;
		
		// FEATURE: STRING.MATCHALL()
		let array = Array.from(dateString.matchAll(regexpDateFormat));
		console.log(array);
	}

	render(props, state) {
		return (
			<div class="grid-1">
				<div class="home">
					<h2 class="heading">promise all settled</h2>
					<p class="subheading">What's good in ES2020, and other newly supported features you may have missed.</p>
					{state.projects.map(project => (
						<div key={project.value.project.id}>
							<h3>{project.value.project.title}</h3>
							<p>{project.value.project.description}</p>
							<p>{project.value.project.website}</p>

							{/* FEATURE: OPTIONAL CHAINING */}
							<p>{project.value.project.coffeeRunner?.name}</p>
						</div>
					))}
				</div>
			</div>
		)
	}
}