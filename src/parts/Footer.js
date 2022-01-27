import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";
export default function Footer() {
  return (
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
  );
}
