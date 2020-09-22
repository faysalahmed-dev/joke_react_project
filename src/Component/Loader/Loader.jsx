import React from 'react';
import LoaderIcon from './loader.svg'
import './Loader.style.scss'
const loader = () => (
      <div className="loader">
            <div className="loader__container">
                  <img src={LoaderIcon} alt="Loader icon" className="loader__img"/>
            </div>
            <h1 className="loader__text">Loading</h1>
      </div>
)
export default loader;