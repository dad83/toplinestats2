function Paragraph({content}) {
    return (
      <div className={"flex m-auto md:w-3/4 p-4"}>
          <p className={"lg:text-xl md:text-lg text-xs text-left"}>{content}</p>
      </div>
    );
  }
  
  export default Paragraph;