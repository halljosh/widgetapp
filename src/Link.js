import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) { //always users to open nav links in a new tab
            return;
        }
        event.preventDefault(); //prevents full-page reload of browser
        window.history.pushState({}, '', href); // navigates to the clicked href path

        const navEvent = new PopStateEvent('popstate'); //tells other components that the URL has changed
        window.dispatchEvent(navEvent);
    };

    return (<a onClick = {onClick} className = {className} href = {href}>{children}</a>);
};

export default Link;