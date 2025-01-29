'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import icon1 from '/public/goals/1.webp'
import icon2 from '/public/goals/2.webp'
import icon3 from '/public/goals/3.webp'
import icon4 from '/public/goals/4.webp'
import icon5 from '/public/goals/5.webp'
// import icon6 from '/public/goals/6.webp'

import bg from '/public/about-bg.jpg'

export default function AboutMain() {

    return (
            <section
                className="about-main"
                style={{backgroundImage: `url(${bg.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}
            >
                <div className="container m-auto">
                    <div className="about-cont">
                        <h3 className="about-main-title">عن واثق</h3>
                        <p className="about-main-pargh">
                            واثق® هي منصة رقمية لربط العميل مع الناقل وإدارة عمليات نقل المنتجات
                            البترولية على الطرق البرية وحفظ الحمولة من التلاعب والتي تتوافق مع
                            مستهدفات رؤية 2030 وتواكب خطة وزارة النقل في التحول الرقمي في قطاع
                            النقل والخدمات اللوجستية ,بما يسهم في الارتقاء بمختلف أنماط النقل
                            ورفع مستوى الأمان والسلامة والحوكمة والشفافية في عمليات النقل،
                            والقطاع بشكل عام.
                        </p>
                        <Link href="#" className="main-btn">اطلب نسختك التجريبيه</Link>
                        <div className="about-goals">
                            <h4 className="about-goals-title">اهدافنا:</h4>
                            <div className="about-goals-cont">
                                <div className="about-goals-item">
                                    <figure>
                                        <Image  src={icon1} alt="icon" />
                                    </figure>
                                    <p>زيادة مستوى الأمان والسلامة في عمليات النقل.</p>
                                </div>
                                <div className="about-goals-item">
                                    <figure>
                                        <Image  src={icon2} alt="icon" />
                                    </figure>
                                    <p>رقمنه وأتمتة عمليات النقل وحفظها. </p>
                                </div>
                                <div className="about-goals-item">
                                    <figure>
                                        <Image  src={icon3} alt="icon" />
                                    </figure>
                                    <p>زيادة مستوى الأمان والسلامة في عمليات النقل.</p>
                                </div>
                                <div className="about-goals-item">
                                    <figure>
                                        <Image  src={icon4} alt="icon" />
                                    </figure>
                                    <p>زيادة مستوى الأمان والسلامة في عمليات النقل.</p>
                                </div>
                                <div className="about-goals-item">
                                    <figure>
                                        <Image  src={icon5} alt="icon" />
                                    </figure>
                                    <p>زيادة مستوى الأمان والسلامة في عمليات النقل.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>         
    );
}
