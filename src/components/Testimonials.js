import { useState } from "react";
import Sectionheader from "./Sectionheader";
import Card from "../UI/Card";
import {testimonials} from "../data";
import { ImQuotesLeft } from "react-icons/im";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";

const Testimonials = () => {
    const [index , setIndex] = useState(0);
    const {name , quote , job , avatar} = testimonials[index];


    const handleNextTestimonial = ()=> {
         setIndex(prev => prev+1)
         
         if(index >= testimonials.length -1){
            setIndex(0);
         }
    }

     const handlePrevTestimonial = () => {
        setIndex(prev => prev-1)

        if(index <=  0){
            setIndex(testimonials.length -1);
        }
     };

  return (
    <section className="testimonials">
      <div className="container testimonials__container">
        <Sectionheader icons={<ImQuotesLeft />} title="Testimonials" className="testimonials__head" />
        <Card className="testimonial">
          <div className="testimonial__avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial__quote">{` "${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </Card>
        <div className="testimonials__btn-container">
          <button className="testimonials__btn" onClick={handlePrevTestimonial}>
            <IoArrowBackCircle />
          </button>
          <button className="testimonials__btn" onClick={handleNextTestimonial}>
            <IoArrowForwardCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
