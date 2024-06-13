import Categories from "./Categories"
import Video from "./Video"

export default function Content(){
    const videos = [
        {
            image:"https://i.ytimg.com/vi/g8rawA-uQgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrnMQx4UFIgop2pA9A1Q6HLWyjQA", 
            title:"PACO STANLEY: EL MAYOR MISTERIO DE LA TELEVISIÓN",
            chanel:"Paco Stanly",
        },
        {
            image:"https://i.ytimg.com/vi/orcuKsxkK6o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp_6GbW2B1oNwTVq53VZ3ArQ5ZLA", 
            title:"Mario Bezares: EL MAYOR MISTERIO DE LA TELEVISIÓN",
            chanel:"Paco",
        },
        {
            image:"https://i.ytimg.com/vi/HV6RHh5JwNw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsmJ4A4bGV7Kw3BBfLFLWxW0kISA", 
            title:"YUGIOH!: EL MAYOR MISTERIO DE LA TELEVISIÓN",
            chanel:"Stanly",
        },
        {
            image:"https://i.ytimg.com/vi/b_GXJ11M8Lo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA20Ki4fI5IXGEU0ozyXBOl2VBnEQ", 
            title:"Programadores: EL MAYOR MISTERIO DE LA TELEVISIÓN",
            
        },
    ]
    return (
        <section className="col-start-2 col-end-3 row-start-2 row-end-3">
            <Categories />
            <section id="videos">
                {
                    videos.map((video)=>{
                        return(
                            <Video chanel={video.chanel} image={video.image} title={video.title} key={`video-${video.title}`}/>
                        )
                    })
                }
            </section>
        </section>
    )
}