"use client";

import { Comment } from '@/utils/types';
import React, { useRef } from 'react'
import Slider from 'react-slick'
import RatingStars from './RatingStars';

import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';

const Comments = ({ comments, title }: { comments: Comment[], title: string }) => {
    const sliderRef = useRef<Slider | null>(null);

    // slider settings
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
        ]
    };

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <>
            <div className="box nowrap full-width">
                <h2 className='full-width'>{title}</h2>
                <div className="box small-gap full-width nowrap jc-end">
                    <button className="icon" onClick={previous}>
                        <FaArrowLeftLong />
                    </button>
                    <button className="icon" onClick={next}>
                        <FaArrowRightLong />
                    </button>
                </div>
            </div>

            <div className="comments full-width box column small-gap">
                <Slider ref={sliderRef} {...settings}>
                    {
                        comments.map((comment: Comment) => (
                            <div className="comment-container" key={comment.id} style={{maxWidth: "300px"}}>
                                <div className="comment paper outline box column small-gap ai-start">
                                    <div className="comment-header">
                                        <RatingStars rate={4} onlyStars />
                                        <h3 className='disable-guitters' title={comment.name}>{comment.name}</h3>
                                    </div>
                                    <div className="comment-body full-width">
                                        <p>{comment.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

                <Link href={"#"} className='btn rounded primary outline'>View More</Link>
            </div>
        </>
    )
}

export default Comments

