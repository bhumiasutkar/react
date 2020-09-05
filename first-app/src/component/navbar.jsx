import React from "react";
const NavBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge-pill badge-primary">{totalCount}</span>
      </a>
    </nav>
  );
};

export default NavBar;
// class NavBar extends Component {
//   render() {
//     return (
//       <nav class="navbar navbar-light bg-light">
//         <a class="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge-pill badge-primary">
//             {this.props.totalCount}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
