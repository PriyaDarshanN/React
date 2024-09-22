import React from 'react';


function HeroSection() {
  
  return (
    
    <section style={{height:"550px",
      width:"50%",
      alignItems:"flex-start",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      margin:"50px"}}>
        
      <h1 style={{
        fontFamily: "IBM Plex Sans, sans-serif",
        fontSize: "50px",
        fontWeight: "600",
        fontStyle: "normal",
        margin: "20px 0 60px 0",
      }}>LOREM IPSUM</h1>
      
      <p style={{
        fontFamily: "Abel, sans-serif",
        fontWeight: 400,
        fontStyle: "normal",
        margin: "20px 0 60px 0",
        lineHeight: "1.5",
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamusid est vitae dolor rhoncus tristique. Maecenas metus quam,rhoncus euismod lorem in, sollicitudin viverra eros. Donecdictum luctus quam ut tristique. Curabitur nec faucibus purus.
Quisque congue sem nec justo mollis, in tincidunt erat pretium.
Sed pulvinar, massa ac porta viverra.
</p>
      <button style={{padding: "15px 100px",
    backgroundColor: "#C75B7A",
    color: "white",
    border: "none",
    margin: "20px 0 0 0 ",
    cursor: "pointer"}}>Click Me</button>
    </section>
  );
}

export default HeroSection;
