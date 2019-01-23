/**
 * SpikeForest Iso
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Header.css';
// import Link from '../Link';

// import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
// import NavbarHeader from 'react-bootstrap/lib/NavbarHeader';
// import NavbarBrand from 'react-bootstrap/lib/NavbarBrand';
// import NavbarCollapse from 'react-bootstrap/lib/NavbarCollapse';
// import NavbarToggle from 'react-bootstrap/lib/NavbarToggle';

// import logoUrl from './logo.svg';

// class Header extends React.Component {
//   render() {
//     return (
//       <div className={s.root}>
//         <Navbar fixedTop>
//           <NavbarHeader>
//             <NavbarBrand>
//               <Link to="/">
//                 <img
//                   src={logoUrl}
//                   alt="SpikeForest logo"
//                   height="38px"
//                   width="38px"
//                   id="svg_header"
//                 />
//               </Link>
//             </NavbarBrand>
//             <NavbarToggle />
//           </NavbarHeader>
//           <NavbarCollapse>
//             <Nav pullRight>
//               <NavItem eventKey={11} href="/about">
//                 About
//               </NavItem>
//             </Nav>
//           </NavbarCollapse>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default withStyles(s)(Header);

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="React"
            />
            <span className={s.brandTxt}>SpikeForest</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
