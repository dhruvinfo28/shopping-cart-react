import React from 'react'
import './item.css'

const Item = ({ id, imgUrl, name, price,amount,addItem, removeItem }) => {

    if(amount>=1){
        return <>
            <article className="item">
                <img src={imgUrl} alt="" />
                <div className="container1">
                    <p>
                        {name}
                    </p>
                    <p>
                        {price}
                    </p>
                </div>
                <div className="container2">
                    <button onClick={()=>{removeItem(id)}}>&lt;</button>
                    <p>
                        {amount}
                    </p>
                    <button onClick={()=>{addItem(id)}}>&gt;</button>
                </div>
            </article>
        </>;
    }
    return <></>;
}

export default Item;