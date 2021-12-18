import { about, selfie } from "../content/content.js";
import { BsTwitter, BsInstagram, BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { FiMail } from "react-icons/fi";
import { Link, Route, Routes} from "react-router-dom";
import ToggleDisplay from './ToggleDisplay.js';

function Contact() {

    return (
      <div style={{height: "70vh"}} className="w-3/4 m-auto my-4">
          <img className={"m-auto rounded-full w-40 h-40"} src={selfie} />
          <h1 className="text-center my-4">
            About
          </h1>
          <p className="text-center" >{about}</p>
          <div className="w-10/12 mx-auto my-4 ">
            <hr/>
          </div>
          <div className="flex">
            <div className="flex m-auto">
              <Link to={`twitter`}>
                <BsTwitter className="m-2 h-6 w-6 hover:opacity-40"/>
              </Link>
              <Link to={`instagram`}>
                <BsInstagram className="m-2 h-6 w-6 hover:opacity-40"/>
              </Link>
              <Link to={`github`}>
                <BsGithub className="m-2 h-6 w-6 hover:opacity-40"/>
              </Link>
              <Link to={`phone`}>
                <BsTelephoneFill className="m-2 h-6 w-6 hover:opacity-40"/>
              </Link>
              <Link to={`email`}>
                <FiMail className="m-2 h-6 w-6 hover:opacity-40"/>
              </Link>
            </div>
          </div>
          <Routes>
            <Route path=":ad" element={<ToggleDisplay />} />
          </Routes>
      </div>
    );
  }
  
  export default Contact;