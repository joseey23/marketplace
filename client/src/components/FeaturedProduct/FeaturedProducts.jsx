import React from 'react'
//import Card from '../Card/Card';
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {




    //This component is not yet working

    // const data = [

    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Hat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Hat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Hat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1745747/pexels-photo-1745747.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Hat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    // ];



    return (

        <div className="featuredProducts">

            <div className="top">
                <h1>{type} products </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ad ullam ipsum nihil minima hic dicta, illum eveniet commodi a voluptate impedit fugit! Sequi nam blanditiis inventore, architecto excepturi corrupti.
                </p>
            </div>

            <div className="bottom">

                {/* This component is not yet working
                    {data.map(item => {

                    return (
                        <Card item={item} key={item.id} />
                    )

                })} */}

            </div>
        </div>
    )
}

export default FeaturedProducts;
