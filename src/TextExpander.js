import { useActionState, useState } from 'react';
import './index.css';

const divStyle = {
    display: 'flex',
    gap: '16px',
};

export default function TextExpander({
                                         expanded = false,
                                         expandButtonText = 'Show more',
                                         collapseButtonText = 'Show less',
                                         buttonColor = 'blue',
                                         collapsedNumWords = 10,
                                         className,
                                         children,
                                     }) {
    const [isOpen, setIsOpen] = useState(expanded);

    const linkStyle = {
        color: buttonColor,
        cursor: 'pointer',
    };

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={className} style={divStyle}>
            <p>{isOpen ? children : `${children.split(' ').slice(0, collapsedNumWords).join(' ')}...`}</p>
            <a style={linkStyle} onClick={handleClick}>{isOpen ? collapseButtonText : expandButtonText}</a>
        </div>
    );
}
