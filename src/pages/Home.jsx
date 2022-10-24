import React from 'react';
import Card from "../components/Card";

function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCart,
    isLoading,
}) {

    const renderItems = () => {
        const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(props) => onAddToFavorite(props)}
                onPlus={(props) => onAddToCart(props)}
                loading={isLoading}
                {...item}
            />
        ));
    };

    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src="img/Search.svg" alt="Search" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="img/btn-remove.svg"
                            alt="Clear"
                        />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="d-flex flex-wrap justify-between">{renderItems()}</div>
        </div>
    );
};

export default Home;