import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

  useEffect(()=>{
    fetchItems();
  }, []);

  const [items,setItems] = useState([]);

  const fetchItems = async () =>{
    const data = await fetch(
      'https://fortnite-api.theapinetwork.com/store/get'
      );
    const items = await data.json();
    console.log(items.data)
    setItems(items.data);
  };


  return (
    <div className="items-container">
      {items.map(item =>(
        <div className="item-container">
          <div className="item-name">
            <h4>
              <Link key={item.itemId} to={`/shop/${item.itemId}`}>
                {item.item.name}
              </Link>
            </h4>
          </div>
          <div className="item-rarity">
            <h4>
              Rarity: {item.item.rarity}
            </h4>
          </div>
          <div className="item-cost">
            <h4>
              Cost: {item.store.cost}
            </h4> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;
