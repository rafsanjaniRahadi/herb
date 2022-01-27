import React from "react";
import "../style.css";
import Button from "elements/Button";
import IconText from "parts/IconText";
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

		<body>
<div class="section">
		<div class="container">
		<div class="content-section">
			<div class="title">
				<h1>About Us</h1>
			</div>
			<div class="gambar">
			<img src="https://i.pinimg.com/564x/84/24/3c/84243c8efc016a173bc90fd727b94511.jpg" width="500"/>
		  </div>
			<div class="about">
				<h5>About Us</h5>
			</div>
			<div class="content">
				<p>Herb Website merupakan proyek kelompok Jaya Abadi yang beranggotakan 5 orang. Kami memutuskan untuk membuat website yang berbasis tanaman herbal karena kami merasa masih banyak masyarakat yang kurang mengenal tanaman herbal dan manfaatnya yang banyak..</p>
			</div>	
			<div class="about">
				<h5>Author</h5>
			</div>	

<div id="images" class="fadeInUp">
<a href="#">
	<img src="https://i.pinimg.com/564x/b9/5c/1d/b95c1de5ce13ae750bc5572cb4e047b8.jpg" width="80px" height="80px"/>
	<div class="caption">Rafa</div>
</a>
<a href="#">
	<img src="https://i.pinimg.com/564x/97/f7/fa/97f7fa850cb99f4d025fa340de951cea.jpg" width="80px" height="80px"/> 
	<div class="caption">Toriq</div>
</a>
<a href="#">
	<img src="https://i.pinimg.com/564x/c9/ac/b1/c9acb1fa299ed7e3e664ba63705cc2ca.jpg" width="80px" height="80px"/> 
	<div class="caption">Izzul</div>
</a>
<a href="#">
	<img src="https://i.pinimg.com/564x/29/72/7f/29727f42eee02d1d865fe111c2d01e99.jpg" width="80px" height="80px"/> 
	<div class="caption">Syarif</div>
</a>
<a href="#">
	<img src="https://i.pinimg.com/564x/49/04/61/4904610756ae240da0de06146514d659.jpg" width="80px" height="80px"/> 
	<div class="caption">Afnanda</div>
</a>
	</div>
</div>
</div>
</div>
		
</body>	
<footer>
		<div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            {/* <p className="brand-tagline">
              Bersama kami liburanmu akan tenang dan nyaman.
            </p> */}
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item">
                <Button type="link" href="#">
                  Buat akun baru
                </Button>
              </li> */}
              <li className="list-group-item">
                <Button type="link" href="#">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="#">
                  Privacy
                </Button>
                <li className="list-group-item">
                  <Button type="link" href="#">
                    Terms & Conditions
                  </Button>
                </li>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:rahadirafsanjani@gmail.com"
                >
                  herbs@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622135526352">
                  021 - 2208 - 000
                </Button>
              </li>
              <li className="list-group-item">
                <span>Herb, Sleman, Daerah Istimewa Yogyakarta </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2021 • All rights reserved • HERB
          </div>
        </div>
      </div>
		</footer>
	</React.Fragment>
	);}

	