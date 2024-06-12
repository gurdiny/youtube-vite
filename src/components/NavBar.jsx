import YouTubeLogo from "./YouTubeLogo"
export default function NavBar() {
    return (<nav id="navbar"> 
     <div id="logo">
        <YouTubeLogo width="3rem" height="1.8em" />
        <span>YouTube</span>
     </div>
     <div id="search-container">
        <input type="text" placeholder="Search" />
     </div>
     <div id="user-icon">
        <img src="https://api.dicebear.com/8.x/adventurer/svg?seed=gerardo" alt="user" />
     </div>
    </nav>
    )
       
}
