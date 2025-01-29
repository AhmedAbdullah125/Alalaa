import React from 'react'
import footerimg from '../assets/images/home/logo.png'
import Image from 'next/image'

export default function Loading() {
    return (
        // <div className='loading-page'>
        //     <Image src={footerimg} alt='logo' className='loading-logo' />
        // </div>
        <div id="page">
            <div id="container m-auto">
               <Image src={footerimg} alt='logo' className='loading-logo  ' />
            </div>
        </div>
    )
}
