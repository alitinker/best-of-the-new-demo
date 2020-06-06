import { h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style';

const Footer = () => (
	<div class={style.footer}>
		<p><FontAwesomeIcon icon="drafting-compass"/> Built with <a href="https://preactjs.com">Preact</a></p>
	</div>
);

export default Footer;
