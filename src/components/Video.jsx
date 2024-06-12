export default function Video(props){
    return(
        <article className="video-card">
            <img src={props.image} alt="" />
            <footer>
                <img src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${props.chanel}`} alt="" />
                <p className="video-card-title">{props.title}</p>
                <p className="video-card-chanel">{props.chanel}</p>
            </footer>
        </article>
    )
}