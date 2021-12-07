
function ParagraphLink({content}) {

    return (
        <div className="m-auto md:w-3/4 p-4">
            <p className={"lg:text-xl md:text-lg text-xs text-left"}>
                {content.map((item, index) => {
                    if (typeof item === "string"){
                        return item;
                    } else {
                        return (
                            <a className={"font-bold italic"} key={index} href={item.link} >{item.text}</a>
                        )
                    }
                })}
            </p>
        </div>
    );
  }
  
  export default ParagraphLink;