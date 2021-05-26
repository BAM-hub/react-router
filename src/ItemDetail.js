import React, {useState, useEffect} from 'react';
import './App.css';


function ItemDetail({match}) {
    //const id =  window.location.href.split("/");
    useEffect(()=>{
        //console.log("id", id[id.length -1]);
        fetchItem();
    }, []);

  const [item,setItem] = useState({
      item: {
        item: {
           name: {}, 
           rarity: {},
           cost: {},
        },  
        images:{
            background:{}  
        },
      }
  });

  const fetchItem = async () =>{
    const fetchItem = await fetch
        (`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);

    const item = await fetchItem.json();
    console.log(item);
    setItem(item.data);
  };


  return (
    <div className="item-detail">
        
        <h4>{item.item.name}</h4>
        <div className="item-image-container">
            <img src={item.item.images.background} />
        </div>
        <div className="more-info">
            <h4>
                Rarity: {item.item.rarity}
            </h4>
            <h4>
                Cost: Cost: {item.item.cost}
            </h4>
        </div>
        

    </div>
  );
}

export default ItemDetail;
