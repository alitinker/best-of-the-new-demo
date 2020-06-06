import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<nav>
			<Link activeClassName={style.active} href="/">about</Link>
			<Link activeClassName={style.active} href="/examples">examples</Link>
		</nav>
	</header>
);

export default Header;
