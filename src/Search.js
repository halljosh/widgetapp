import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stylin.css';

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        };

        const timeoutId = setTimeout(() => { // sets a timer to prevent get request spam
            if (term) { // makes sure term isn't an empty string when it's invoked
                search();
            }
        }, 400);

        return () => {
            clearTimeout(timeoutId);
        };

    }, [term]); // this second argument invokes the function anytime term changes

    const renderedResults = results.map((result) => {
        return (
            <div key = {result.pageid} className = "item">
            	<div className = "right floated content">
            		<a className = "ui button" href = {`https://en.wikipedia.org?curid=${result.pageid}`}>see more</a>
            	</div>
            	<div className = "content">
            		<div className = "header">
            			{result.title}
           			</div>
           			<span dangerouslySetInnerHTML = {{ __html: result.snippet}}></span>
            	</div>
    		</div>
        );
    });

    return (
        <div className = "translator">
        	<div className = "ui form">
        		<div className = "field">
        			<label> Enter search term: </label>
        			<input className = "input" value = {term} onChange = {e =>setTerm(e.target.value)}/>
        		</div>
        	</div>
        	<div className = "ui celled list">
        		{renderedResults}
        	</div>
        </div>
    );
};

export default Search;