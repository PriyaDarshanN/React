import React from 'react';


function HeroSection() {
  return (
    <section style={{height:"550px",
      width:"50%",
      alignItems:"flex-start",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      margin:"20px"}}>
      <h1>LOREM IPSUM</h1>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusid est vitae dolor rhoncus tristique. Maecenas metus quam,rhoncus euismod lorem in, sollicitudin viverra eros. Donecdictum luctus quam ut tristique. Curabitur nec faucibus purus.
Quisque congue sem nec justo mollis, in tincidunt erat pretium.
Sed pulvinar, massa ac porta viverra.
</p>
      <button style={{padding: "10px 20px",
    backgroundColor: "#C75B7A",
    color: "white",
    border: "none",
    position:"centre",
    cursor: "pointer"}}>Click Me</button>
    </section>
  );
}

export default HeroSection;
