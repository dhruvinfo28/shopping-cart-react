import React, { useReducer, useEffect } from 'react'
import Item from '../item/item'
import Navbar from '../navbar/navbar'

import { data } from '../../data'
import './card.css'

//Reducer Function
import { reducer } from './reducer'

function calcTotal(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i].amount * items[i].price;
    }
    return total;
}


const Card = () => {

    const [state, dispatch] = useReducer(reducer, {
        items: data,
        totalPrice: calcTotal(data),
        totalItems: 4,
    })

    const addItem = (id) => {
        dispatch({ type: 'PLUS_ONE', payload: id });
    }

    const removeItem = (id) => {
        dispatch({ type: 'MINUS_ONE', payload: id });
    }

    const clearItems = () => {
        dispatch({ type: 'REMOVE_ALL' });
    }

    return <>
        <Navbar items={state.totalItems} />
        <section className="items">
            {
                state.items.map((item) => {
                    return (
                        <>
                            <Item
                                {...item}
                                key={item.id}
                                addItem={addItem}
                                removeItem={removeItem}
                            />
                        </>
                    );
                })
            }

            <hr />
            {state.totalItems > 0 && <section className="total">
                <p>Total: </p>
                <p>{state.totalPrice}</p>
            </section>}
            {state.totalItems > 0 && <article className="clear-all">
                <button onClick={clearItems}>Clear Cart</button>
            </article>}
        </section>



    </>;
}

export default Card;