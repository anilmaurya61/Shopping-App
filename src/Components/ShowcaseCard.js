import React from 'react'
import '../Styles/ShowcaseCard.css'
const ShowcaseCard = ({data}) => {
  return (
    <>
     <div className='container'>
        <img src={data.image} alt={data.categories_name} />
        <h4>{data.categories_name}</h4>
        <button>SHOP NOW</button>
     </div>
    </>
  )
}

export default ShowcaseCard
