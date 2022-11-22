import React from 'react'
import "./WebServices.css"
import { Divider } from '@mui/material'

const WebServices = () => {
    return (
        <div className='services__container'>
            <h3>SERVICES</h3>
            <div className="service__infoWrapper">
                <div className="about">
                    <h4 className="service__title">About Us</h4>
                    <p className="service__subtitle">We, at Mercantilism Services LLP, provide consulting services related to Education (particularly Science and especially, Mathematics and Scientific Research) and financial planning including (but not limited to) Investments and Portfolio Management.</p>
                </div>
                <div className="AdditionalInfo">
                <div className="HourlyConsultations">
                <h4 className="service__title">Hourly Consultations</h4>
                    <p className="service__subtitle">Currently, we are not taking any formal consultation bookings. However, for an informal talk, you can reach out to us via telegram @mservicesllp and via email at contact@mercantilism.in .</p>
                </div>
                <div className='CompleteAssuredServices'>
                <h4 className="service__title">Complete Assured Services</h4>
                    <p className="service__subtitle">We work in a way that our clients do not feel cheated. We work in every possible way to complete the job taken at hand with all the dedication and to the full satisfaction of the clients.</p>
                </div>

                </div>
            </div>
            <Divider />
        </div>
    )
}

export default WebServices
