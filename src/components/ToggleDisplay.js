import { useParams } from "react-router-dom"
import { contact } from "../content/content.js";

function ToggleDisplay () {
    const { ad } = useParams();

    const method = contact[ad];

    
    return (
        <a className={""} href={method.link}>
            <h1 className="text-center text-xl m-4 hcolor">
                {method.display}
            </h1>
        </a>
        
    )
}

export default ToggleDisplay;