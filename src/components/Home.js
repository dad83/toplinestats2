import Card from "./Card.js";
import { articles } from "../content/content.js";

function Home() {
  return (
    <div>
        {articles.map(({title, subtitle, category, author, date, thumbnail}, index) => 
            <Card
                key={index}
                title={title}
                subtitle={subtitle}
                category={category}
                author={author}
                date={date}
                thumbnail={thumbnail}
            />
        )}
    </div>
  );
}

export default Home;