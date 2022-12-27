import React from "react";
import Card from "./Card"


function Nav(props) {
  const { children } = props;
  return (
  <nav>
    <Card>
      {children}
    </Card>
    </nav>
    );
}

export default Nav;
