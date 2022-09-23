
import React from 'react'
import { Button } from 'react-bootstrap'
import { CartState } from '../context/Context'

const Product = (props) => {
    const {
        state:{cart},
        dispatch,
    }=CartState();
   console.log(cart);
    return (
        <>

            {
                props.paperData.map((data, index) => {
                    return (
                        <div className="col-lg-3 col-6 mb-4 pb-4 px-4" key={index}>
                            <div className="container-bg-2 h-100 rounded-4 mt-6 d-flex flex-column">
                                <div className="title-lg pt-6 flex-fill px-lg-6 px-3">
                                    {data.name}
                                </div>
                                <div className="px-3 px-lg-6 pb-6">
                                    <span className="pe-2 title-lg" style={{ color: "#44B31F" }}>
                                        {data.price}
                                    </span>
                                    <span className="fg-default-2 title-sm">/Kg</span>
                                </div>
                                <div className="form-group d-grid mt-2">
                                    {
                                        cart.some(p=>p.id===data.id)?
                                        (<Button onClick={()=>{ dispatch({type:'REMOVE_FROM_CART',payload:data,})}} type='submit' className="btn btn-dark">Remove from Cart</Button>):
                                        (<Button onClick={()=>{ dispatch({type:'ADD_TO_CART',payload:data,})}} type='submit' className="btn btn-secondary">Add To Cart</Button>)
                                    }
                                    {
                                        console.log(cart.some(p=>p.id===data.id)?("ok"):("not ok"))
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            };
        </>
    )
}

export default Product