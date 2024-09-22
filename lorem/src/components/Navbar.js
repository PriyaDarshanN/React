import React from 'react';

function Navbar() {
  return (
    <nav style={{height:"25px",backgroundColor:"#C75B7A", display:"flex",justifyContent:"space-around" , padding:"10px"
    }}>
      <ul style={{display:"flex",listStyle:"none",gap:"20px",
         padding: 0, 
         margin: 0, 
         
      }}>
        <li>Home</li>
        <li>Order</li>
        <li>Food</li>
        <li>Restaurant</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
        <img src='/menu-bar.png'></img>
      </ul>
    </nav>
  );
}

export default Navbar;
