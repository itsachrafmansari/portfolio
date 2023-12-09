import { Link } from "react-router-dom";

const NavbarLink = ( {path, text} ) => {
    return (
        <div className="relative group">
            <Link to={path} className="text-cyan-200 group-hover:text-cyan-100">{text}</Link>
            <div className="absolute w-[0%] group-hover:w-[100%] h-[1px] -bottom-1 left-1/2 -translate-x-1/2 bg-cyan-100 transition-all duration-200"></div>
        </div>
    );
}
 
export default NavbarLink;