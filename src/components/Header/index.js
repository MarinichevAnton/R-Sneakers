import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import './Header.module.scss';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="Image d-flex justify-between align-center p-40">
      <Link to="/R-Sneakers">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div className='pl-15'>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={18} fill="#000000" src="img/Cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={20} height={18} fill="#000000" src="img/Likes.svg" alt="Закладки" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={18} fill="#000000" src="img/User.svg" alt="Пользователь" />
          </Link>
        </li>
      </ul>
    </header>

  );
}

export default Header;
