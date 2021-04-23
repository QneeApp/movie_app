import React from 'react';
import PropType from 'prop-types';

const foodILike  = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Pork",
    image: "https://post-phinf.pstatic.net/MjAyMDAzMDNfMTcg/MDAxNTgzMTkwNjA3ODQ5.kUXPHqGJ2xPDSu_3FiEoFC3kY9QyQ_g9CziCGrFSDuEg.LpCfOTbc5qth9d-GKzGv9jwj2VKhcqmPHp5cp1KJYEsg.JPEG/IM_food02.jpg?type=w1200",
    rating: 4

  },
  {
    id: 3,
    name: "Soju",
    image: "https://lh3.googleusercontent.com/proxy/L0-lTMVRf2cWTS_0DKttQRWyHtbovo5eCcfKvbv3Pz2zxY8g76FAAyg2PC43_z9rxOJ1xWZ4uv6LnnBV0SrmTSOzA977KcrA92JAhllD_1XpwV4VsYbtScE",
    rating: 3.4
  },
  {
    id: 4,
    name: "Kimbap",
    image: "https://post-phinf.pstatic.net/MjAxODA2MjlfMTU1/MDAxNTMwMTk4Mjg3OTk5.z8YKyrEmj3ovY2GmeMm3LRlsMHPKdHEFuTBQCkRLu8Mg.YCdusQJvIqEwHQ5QupuLni0GR3RkoMhdnmIIPWC7WqYg.JPEG/DSC02642.JPG?type=w1200",
    rating: 4.2
  },
];

function Food({name, picture, rating}) {
  return <div>
    <h1>I love {name} </h1> 
    <h4> {rating} / 5.0</h4>
    <img src={picture} alt={name}/>
  </div>;
}

Food.PropType = {
  name: PropType.string.isRequired,
  picture: PropType.string.isRequired,
  rating: PropType.number.isRequired
};

function App() {
  return (
   <div>
     {foodILike.map(dish => (
       <Food 
        key={dish.id} 
        name={dish.name} 
        picture={dish.image} 
        rating={dish.rating} 
       />
     ))
     }
   </div>
  );
}

export default App;
