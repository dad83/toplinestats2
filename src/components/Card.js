import { Link } from "react-router-dom";
import Image from "./Image.js"


function Card({title, subtitle, category, author, thumbnail}) {

    const hashString = function(str, seed = 0) {
      let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
      for (let i = 0, ch; i < str.length; i++) {
          ch = str.charCodeAt(i);
          h1 = Math.imul(h1 ^ ch, 2654435761);
          h2 = Math.imul(h2 ^ ch, 1597334677);
      }
      h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
      h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
      return 4294967296 * (2097151 & h2) + (h1>>>0);
    };

   const cardHash = hashString(title);

    return (
      <div className={"w-11/12 grid grid-cols-9 border-black grid-row-1 my-4 m-auto border-t border-b mb-4 hmove"}>
          <div className={"grid col-span-7 my-2"}>
               <div className={""}>
               <Link to={`article/${cardHash}`}>
                  <h3 style={{color: "#065A82"}} className={"flex lg:text-lg font-sans text-opacity-75"}>{category}</h3>
                  <h1 style={{color: "#161A3C"}} className={"flex lg:text-2xl font-sans font-bold"}>{title}</h1>
                  <h3 style={{color: "#161A3C"}}  className={"flex lg:text-lg font-sans font-extralight"}>{author}</h3>
               </Link>
               </div>
          </div>
          <div className={" grid col-span-2 my-2"}>
            <Link to={`article/${cardHash}`}>
              <div className={"my-auto"}>
                <img className={"object-scale-down m-4 w-3/4 h-3/4 "} src={thumbnail} />
              </div>
            </Link>
          </div>
          
      </div>
    );
  }
  
  export default Card;
