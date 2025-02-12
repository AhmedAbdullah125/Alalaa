'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
import Loading from '@/app/loading';
import img1 from '/public/Frame1.svg'
import img2 from '/public/Frame2.svg'
import img3 from '/public/Vector3.svg'
import img4 from '/public/Vector4.svg'
export default function About() {
    let imgs = [
        { img: img1,title:"النزاهة" ,desc:" نسعى للصدق في جميع مساعينا، ونتعامل بأمانة مع بعضنا البعض ومع شركاءنا." },
        { img: img2,title:"الجودة",desc:"الالتزام بتقديم خدمات ومنتجات ذات معايير عالية." },
        { img: img3,title:"الابتكار",desc:"تطبيق أحدث التقنيات لضمان كفاءة الخدمات."},
        { img: img4 ,title:"الشفافية",desc:"بناء علاقات متينة قائمة على المصداقية والثقة."}
    ]
    const [loading, setLoading] = useState(true); // State for loading indicator
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        const headers = {
            lang: 'ar', // Change language dynamically based on state
        };
        // Fetch data from the API with Axios
        axios.get(`${API_BASE_URL}/features`
            , {
                headers: headers,
            }).then(response => {
                setData(response.data.data);  // Set the response data to state
                setLoading(false);  // Set loading to false

            })
            .catch(error => {
                setError(error);  // Handle any errors
                console.error('Error fetching data:', error);
                setLoading(false)
            });
    }, []);  // Run this effect whenever the `language` changes
    console.log(data);

    return (
        <div className="about" >
            <div className="container m-auto">
                <h2>ما يميزنا..؟</h2>
                {
                    loading ? <Loading /> :
                        <div className="options">
                            {/* {
                                data.map((item, index) =>
                                    <motion.div
                                        initial={{ y: 100, opacity: 0, }}
                                        whileInView={{ y: 0, opacity: 1, }}
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.5,
                                            duration: index * .5,
                                        }}
                                        viewport={{ once: true }}
                                        className="option" key={index}
                                    >
                                        <div className="img-cont">
                                            <Image src={imgs[index].img} width={200} height={200} alt="Mazar"></Image>
                                        </div>
                                        <div className="text">
                                            <h2>{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </motion.div>
                                )
                            } */}
                             {
                                imgs.map((item, index) =>
                                    <motion.div
                                        initial={{ y: 100, opacity: 0, }}
                                        whileInView={{ y: 0, opacity: 1, }}
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.5,
                                            duration: index * .5,
                                        }}
                                        viewport={{ once: true }}
                                        className="option" key={index}
                                    >
                                        <div className="img-cont">
                                            {/* <Image src={item.image} width={200} height={200} alt="Mazar"></Image> */}
                                            <Image src={item.img} width={200} height={200} alt="Mazar"></Image>
                                        </div>
                                        <div className="text">
                                            <h2>{item.title}</h2>
                                            <p>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                )
                            }
                        </div>
                }
            </div>
        </div>
    )
}
