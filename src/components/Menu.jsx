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
    <aside id="menu">
            {
                menuItems.map((items)=>{
                    return (
                        <div key={`menu-items-${items.Text}`} className="menu-items" >
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