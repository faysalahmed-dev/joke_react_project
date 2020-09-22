import React from 'react';
import './SideBar.style.scss';
import sideBarIcon from '../../Images/sidebar-img.png';

const sideBar = ({ getNewJoke }) => (
    <div className='side-bar'>
        <h1 className='side-bar__title'>Dad Joke</h1>
        <img className='side-bar__img' src={sideBarIcon} alt='side bar icon' />
        <button className='side-bar__button' onClick={() => getNewJoke()}>
            New Jokes
        </button>
    </div>
);
export default sideBar;
