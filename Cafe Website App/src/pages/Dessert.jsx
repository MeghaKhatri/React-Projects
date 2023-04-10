import React from 'react'
import d1 from '../Assets/d1.jpg'
import d2 from '../Assets/d2.jpg'
import d3 from '../Assets/d3.jpg'
import Cover from '../Component/Cover'
function Dessert() {
  return (
    <>
     <Cover 
     heading="Tasty Dessert's Here..."
     img1={d1}
     img2={d2}
     img3={d3}
     />
    </>
  )
}

export default Dessert
