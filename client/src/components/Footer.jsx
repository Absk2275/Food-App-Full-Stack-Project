import React from 'react'
import { Link } from 'react-router-dom';

import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <Link to="/" className="mb-3 mb-md-0 text-muted text-decoration-none lh-1">

          </Link>
          <span className="mb-3 mb-md-0 text-center ms-3">© 2023 Prifood Company Inc, All rights reserved</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><Link className="text-muted" to="#"><BsFacebook /></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"><BsTwitter /></Link></li>
          <li className="ms-3"><Link className="text-muted" to="#"><BsInstagram /></Link></li>
        </ul>
      </footer>
    </div>
  )
}
