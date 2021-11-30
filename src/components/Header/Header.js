import * as React from "react";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/create">
        <Button>Quote</Button>
      </Link>
      <Link to="/read">
        <Button>Admin Portal</Button>
      </Link>
    </div>
  );
}
