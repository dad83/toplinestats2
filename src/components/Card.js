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
      <div className={"h-1/6 w-5/6 grid grid-cols-2 grid-row-1"}>
          <div className={"flex bg-red-100"}>
            <Link to={`article/${cardHash}`}>
                <Image className={"w-1/4 h-1/6"} content={thumbnail} />
            </Link>
          </div>
          <div className={"flex bg-blue-100"}>
               <div className={"h-1/2 grid grid-cols-1 grid-row-4"}>
                  <h1 className={"lg:text-2xl"}>{title}</h1>
                  <h2 className={"lg:text-xl"}>{subtitle}</h2>
                  <h3 className={"lg:text-lg"}>{author}</h3>
                  <h3 className={"lg:text-lg"}>{category}</h3>
               </div>
          </div>
      </div>
    );
  }
  
  export default Card;