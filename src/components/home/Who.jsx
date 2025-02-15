'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';
import { motion } from 'framer-motion';
import img from '/public/alalaa.jpg'


export default function Who() {



    return (

        <section className={` hero-main why`} id='about'>
            <div className="container m-auto">
                <div className="hero-about" >
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="l-side">
                       
                        <h3 className='sec-title'>شركة الآلاء الوطنية التجارية: نحو مستقبلٍ مزدهر </h3>
                        <p className='who-p'>تأسست شركة الآلاء الوطنية التجارية في عام 1998م كمؤسسة فردية وتحولت لشركة ذات مسؤولية محدودة في عام 2016م، وتطورت منذ ذلك الحين لتصبح إحدى الشركات الرائدة في المملكة العربية السعودية، حيث تقدم خدمات متكاملة في مجالات النقل البري، إدارة وتشغيل محطات الوقود، المقاولات العامة، الأمن، والسلامة. تعمل الشركة وفق أعلى معايير الجودة والابتكار لتحقيق رؤيتها المتمثلة في دعم تطلعات عملائها والمساهمة في تحقيق أهداف رؤية المملكة 2030. </p>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            type: 'spring',
                            bounce: 0.2,
                            duration: .5,
                        }}
                        viewport={{ once: true }}
                        className="r-side">
                        <div className="img-cont">
                            <div className="overlay"></div>
                            <Image src={img} width={500} height={500} alt="Mazar" className="img-hero" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}