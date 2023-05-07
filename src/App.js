import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const CatFact = React.lazy(() => import("./components/CatFact"));
const Date = React.lazy(() => import("./components/Date"));

function Layout() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="date">Date</Link>
        </li>
        <li>
          <Link to="cat-fact">Cat Fact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="date"
          element={
            <React.Suspense fallback={<>...</>}>
              <Date />
            </React.Suspense>
          }
        />
        <Route
          path="cat-fact"
          element={
            <React.Suspense fallback={<>...</>}>
              <CatFact />
            </React.Suspense>
          }
        />
        <Route path="*" element={<div>nothing</div>} />
      </Route>
    </Routes>
  );
}

export default App;
