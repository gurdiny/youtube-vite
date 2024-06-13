import YouTubeLogo from "./YouTubeLogo"
export default function NavBar() {
    return (<nav className="grid col-start-1 col-end-3 grid-cols-3"> 
     <div className="flex flex-row items-center gap-1 pl-4">
        <YouTubeLogo width="3rem" height="1.8em" />
        <span>YouTube</span>
     </div>
     <div className="flex justify-center align-middle">
        <input type="text" placeholder="Search" className="bg-transparent p-[.5rem_1rem] border-solid border border-[#282828] rounded-3xl w-full"/>
     </div>
     <div className="flex justify-end">
        <img className="w-10" src="https://api.dicebear.com/8.x/adventurer/svg?seed=gerardo" alt="user" />
     </div>
    </nav>
    )
       
}
