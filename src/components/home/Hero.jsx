'use client'
import React from 'react';
import bg from '/public/HeroBg.jpg'
import Link from 'next/link';

export default function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="overlay">
                <div className="heading">
                    <h1>طور أعمالك مع حلولنا المتكاملة في النقل والمقاولات والسلامة.</h1>
                    <p>رواد في تقديم حلول متكاملة للنقل البري، إدارة وتشغيل محطات الوقود، المقاولات، الأمن والسلامة. نعمل بمعايير الجودة والابتكار لدعم تطلعات عملائنا وتحقيق رؤية المملكة 2030</p>
                    <div className="links">
                        <Link href="/#services" className='sec-link' >تعرف علي خدماتنا </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
