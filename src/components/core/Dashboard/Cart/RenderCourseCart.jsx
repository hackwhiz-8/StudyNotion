import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoStar, IoStarOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart } from '../../../../slices/cartSlice';
import ReactStars from 'react-rating-stars-component'



const RenderCourseCart = () => {

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      {
        cart.map((data, index) => {
          <div>
            <div>
              <img src={data.thumbnail} alt="" />
              <div>
                <p> {data?.courseName}</p>
                <p>{data?.category?.name}</p>
                <div>
                  <span>4.8</span>
                  <ReactStars
                    count={5}
                    size={20}
                    edit={false}
                    activeColor='#ffd700'
                    emptyIcon={<IoStarOutline />}
                    fullIcon={<IoStar />}
                  />
                  <span>{data?.ratingAndReviews?.Length}Ratings </span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => dispatch(removeFromCart(data?._id))}>
                <MdDeleteForever />
                <span>Remove</span>
              </button>
              <p>Rs-{data?.price}</p>
            </div>
          </div>
        })
      }

    </div>
  )
}

export default RenderCourseCart
