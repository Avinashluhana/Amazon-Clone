import React from 'react'
import './Home.css'
import { Products } from './Products'

export const Home = () => {
  return (
    <div className="home">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/slider1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* products */}
      <div className="row1">

        <Products
          title="TV"
          price={10020}
          rating={5}
          id="1"
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"

        />
        <Products
          title="Heater"
          price={600}
          rating={5}
          id="2"
          image="https://m.media-amazon.com/images/I/91jm6TmgkxL._AC_UL320_.jpg"

        />

      </div>

      <div className="row1">
        <Products
          title="Mouse "
          price={250}
          rating={5}
          id="3"
          image="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_UL320_.jpg"

        />
        <Products
          title="Handfree"
          price={800}
          rating={5}
          id="4"
          image="https://m.media-amazon.com/images/I/71sR5UpSI8L._AC_UL320_.jpg"

        />
        <Products
          title="Cable"
          price={220}
          rating={5}
          id="5"
          image="https://m.media-amazon.com/images/I/61yxyQLcW7L._AC_UL320_.jpg"

        />

      </div>
      <div className="row1">
      <Products
        title="led"
        price={500000}
        rating={5}
        id="123"
        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"

      />
      

    </div>
    </div>
  )
}
