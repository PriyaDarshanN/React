import React from 'react';

function Navbar() {
  return (
    <nav style={{backgroundColor:"#C75B7A", display:"flex",justifyContent:"space-around" , padding:"10px"
    }}>
      <ul style={{display:"flex",listStyle:"none",gap:"20px"}}>
        <li>Home</li>
        <li>Order</li>
        <li>Food</li>
        <li>Restaurant</li>
        <li>Testimonials</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
