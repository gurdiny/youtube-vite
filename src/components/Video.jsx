import clsx from "clsx";

// import 
export default function Video(props){
    // if(!props.chanel){
    //     return(
    //         <article>
    //             <p>incompleto</p>
    //         </article>
    //     )
    // }



    return(
        <article className={clsx("flex flex-col gap-2", { "border-solid border-[red] border-2": props.chanel === "Stanly"})}>
            <img className="w-full rounded-xl object-cover" src={props.image} alt="" />
            <footer className="grid gap-2 grid-cols-[3rem_1fr]">
                {
                    props.chanel && (

                        <img className="col-start-1 col-end-2 w-8 h-8 rounded-full" src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${props.chanel}`} alt="" />
                    )
                }
                {
                    !props.chanel && (<span>🥶</span>)
                }

                {/* {
                    props.chanel ? (
                        <img src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${props.chanel}`} alt="" />
                    ) : (
                        <span>🥶</span>
                    )
                } */}
                <p className="col-start-2 col-end-3">{props.title}</p>
                <p className="col-start-2 col-end-3">{props.chanel || "Desconocido"}</p>
            </footer>
        </article>
    )
}