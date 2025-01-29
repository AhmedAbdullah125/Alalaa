'use client'
import React from 'react';
import newsimg from '/public/new.jpg'
import Image from 'next/image';
export default function News() { // Defining the main functional component named 'Footer'.
    let news = [
        { id: 1, img: newsimg, title: "تابع الان اخر اخبار ", date: "12/02/2023", p: "تابع الان اخر اخبار " },
        { id: 2, img: newsimg, title: "تابع الان اخر اخبار ", date: "12/02/2023", p: "تابع الان اخر اخبار " },
        { id: 3, img: newsimg, title: "تابع الان اخر اخبار ", date: "12/02/2023", p: "تابع الان اخر اخبار " },
    ]
    return (
        <div className="news brief">
            <div className="container m-auto">
                <div className="latest">
                    <h2>اخر اخبارنا </h2>
                    <div className="news-cont">
                        {
                            news.map((item, index) =>
                                <div className="news" key={index}>
                                    <Image src={item.img} alt="Mazar" width={200} height={200} />
                                    <div className="news-data">
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <p>{item.p}</p>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="latest">
                    <h2>قم بالقاء نظره عن مدوناتنا</h2>
                    <div className="news-cont">
                        {
                            news.map((item, index) =>
                                <div className="news" key={index}>
                                    <Image src={item.img} alt="Mazar" width={200} height={200} />
                                    <div className="news-data">
                                        <div className="text">
                                            <h3>{item.title}</h3>
                                            <p>{item.p}</p>
                                        </div>
                                        <div className="arrow">
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
