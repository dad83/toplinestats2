import { useParams } from "react-router"
import Text from "./Text.js";
import Paragraph from "./Paragraph.js";
import ParagraphLink from "./ParagraphLink.js";
import Image from "./Image.js";
import { articles } from "../content/content.js";

function Article() {
    const { id } = useParams();

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

    const findArticle = () => {
        let selection;
        articles.forEach((article) => {
            if (hashString(article.title).toString() === id) { selection = article }
        });
        return selection;
    }

    const getComponent = (item,index) => {
        const {type, content} = item;

        switch(type) {
            case "text":
                return <Text key={index} content={content} />
            case "paragraph":
                return <Paragraph key={index} content={content} />
            case "paragraph-link":
                return <ParagraphLink key={index} content={content} />
            case "image":
                return <Image key={index} content={content} />
            default:
              return null;
          }
    }

    const {
        title,
        subtitle,
        author,
        category,
        date,
        thumbnail,
        body,
    } = findArticle();

    return (
      <div className="m-auto w-3/4">
          <Image content={thumbnail} />  
          <h1 className="md:text-4xl text-lg text-center" >{title}</h1>
          <h3 className="md:text-3xl text-base text-center">{subtitle}</h3>
          <h2 className="md:text-3xl text-base text-center">{`By: ${author}`}</h2>
          <h5 className="md:text-2xl text-sm text-center">{date}</h5> 
          <div className="m-auto">
          {body.map((item,index) => {
              return getComponent(item,index)
          }
          )}
          </div>
      </div>
    );
  }

  export default Article;