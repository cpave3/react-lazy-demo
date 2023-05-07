import React from "react";
// import Date from "./components/Date";
// import CatFact from "./components/CatFact";
const CatFact = React.lazy(() => import("./components/CatFact"));
const Date = React.lazy(() => import("./components/Date"));

function App() {
  return (
    <div>
      <div>
        date: <Date />
      </div>
      <div>
        cat fact: <CatFact />
      </div>
    </div>
  );
}

export default App;
