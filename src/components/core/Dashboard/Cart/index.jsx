import React from 'react'
import { useSelector } from 'react-redux'
import RenderCourseCart from './RenderCourseCart';
import RenderTotalAmount from './RenderTotalAmount';

const Cart = () => {

    const {total,totalItems} = useSelector((state)=> state.cart);

  return (
    <div className='text-white'>
       <h1>Your Cart </h1>
       <p>{totalItems} Course in Cart</p>

        {
            total>0?
            (<div>
                <RenderCourseCart />
                <RenderTotalAmount />
            </div>):(<p>Your Cart is empty</p>)
        }

    </div>
  )
}

export default Cart;
