import Card from "./Card.js";
import { articles, categories } from "../content/content.js";
import { useState } from "react";

function Home() {

  const [currCategory, setCategory] = useState("All")
  let displayArticles;
  if (currCategory !== "All") {
    displayArticles = articles.filter(article => article.category === currCategory)
  }  else {
    displayArticles = articles
  }

  return (
    <div className="grid grid-cols-6 grid-row-1 w-3/4 mx-auto">
        <div className="md:col-span-4 col-span-6">
          {displayArticles.map(({title, subtitle, category, author, date, thumbnail}, index) => 
            <div className={""}>
              <Card
                key={index}
                title={title}
                subtitle={subtitle}
                category={category}
                author={author}
                date={date}
                thumbnail={thumbnail}
              />
            </div>
        )}
        </div>
        <div className="col-span-2 my-4 px-4 border-l-2 border-gray-500 md:block hidden">
          <div className="h-100 w-full">
            <h1 className="text-center text-xl font-bold" >Categories</h1>
            <hr/>
            <div className="w-3/4 m-auto">
              {categories.map(( category, index ) => {
                return (
                  <div key={index}>
                    <h1 onClick={() => {setCategory(category)}} className="text-center text-xl hcolor">
                      {category}
                    </h1>
                    <hr/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home;