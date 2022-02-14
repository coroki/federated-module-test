import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Nav } from "./nav/nav.component";

const App: React.FC = () => {
  const [page, setPage] = useState("home");
  return <Nav currentPage={page} onPageChange={setPage} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
