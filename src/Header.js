import React from 'react';
import Link from './Link';
import './stylin.css';

const Header = () => {
    return (
        <div className = "ui secondary pointing menu widgethead">
		<Link href = "/" className = "item">
			Home
		</Link>
		<Link href = "/translate" className = "item">
			Translate
		</Link>
		<Link href = "/search" className = "item">
			Wiki Search
		</Link>
		<Link href = "/video" className = "item">
			Video
		</Link>
		</div>
    );
};

export default Header;