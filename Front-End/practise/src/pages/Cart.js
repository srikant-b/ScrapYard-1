import React from 'react'
import Base from '../components/Base'
import Product from '../components/Product'
import { CartState } from '../context/Context'
import data from '../products/Products'
const Cart = () => {
 const {state}=CartState()
 console.log(state);
    return (
        <>
            <Base></Base>
            <div className="container mt-5 mb-5">
                <h3 className="d-flex justify-content-center fg-default-1">Scrap Prices</h3>
            </div>
            <div className="mb-lg-13">
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="d-none d-lg-block w-100 mt-6">
                                <img src="https://www.thekabadiwala.com/images/scrap-prices/scrap-paper.webp" alt="Card image cap" />
                            </div>
                            <h3 className='mt-3'>Paper</h3>
                            <p>
                                Paper is manufactured in thin sheets from the pulp of wood or other fibrous substances.
                                Paper scrap includes newspaper, books cartons, magazines, Beverage carton etc.
                            </p>
                        </div>
                        <div className="col-sm-9 col-lg-9">
                            <div className="row">
                                <Product paperData={state.products.paper} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="d-none d-lg-block w-100 mt-6">
                                <img src="https://www.thekabadiwala.com/images/scrap-prices/scrap-plastic.webp" alt="Card image cap" />
                            </div>
                            <h3 className='mt-3'>Plastic</h3>
                            <p>
                                Plastics are a wide range of synthetic or semi-synthetic materials
                                that use polymers as a main ingredient. HDPE, LDPE, MLP, PVC, PP, PET
                                etc. are types of plastics used for different purposes.
                            </p>
                        </div>

                        <div className="col-sm-9 col-lg-9">
                            <div className="row">
                                <Product paperData={state.products.plastic} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="d-none d-lg-block w-100 mt-6">
                                <img src="https://www.thekabadiwala.com/images/scrap-prices/scrap-metal.webp" alt="Card image cap" />
                            </div>
                            <h3 className='mt-3'>Metals</h3>
                            <p>
                                Scrap metal are an important source of industrial metals and alloys,
                                particularly in the production of steel, copper, lead, aluminum, and
                                zinc. Smaller amounts of tin, nickel, magnesium, and precious metals
                                are also recovered from scrap.
                            </p>
                        </div>

                        <div className="col-sm-9 col-lg-9">
                            <div className="row">
                                <Product paperData={state.products.metal} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="d-none d-lg-block w-100 mt-6">
                                <img src="https://www.thekabadiwala.com/images/scrap-prices/scrap-e-waste.webp" alt="Card image cap" />
                            </div>
                            <h3 className='mt-3'>E-Waste</h3>
                            <p>
                                E-waste is electronic products that are unwanted, not working, and
                                nearing or at the end of their “useful life.” It includes TV,
                                refrigerator, mobile phones, printers etc.
                            </p>
                        </div>

                        <div className="col-sm-9 col-lg-9">
                            <div className="row">
                                <Product paperData={state.products.Ewaste} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container pt-4">
                    <div className="row">
                        <div className="col-sm-3 col-lg-3">
                            <div className="d-none d-lg-block w-100 mt-6">
                                <img src="https://www.thekabadiwala.com/images/scrap-prices/scrap-others.webp" alt="Card image cap" />
                            </div>
                            <h3 className='mt-3'>Others</h3>
                            <p>
                                It Includes, beer bottles, women’s hair, mix-waste, tyre, mattresses
                                etc.
                            </p>
                        </div>

                        <div className="col-sm-9 col-lg-9">
                            <div className="row">
                                <Product paperData={state.products.others} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cart