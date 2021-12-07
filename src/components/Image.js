function Image({content}) {
    return (
      <div className={"m-auto md:w-8/12 md:h-8/12 p-4"}>
          <img className={"object-scale-down m-auto "} src={content} />
      </div>
    );
  }
  
  export default Image;