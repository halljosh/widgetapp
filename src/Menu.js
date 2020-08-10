import React, { useState } from 'react'; //imports useState hook from React library
import './stylin.css';
import './sprout.png';

const Menu = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null); // initializes state, assigns it to activeIndex, and allows setActive Index to update that value (array destructuring)

    const onTitleClick = (index) => { //sets active index to whatever the user clicks on
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''; // checks if the current index is the active one

        return (
            <React.Fragment key = {item.title}>
			<div className = {`title ${active}`} onClick = {() => onTitleClick(index)}> 
			     <i className = "dropdown icon"></i>
			     {item.title}
			</div>
			<div className = {`content ${active}`}>
				<p>{item.content}</p>
			</div>
			</React.Fragment>
        );
    });

    return (
        <div className = "mainmenu cards">
            <h1 className = "ui center aligned icon header">
                <img className = "mainicon icon" src="sprout.png" alt="widgets icon"></img>
                WIDGET
            </h1>
            <p> All the widgets you need.  All in one place. </p>
            <div className = "ui styled green card accordion">
                {renderedItems}
            </div>
        </div>
    );
};

export default Menu;