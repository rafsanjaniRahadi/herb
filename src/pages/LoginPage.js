import React from "react";

import Button from "elements/Button";
import "../creator.css";
import BrandIcon from "parts/IconText";

export default function AboutUs() {
	return(
		<React.Fragment>
	<header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse">
		  <ul className="navbar-nav mr-auto">
              <li className={`{("/")}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`{("/About")}`}>
                <Button className="nav-link" type="link" href="/About">
                  About Us
                </Button>
              </li>
              <li className={`{("/login")}`}>
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

    <div class="container-center-horizontal">
    <div id="login">

<h2><span class="fontawesome-lock"></span>Sign In</h2>

<form action="javascript:void(0);" method="POST">

  <fieldset>

    <p><label for="email">E-mail address</label></p>
    <p><input type="email" id="email" value="mail@address.com" onBlur="if(this.value=='')this.value='mail@address.com'" onFocus="if(this.value=='mail@address.com')this.value=''"/></p> 

    <p><label for="password">Password</label></p>
    <p><input type="password" id="password" value="password" onBlur="if(this.value=='')this.value='password'" onFocus="if(this.value=='password')this.value=''"/></p>

    <p><input type="submit" value="Sign In"/></p>

  </fieldset>

</form>

</div> 
    </div>

		</React.Fragment>
	)
}