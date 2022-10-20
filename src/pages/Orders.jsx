import React from 'react';
import axios from 'axios';
import Card from '../components/Card';
import InfoOrders from '../components/Info/InfoOrders';
import styles from '../components/Info/Info';
import { Link } from 'react-router-dom';

function Orders({ onClose, onRemove, items = [], opened }) {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://634807d9db76843976b899cd.mockapi.io/orders');
        setOrders(data.reduce((prev, props) => [...prev, ...props.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
        <h1>      <Link to="/">
          <b className='cu-p'>
            <img className={styles.card} src="img/Button.png" width={245} height={55} alt="Arrow" onClick={() => (false)} />
          </b>
        </Link></h1>
      </div>
      {orders.length > 0 ? (
        <div className="d-flex flex-wrap">
          {(isLoading ? [...Array(10)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div>
      ) : (
        <InfoOrders
          title={'У вас нет заказов!'}
          description={'Вы нищеброд! Оформите хотябы один заказ!'}
          image={'img/noOrders.png'}
        />
      )}
    </div>
  );
}

export default Orders;