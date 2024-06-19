import React from 'react'
import {IoSpeedometerOutline,IoCarSportOutline} from 'react-icons/io5'
import {IoMdTrendingUp} from 'react-icons/io'
export const HomePage = () => {
  return (
    <div className="home grid">
    <h1 className="home__title">AUTOMOTIVE</h1>

    <div className="home__img">
        <img src="/img/lamborghini.png" alt=""/>
    </div>

    <div className="home__information">
        <h2 className="home__subtitle">LAMBORGHINI<br/>GALLARDO LP560</h2>
        <p className="home__description">Lorem ipsum dolor sit amet consect  adipiscing elit, commodo tristique id quisque lobortis facilisi feugiat</p>
    </div>

    <div className="box">
        <div className="box__content box__medium">
            <IoSpeedometerOutline id="speedometer-outline" className="icon-box "/>
            <h3 className="box__medium-title inline">3.7</h3>
            <span className="box__medium-description block">Sec.</span>
            <span className="box__medium-detail">0-100 km/h</span>
        </div>

        <div>
            <div className="box__content box__small">
               <IoMdTrendingUp id="trending-up-outline" className="icon-box icon-box--small"/>
                <h3 className="box__small-title inline">325</h3>
                <span className="box__small-description block">km/h</span>
                <span className="box__small-detail">Top Speed</span>
            </div>
            <div className="box__content box__small">
                <IoCarSportOutline id="car-sport-outline" className="icon-box icon-box--small"/>
                <h3 className="box__small-title inline">8.000</h3>
                <span className="box__small-description block">r.p.m</span>
                <span className="box__small-detail">Power</span>
            </div>
        </div>
    </div>
</div>
  )
}
