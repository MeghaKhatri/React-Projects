import React from 'react'
import pizza from '../Assets/pizza.jpg';
import snack from '../Assets/snack1.jpg';
import snack1 from '../Assets/snack2.jpg';
import Cover from '../Component/Cover';

function Snacks() {
  return (
    <>
     <Cover 
     heading="Tasty Snacks Here..."
     img1={pizza}
     img2={snack}
     img3={snack1}
     />
    </>
  )
}

export default Snacks
