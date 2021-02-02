import React, { useState, useRef } from 'react';
import "./Accordion.css";

const Accordion = (props) => {
    const [active, setActive] = useState('');
    const [height, setHeight] = useState('0px');
    const content = useRef(null);

    const toggleShow = () => {
        setActive(active === '' ? 'active' : '');
        setHeight(active === '' ? '0px' : `${content.current.scrollHeight}px`);
    };

    return (
        <div className="accordion">
            <button className={`accordion__button `} onClick={toggleShow}>
                <p className="accordion__button__title">{props.title}</p>
                <img className="accordion__button__image" src={`${active ? '/images/add.png' : '/images/close-slim.png'}`} alt="add" />
            </button>
            <div ref={content} style={{ maxHeight: `${height}` }} className="accordion__content">
                <div className="accordion__text" dangerouslySetInnerHTML={{ __html: props.content }} />
            </div>
        </div>
    )
}
export default Accordion;