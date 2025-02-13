'use client'
import React from 'react';
import Link from 'next/link';

export default function Hero() {
    const [muted, setMuted] = React.useState(true);
    return (
        <div className="hero">
            <i className={`fa-solid mute-icon ${muted ? " fa-volume-low" : "fa-volume-xmark"}`} onClick={() => setMuted(!muted)}></i>

            <video
                width="320"
                height="240"
                autoPlay
                loop
                muted={muted}
            >
                <source src='/video1.mp4' type="video/mp4" />
                <source src='/video1.mp4' type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
                <div className="heading">
                    <h1>طور أعمالك مع حلولنا المتكاملة في النقل والمقاولات والسلامة.</h1>
                    <p>
                        رواد في تقديم حلول متكاملة للنقل البري، إدارة وتشغيل محطات الوقود،
                        المقاولات، الأمن والسلامة. نعمل بمعايير الجودة والابتكار لدعم
                        تطلعات عملائنا وتحقيق رؤية المملكة 2030.
                    </p>
                    <div className="links">
                        <Link href="/#services" className='sec-link'>تعرف علي خدماتنا</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
