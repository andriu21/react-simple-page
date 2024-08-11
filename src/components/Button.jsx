import './styles/Button.css'


export const Button = ({title,color='white'})=>{
    return(
        <a href="#" className={`btn ${color == 'white' ? 'white' : 'blue'}`}>{title} <i className="ri-arrow-right-double-fill"></i></a>
    )
}