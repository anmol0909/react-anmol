import React from "react";
import { Link } from "react-router-dom";

const ShowPage = () => {
  return (
    <div>
      <div>
        <Link to="/blog1">Blog1</Link>
      </div>
      <div>
        <Link to="/blog2">Blog2</Link>
      </div>
      <div>
        <Link to="/blog3">Blog3</Link>
      </div>
      <div>
        <Link to="/blog4">Blog4</Link>
      </div>
    </div>
  );
};

export default ShowPage;
