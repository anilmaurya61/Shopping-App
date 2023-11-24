import React from 'react'
import '../Styles/ShowcaseCard.css'
import { Link } from 'react-router-dom'

const ShowcaseCard = ({ data }) => {
  return (
    <>
      <div className='container'>
        <img src={data.image} alt={data.categories_name} />
        <h4>{data.categories_name}</h4>
        <Link to ={data.link}><button>SHOP NOW</button></Link>
      </div>
    </>
  )
}

export default ShowcaseCard
