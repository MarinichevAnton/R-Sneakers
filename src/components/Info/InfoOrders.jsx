import React from 'react';
import AppContext from '../../context';
import styles from './Info.scss';
import { Link } from 'react-router-dom';

const InfoOrders = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="80px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
    </div>
  );
};

export default InfoOrders;