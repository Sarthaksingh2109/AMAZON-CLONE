import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img
                className='home__page'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic//GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='img' />
            <div className='home__row'>
                <Product
                    id="12321341"
                    title="Secret Covered In Sand | by Sean Danforth"
                    price={12.98}
                    rating={5}
                    image="https://img.freepik.com/free-psd/realistic-book-cover-presentation_1310-23.jpg?w=740&t=st=1700126203~exp=1700126803~hmac=940d34a76c8657b26bdfd329da01484e7d998b369eca4357167bbe8bfd3e221b"
                />

                <Product
                    id="23454321"
                    title="Pigeon Healthifry Digital Air Fryer: 360 degree high speed Air Circulation Technoogy 1200 W with Non-Stick 4.2L Basket"
                    price={31.99}
                    rating={4}
                    image="https://img.freepik.com/free-photo/black-food-processor-sits-wooden-table-with-plant-background_188544-27852.jpg?t=st=1700205018~exp=1700208618~hmac=449ebf51ade74cd7d20f1a59a7020d4b9a4186439adf492eafcd653f85c957bf&w=740"
                />
            </div>
            <div className='home__row'>
                <Product
                    id="36945896"
                    title="Apple iPhone 15 Pro Max (256GB),Purple"
                    price={1542.08}
                    rating={5}
                    image="https://img.freepik.com/premium-photo/smart-purple-phone-isolated-screen-white-background_752648-31.jpg?w=740"
                />

                <Product
                    id="75698456"
                    title="Apple Watch SE(2nd Gen)[GPS + Cellular 40mm] Smart Watch w/Midnight Aluminium Case and Misnight Sport Band Fitness and Sleep Tracker, Crah Detection, Heart Rate Monitor, Water Resistant "
                    price={299.69}
                    rating={4}
                    image="https://img.freepik.com/premium-photo/smartwatch-digital-clock-white_172429-739.jpg?w=360"
                />

                <Product
                    id="86974562"
                    title="Apple 2023 MacBook Air Laptop with M2 Chip: 38.92cm(15.3inch) Liquid Retina Display, 8GB Ram 256GB SSD storage, backlight Keyboard, 1080p Face TimeHD camera, Touch Id. Works with Iphone/Ipad"
                    price={1744.39}
                    rating={5}
                    image="https://img.freepik.com/premium-psd/minimalist-laptop-screen-mockup-with-editable-color-background_277819-1353.jpg?w=740"
                />
            </div>
            <div className='home__row'>
                <Product
                    id="85254321"
                    title="'Samsung LS34BG850SWXXL' 34-inches 86.8 cm Ultra WQHD Curved LED Gaming Monitor, 175hz, 0.1ms curved monitor, USB Type- C, Smart TV, Height Adjustable Stand"
                    price={1076.61}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
