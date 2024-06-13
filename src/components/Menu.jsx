export default function Menu(){

    // List Rending
    const menuItems = [
        {
            icon:"🏠",
            Text:"Home",
        },
        {
            icon:"🩳",
            Text:"Shorts",
        },
        {
            icon:"💥",
            Text:"Sucription",
        },
    ]
    return (
    <aside className="col-start-1 col-end-2 row-start-2 row-end-3 pt-4">
            {
                menuItems.map((items)=>{
                    return (
                        <div key={`menu-items-${items.Text}`} className="p-4 rounded-xl flex gap-2 items-center hover:bg-[#282828] hover:p-4 hover:rounded-[10px]" >
                             <span>
                                {items.icon}
                             </span>
                            <span>
                                {items.Text}
                            </span>
                        </div> 
                    )
                })
            }

            {/* Para agregar codigo JS se encierra en {} 
            Cada que nosotros hacemos un 
            */}
        
    </aside>
    )
}