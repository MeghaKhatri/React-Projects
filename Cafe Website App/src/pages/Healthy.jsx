import React from 'react'
import Cover from '../Component/Cover'
import h1 from '../Assets/h1.jpg'
import h2 from '../Assets/h2.jpg'
import h3 from '../Assets/h3.webp'

function Healthy() {
  return (
   <>
    <Cover 
     heading="Tasty Dessert's Here..."
     img1={h1}
     img2={h2}
     img3={h3}
     />
   </>
  )
}
export default Healthy;
