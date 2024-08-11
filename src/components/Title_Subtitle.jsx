import './styles/Title_Subtitle.css'

export const Title_Subtitle=({title,subtitle})=> {
  return (
    <>
    <div className='title_container' id='title_container'>
        <h2 className='title'>{title}</h2>
        <span className='subtitle'>{subtitle}</span>
    </div>
    </>
  )
}

export default Title_Subtitle