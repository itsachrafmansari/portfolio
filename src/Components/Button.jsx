import { Link } from "react-router-dom";

const LinkButton = ( {path, isLocal, text} ) => {
    if (isLocal) {
        return (
            <Link to={path} className="px-5 py-3 rounded-xl text-white bg-orange-500 hover:bg-orange-400 transition-all duration-200">{text}</Link>
        )
    } else {
        return (
            <a href={path} className="px-5 py-3 rounded-xl text-white bg-orange-500 hover:bg-orange-400 transition-all duration-200">{text}</a>
        )
    }
}
 
export default LinkButton;