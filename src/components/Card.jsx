import './styles/Card.css'

export  const Card = ({img,title,icons})=>{
    return(
        <>
         <div className='Card'>
            <img src={img} alt="image-title" className='Card_img' />
            <div className="card_info">
                <i className={`card_icon ${icons}`}></i>
                <h3 className='card_title'>{title}</h3>
            </div>
         </div>
        </>
    )
}