import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import './stylin.css'

const options = [{
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Corsican',
        value: 'co'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Korean',
        value: 'ko'
    },
    {
        label: 'Maori',
        value: 'mi'
    },
    {
        label: 'Telugu',
        value: 'te'
    },
    {
        label: 'Uzbek',
        value: 'uz'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className = "translator">
            <div className = "ui form">
                <div className = "field">
                    <label>Enter text:</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown label="Select a Language" selected={language} onSetSelected = {setLanguage} options={options} />
            <hr />
            <h3 className = "ui header">Translation:</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;