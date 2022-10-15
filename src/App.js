import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { useState } from "react";

// const quote = {
//   text: "We become what we think about. blallafjdlkfjdskl asdlkfjadslkfjd kjdflkdjfdflkjadskj kjdflkjafk",
//   author: "Earl Nightingale",
// };

// Random quotes -->
// https://goquotes-api.herokuapp.com/api/v1/random?count=1

function App() {
  const [quote, setQuote] = useState([]);
  function getNewQuote(){
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
      .then((resp) => resp.json())
      .then((data) => setQuote(data.quotes[0]));
  }
  useEffect(() => {
    getNewQuote();
  }, []);

  return (
    <div className=" bg-gradient-to-b from-slate-200 to-slate-400 h-screen w-screen">
      <div className="flex flex-col items-center h-screen">
        <h1 className="my-10 bg-gray-500 text-white rounded-lg p-2 text-3xl">
          Random Quote Generator ✒️
        </h1>
        {/* Quote Box */}
        <div className="bg-gray-100 p-10 rounded-lg w-1/2 my-auto shadow-md">
          <h3 className="text-2xl">{quote.text}</h3>
          <h4 className="text-lg mt-5 text-right">~ {quote.author}</h4>
        </div>

        {/* Generate new quote button */}
        <div className="my-10 flex flex-col items-center">
          <h3 className="text-lg m-5">Generate a new quote!</h3>
          <ArrowPathIcon onClick={getNewQuote} className="h-12 rounded-xl hover:bg-blue-900 cursor-pointer hover:text-white bg-blue-500 p-2" />
        </div>
      </div>
    </div>
  );
}

export default App;
