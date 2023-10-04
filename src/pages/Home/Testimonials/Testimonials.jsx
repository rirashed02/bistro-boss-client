import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// react icons
import { BsQuote } from 'react-icons/bs';

// ratings
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="">
            <div className="">
                <SectionTitle subHeading={'What Our Clients Say'} heading={'Testimonials'}></SectionTitle>
            </div>
            <div className="my-12">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className="text-center mx-32">
                                    <Rating className="block mx-auto"
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />

                                    <span className=""><BsQuote className="mx-auto text-6xl font-bold my-5"></BsQuote></span>

                                    <p>{review.details}</p>
                                    <h1 className="text-yellow-600 font-semibold text-2xl">{review.name}</h1>
                                </div>
                            </SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;