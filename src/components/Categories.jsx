export default function Categories(){
    const categories = ["all", "Music", "Gaming", "Code", "Sports", "Marketing"]
    return(
        <div className="flex flex-row gap-4">
           {
            categories.map((category)=>{
                return(
                    <span key={`category-${category}`} className="p-[.5rem_1rem] rounded-xl bg-[#282828] hover:cursor-pointer hover:text-[#282828] hover:bg-[#fff]">{category}</span>
                )
            })
           }
        </div>
    )
}