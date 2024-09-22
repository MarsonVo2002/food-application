import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
export default function Sidebar({links, close}){
    return(
    <div onClick={close} className="sidebar">
        {links.map(link => (
        <a className="sidebar-link" href="#!" key={link.name}>
            <FontAwesomeIcon icon={link.icon}></FontAwesomeIcon>
            {link.name}
        </a>))}
    </div>)
}