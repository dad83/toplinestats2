function Text({content}) {
    return (
      <div className="m-auto md:w-3/4 p-4">
          <h2 className={"lg:text-2xl md:text-xl text-xs text-center"}>{content}</h2>
      </div>
    );
  }
  
  export default Text;