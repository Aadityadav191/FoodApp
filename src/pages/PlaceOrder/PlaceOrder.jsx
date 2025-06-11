import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
   
  const {subTotalAmount} = useContext(StoreContext);
  return (
    <>
       <form className='place-order'>

        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name'/>
          </div>

          <input type="text" placeholder='Email address' />
          <input type="text"  placeholder='Street' />

          <div className="multi-fields">
            <input type="text"  placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text"  placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
      
          <input type="text" placeholder='Phone' />
          
        </div>
         

         <div className="place-order-right">
             <div className="cart-total">
        <h2>Cart Totals</h2>
          <div>
            <div className="car-total-deatils">
              <p>Subtotal</p>
              <p> {subTotalAmount()} </p>
            </div>
            <hr />
            <div className="car-total-deatils"></div>
            <p>Delviery Fee</p>
            <p> {2} </p>
            <div className="car-total-deatils">
              <b>Total</b>
              <b> {subTotalAmount()+2} </b>
            </div>
          </div>

          <button onClick={()=> navigate('/order')} >PROCEED TO CHECKOUT</button>
      </div>
         </div>

       </form>

    </>
  )
}

export default PlaceOrder