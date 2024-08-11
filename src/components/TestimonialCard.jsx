import './styles/TestimonialCard.css'

export const TestimonialCard = ({ img,name, workstation,testimonial})=> {
  return (
    <>
    <div className='Testimonial_Card'>
        <div className="Testimonial_presentation">
            <div className="Testimonial_img">
                <img src={img} alt="testimonial image" />
            </div>
            <div className="Testimonial_name">
                <h2>{name}</h2>
                <p>{workstation}</p>
            </div>
        </div>
        <div className='testimonial_container'>
            <p>{testimonial}</p>
        </div>
    </div>
    </>
  )
}

