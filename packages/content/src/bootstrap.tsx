import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Content } from "./content/content.component";

const App: React.FC = () => {
  const [page] = useState("home");
  return <Content currentPage={page} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
