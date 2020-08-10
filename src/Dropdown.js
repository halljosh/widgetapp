import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSetSelected }) => {
    const [open, setOpen] = useState(false); //initializes dropdown state to false (closed)
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []); // empty array ensures this only runs one time

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) { // removes currently selected value from options
            return null;
        }

        return (
            <div key = {option.value} className = "item" onClick={() => onSetSelected(option)}> 
                {option.label}
            </div>
        );
    });

    return (
        <div ref={ref} className = "ui form">
            <div className = "field">
                <label className = "label">{label}</label>
                <div onClick= {() => setOpen(!open)} className = {`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className = "dropdown icon"></i>
                    <div className = "text">{selected.label}</div>
                    <div className = {`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;