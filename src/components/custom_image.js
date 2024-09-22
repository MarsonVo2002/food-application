export default function CustomImage ({src, pt}){
    return(
    <div className="custom-image" style={{paddingTop:pt}}>
        <img src={src} alt=""></img>
    </div>)
}