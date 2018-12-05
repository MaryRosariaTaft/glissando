import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul className="no-padding center">
    <li className="display-inline">
      <Link to="/">home</Link>
    </li>
    <li className="display-inline">
      <Link to="/calendar">calendar</Link>
    </li>
    <li className="display-inline">
      <Link to="/students">students</Link>
    </li>
    <li className="display-inline">
      <Link to="/payments">payments</Link>
    </li>
    <li className="display-inline">
      <Link to="/settings">settings</Link>
    </li>
  </ul>

  // <div class="container-fluid text-center">    
  //   <div class="row">

  //     <div class="col-sm-2"> 
  //       <h5>Glissando</h5>
  //     </div>
  //     <div class="col-sm-2">
  //       <Link to="/">home</Link>
  //     </div>
  //     <div class="col-sm-2">
  //       <Link to="/calendar">calendar</Link>
  //     </div>
  //     <div class="col-sm-2">
  //       <Link to="/students">students</Link>
  //     </div>
  //     <div class="col-sm-2">
  //       <Link to="/payments">payments</Link>
  //     </div>
  //     <div class="col-sm-2">
  //       <Link to="/settings">settings</Link>
  //     </div>

  //   </div>
  // </div>

)

export default NavBar;
