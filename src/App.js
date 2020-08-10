import React from 'react';
import Menu from './Menu';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';
import VideoPlayer from './VideoPlayer';
import './stylin.css';

const items = [{
        title: 'What is Widget?',
        content: 'Widget is a collection of commonly used tools from Wikipedia, Google, and YouTube.'
    },
    {
        title: 'Who made Widget?',
        content: 'Widget was created by Josh Hall, just for practice with React and Semantic UI.'
    }
];

const App = () => {

    return (
        <div>
        <Header />
        <Route path="/">
            <Menu items={items} />
        </Route>
        <Route path="/search">
            <Search />
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
        <Route path ="/video">
            <VideoPlayer />
        </Route>
		</div>
    );
};

export default App;