import React from 'react'
import CardItems from './CardItems'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Buy these Tasty Delicacies</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItems
                        src="images/croissant.jpg"
                        text="Get your tummy full of our Delicious Croissant"
                        label="Croissant"
                        path="/products"
                    />
                    <CardItems
                        src="images/cupcakes3.jpg"
                        text="Get our sweet and full of love chocolate cupcakes"
                        label=" Chocolate Cupcake"
                        path="/products"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItems
                        src="images/cookies.jpg"
                        text="Get our crunchy and full of chocochips cookies"
                        label="Cookies"
                        path="/products"
                    />
                    <CardItems
                        src="images/macroons.jpg"
                        text="Get our sweet and full of cream macroons"
                        label="Macroons"
                        path="/products"
                    />
                    <CardItems
                        src="images/cinamom rolls.jpg"
                        text="Get our sweet and full of flavour cinnamom rolls"
                        label="Cinnamom Rolls"
                        path="/products"
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItems
                        src="images/breads.jpg"
                        text="Get our freshly baked loaves of bread"
                        label="Loaves of bread"
                        path="/products"
                    />
                    <CardItems
                        src="images/cupcake1.jpg"
                        text="Get our sweet and full of love chocolate almond cupcakes"
                        label=" Chocolate Almond Cupcake"
                        path="/products"
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;