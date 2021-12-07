import { copyright } from "../content/content.js";

function Footer() {
    return (
      <div className="lg:w-3/4 md:7/8 m-auto">
          <hr/>
          <h1 className="text-center m-4" >{copyright}</h1>
      </div>
    );
  }
  
  export default Footer;