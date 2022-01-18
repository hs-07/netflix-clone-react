import React, { useState, useEffect} from 'react';
import './Navbar.css';


function Navbar() {
    const [show, handleShow]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="Netflix Logo" className="nav_logo" />
            <img src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" alt="" className="nav_avatar" />
        </div>
    )
}

export default Navbar
