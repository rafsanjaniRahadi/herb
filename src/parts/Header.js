import React from "react";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="brand-text-icon mx-auto" href="" type="link">
              Herb
            </Button>
          </nav>
        </div>
      </header>
    );

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className={`nav-item${getNavLinkClass("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/About")}`}>
                <Button className="nav-link" type="link" href="/About">
                  About Us
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass("/login")}`}>
                <Button className="nav-link" type="link" href="/login">
                  For Creator
                </Button>
              </li> 
            </ul>
          </div>
          <BrandIcon />
        </nav>
      </div>
    </header>
  );
}
