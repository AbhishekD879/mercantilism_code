import React from 'react'
import "./Split.css"

const Split = () => {
    return (
        <>
        <div className='split__container'>
            <div className='split__image'>
                <img src="https://img1.wsimg.com/isteam/stock/uP40w7ANNkHxBOz5V/:/cr=t:0%25,l:0.07%25,w:99.86%25,h:99.86%25/rs=w:1240,cg:true,m" />
            </div>
            <div className="split__info">
                <h1>Get Ready</h1>
                <h5>We will be here for you every step of the way. Our consultants will work with you and your family to plan the next step on your educational as well as your financial journey.</h5>
            </div>
        </div>
        <hr className="divider" />
        </>
    )
}

export default Split
