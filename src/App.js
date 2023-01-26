import Header from "./components/Header";
import data from './data';
import Review from "./components/Review";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState(data)
  const [indexNum, setIndexNum] = useState(0)

  const prevReview = () => {
    if(indexNum === 0){
      setIndexNum(reviews.length - 1)
    }else{
      setIndexNum(indexNum - 1)
    }
  }

  const nextReview = () => {
    if(indexNum === reviews.length - 1){
      setIndexNum(0)
    }else{
      setIndexNum(indexNum + 1)
    }
  }

  const supriseMe = () => {
    setIndexNum(Math.floor(Math.random() * reviews.length))
  }

  return (
    <div className="app">
      <Header />
      <Review idx={indexNum} reviews={reviews} prevReview={prevReview} nextReview={nextReview} supriseMe={supriseMe} />
    </div>
  );
}

export default App;
