
const Header=({tabName,setActiveTab})=>{
const handleTabs=(tab)=>{
  setActiveTab(tab);
}
    return(
        <>
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">React-API-Imp</span>
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" onClick={()=>{handleTabs("Home")}}  className={`nav-link ${tabName=="Home" && "active"}`} aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" onClick={()=>{handleTabs("Features")}} className={`nav-link ${ tabName=="Features" && "active"}`}>Features</a></li>
        <li className="nav-item"><a href="#" onClick={()=>{handleTabs("Pricing")}} className={`nav-link ${tabName=="Pricing" && "active"}`}>Pricing</a></li>
        <li className="nav-item"><a href="#"onClick={()=>{handleTabs("FAQS")}} className={`nav-link ${tabName=="FAQS" && "active"}`}>FAQs</a></li>
        <li className="nav-item"><a href="#"onClick={()=>{handleTabs("About")}} className={`nav-link ${tabName=="About" && "active"}`}>About</a></li>      
        <li className="nav-item"><button href="#"onClick={()=>{handleTabs("Login")}} className={`nav-link  ${tabName=="Login"&& "active"}`}>Sign in</button></li>

 </ul>
    </header> 
        </>
    );
}
export default Header