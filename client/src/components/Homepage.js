/* eslint-disable */
import React from 'react';

const Homepage = () => {
    return (
        <div className="sparkle">
            <header id="carouselExampleInterval" className="carousel slide " data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="20000">
                        <img src="https://wallpapercave.com/wp/wp2069120.jpg" className="d-block w-100" alt="Frank Ocean" />
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src="http://wallsdesk.com/wp-content/uploads/2016/08/Frank-Ocean-Wallpapers.jpg" className="d-block w-100" alt="Frank Ocean" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://wallsdesk.com/wp-content/uploads/2016/08/Frank-Ocean-Widescreen.jpg" className="d-block w-100" alt="Frank Ocean" />
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </header>
            <div className="flex-container">
                <div className="box">
                    <img src="http://gayletter.com/wp-content/uploads/2019/04/FRANK_OCEAN_COLLIER_SCHORR_GAYLETTER_Shot_03_034_02-600x867.jpg" alt="FRANK OCEAN FOR GAYLETTER" width="400" />
                    <p>"Frank Ocean has been one of the more fascinating artists of the 2010s. A singer and songwriter whose output has defied rigid classNameification as R&amp;B, he has nonetheless pushed that genre forward with seemingly offhanded yet imaginatively detailed narratives in which he has alternated between yearning romantic and easygoing braggart."</p>    
                </div>
                <div className="box">
                <img src="http://www.petracollins.com/wp-content/uploads/2017/12/frankoceanpetracollins-6.jpg" alt="FRANK OCEAN BY PETRA COLLINS" width="400" />
                    <p>"Frank Ocean is a singer-songwriter and member of the hip-hop collective Odd Future. He's known for his debut mixtape, 'nostalgia, ULTRA,' and the subsequent albums 'channel ORANGE' and 'Blonde'."</p>     
                </div>
            </div>
            <div className="flex-container"> 
                <div className="box">
                    <img src="http://www.petracollins.com/wp-content/uploads/2017/12/frank18.jpg" alt="FRANK OCEAN BY PETRA COLLINS" width="400" />
                </div>
                <div className="box">
                    <iframe className="home-video" src="https://www.youtube.com/embed/jgNjn2b1Jl0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img src="http://www.petracollins.com/wp-content/uploads/2017/12/frankoceanpetracollins-2.jpg" width="400" alt="FRANK OCEAN BY PETRA COLLINS" />
                </div>
            </div>
        </div>
    )
}

export default Homepage;