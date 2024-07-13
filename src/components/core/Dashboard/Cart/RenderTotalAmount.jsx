import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn';

const RenderTotalAmount = () => {
    const {total,cart} = useSelector((state)=> state.cart);

    const handleBuyCourse=()=>{
        const Course = cart.map((course)=> course._id);
        console.log("Bought These Courses ",Course);
        //TODO:API integrate to navigate to the payment ui 
    }

  return (
    <div>
      <p>Total</p>
      <p>Rs {total}</p>

      <IconBtn
      text={"Buy Now "}
      onclick={handleBuyCourse}
      customClasses={"w-full justify-center"} />
    </div>
  )
}

export default RenderTotalAmount
