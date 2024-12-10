import React from 'react'

const Home = ({dishes}) => {

  return (
    <div>
    <h3>Menú</h3>
   <ul>
 {dishes.map((dish)=>{
        return(
          <li key={dish.id}>
            <p>{dish.id}</p>
            <p>{dish.name}</p>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
          </li>
        )
      }
      )}
      </ul> 
      </div>
  )
}

export default Home