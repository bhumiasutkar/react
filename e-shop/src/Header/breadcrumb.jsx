import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

// const Breadcrumb = (props) => {
//   //const {pathname} = this.props.location;
//   const location = useLocation();
//   return (
//     <section className="breadcrumb-area">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="breadcrumb-content">
//               <h1 className="breadcrumb-hrading">test</h1>
//               <ul className="breadcrumb-links">
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>{location.pathname}</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

const Breadcrumb = (props) => (
    <section className="breadcrumb-area">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="breadcrumb-content">
              <h1 className="breadcrumb-hrading">{pageTitle}</h1>
              <ul className="breadcrumb-links">
                <li>
                  <Link to="/"> Home  /</Link>
                </li>
                <Route path='/:path' component={BreadcrumbsItem} />
              </ul>
            </div>
          </div>
        </div>
      </div>
  </section>
)

const BreadcrumbsItem = ({ match, ...rest }) => (
  
    <React.Fragment>
        <li className={match.isExact ? 'breadcrumb-active' : undefined}>
          <Link to={match.url || ''}>
            { (match.url).replace("/", "") }
          </Link>
        </li>
        
  </React.Fragment>
);
const pageTitle = ({ match }) => (
  
    <React.Fragment>
         <Link to={match.url || ''}>
            { (match.url).replace("/", "") }
          </Link>
  </React.Fragment>
);
export default Breadcrumb;