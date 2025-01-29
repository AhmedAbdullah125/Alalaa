'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import icon1 from '/public/icons/1.webp'
import icon2 from '/public/icons/2.webp'
import icon3 from '/public/icons/3.webp'
import icon4 from '/public/icons/4.webp'
import img3 from '/public/ceo.jpg'
import img4 from '/public/values-i1.png'
import img5 from '/public/values-i2.png'

export default function Book() {

    return (
        <section className="values-section">
            <div className="container m-auto">
                <h3 className="values-title">قيمنا:</h3>
                <div className="about-goals-cont">
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon1} alt="icon" />
                        </figure>
                        <p>الجودة والتميز. </p>
                    </div>
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon2} alt="icon" />
                        </figure>
                        <p>الشفافية والمصداقية. </p>
                    </div>
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon3} alt="icon" />
                        </figure>
                        <p>الأمانة والإتقان. </p>
                    </div>
                    <div className="about-goals-item">
                        <figure>
                            <Image src={icon4} alt="icon" />
                        </figure>
                        <p>التطور المستمر. </p>
                    </div>
                </div>
                <div className="values-cont">
                    <div className="values-content">
                        <h4 className="values-head">كلمه الرئيس التنفيذي</h4>
                        <p className="values-pargh">
                        مع تطور قطاع النقل في المملكة وتماشيًا مع رؤية السعودية 2030، يأتي نظام واثق كحل مبتكر يضع الشفافية، الأمان، والكفاءة في صميم عملياته. هدفنا هو بناء منظومة متكاملة.

                        واثق ليس مجرد نظام؛ إنه شريك استراتيجي للمستقبل، يفتح آفاقًا جديدة للشركات للارتقاء بأدائها التشغيلي وزيادة كفاءتها.

                        بصفتي الرئيس التنفيذي لواثق، أؤمن بأن الابتكار يبدأ من فهم احتياجات عملائنا، ومن واقع خبرتنا في ادارة وتشغيل محطات الوقود لأكثر من 16 سنة، ابتكرنا نظام واثق وهو انعكاس لهذه الرؤية والخبرات المتراكمة، ونحن ملتزمون بتطويره باستمرار ليبقى الخيار الأول في قطاع النقل البري للمواد البترولية في المملكة العربية السعودية. 
                      
                        </p>
                        <br />
                       <p className="values-pargh"> م. أنس عبدالرحمن أبوراس</p>
                    </div>
                    <div className="values-img-cont">
                        <figure><Image src={img3} alt="img" /></figure>
                        <Image src={img4} alt="" className="values-i1" />
                        <Image src={img5} alt="" className="values-i2" />
                    </div>
                </div>
            </div>
        </section>
    );
}
