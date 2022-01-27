import React from "react";

import ReactHtmlParser from "react-html-parser";
export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the herb</h4>
      {ReactHtmlParser(data.description)}
    
    </main>
  );
}
