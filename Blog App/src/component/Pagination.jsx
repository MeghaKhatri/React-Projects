import React, { useContext } from 'react'
import { Appcontext } from '../context/Appcontext'
import './Pagination.css';
function Pagination() {

  const {page , totalpage , handlepagechange} =useContext(Appcontext);
  return (
    <div>
     <div>
     { page > 1 && 
        (<button onClick={()=> handlepagechange(page-1)} className='btn'>
          Previous
        </button>)
      },

      { page < totalpage &&
        (<button onClick={()=> handlepagechange(page+1)} className='btn'> 
          Next
        </button>)

      },

      {
        <p>
          page {page} of {totalpage}
        </p>
      }
     </div>
    </div>
  )
}

export default Pagination
