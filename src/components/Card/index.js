import React, { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import Skeleton from '../Skeleton/Skeleton';
import AppContext from '../../context';

function Card({
  id,
  onFavorite,
  onPlus,
  title,
  imageUrl,
  price,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const [isPushPlus, setIsPushPlus] = React.useState();

  const onClickPlus = () => {
    onPlus({ id, parentId: id, title, imageUrl, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, parentId: id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
            <img src={isFavorite ? 'img/heart-liked.svg' : 'img/heart-unliked.svg'} alt="Unliked" />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                width={25}
                height={25}
                src={isItemAdded(id) ? 'img/btn-cheked.svg' : 'img/btn-uncheked.svg'}
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
