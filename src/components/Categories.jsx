export default function Categories(){
    const categories = ["all", "Music", "Gaming", "Code", "Sports", "Marketing"]
    return(
        <div id="categories-list">
           {
            categories.map((category)=>{
                return(
                    <span key={`category-${category}`} className="category">{category}</span>
                )
            })
           }
        </div>
    )
}