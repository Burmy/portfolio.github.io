import React from 'react';
import './Navbar.css'
import Pdf from '../Navbar/Resume.pdf';

const Navigation = () => {
    return (
        < div className="bar" id="Navbar" >
            <div className="logo">
                AB
            </div>
            <div className="nav">
                <a href={Pdf} without rel="noopener noreferrer" target="_blank">
                    <button className="btn" trailingIcon="picture_as_pdf" label="Resume">
                        Resume
                    </button>
                </a>
                <ul className="Contact">
                    <li className="">HTML</li>
                    <li className="">CSS</li>
                    <li className="">JavaScript</li>
                </ul>
            </div>
        </ div >
    );
}

export default Navigation;
