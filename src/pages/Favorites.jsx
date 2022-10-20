import React from 'react';
import Card from '../components/Card';
import InfoFavorites from '../components/Info/InfoFavorites';
import AppContext from '../context';
import { Link } from 'react-router-dom';

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>
      {favorites.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favorites.map((item, index) => (
            <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />

          ))}
        </div>
      ) : (
        <InfoFavorites
          title={'Закладок нет :('}
          description={'Вы ничего не добавили в закладки!'}
          image={'img/noFavorites.png'}
        />
      )}
    </div>
  );
}

export default Favorites;
