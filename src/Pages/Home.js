import React from 'react';
import Header from '../Components/Header';
import ShowcaseCard from '../Components/ShowcaseCard';
import homepagedata from '../data/homepagedata.json'
import '../Styles/Home.css'

function Home() {
    return (
        <>
            <div className="home-container">
                {homepagedata.slice(0,2).map((data, index) => (
                    <ShowcaseCard key={index} data={data} />
                ))}
                <div className="home-sub-container">
                    {homepagedata.slice(2, 4).map((data, index) => (
                        <ShowcaseCard key={index} data={data} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
