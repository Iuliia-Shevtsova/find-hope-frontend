import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import NavigationStyle from '../css/NavigationStyle';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';


const Navbar = ({categories}) => {

  const menu = (
    <Menu>
      <Menu.Item key="0" >
      <Link to="/categories">All Categories</Link>
        {/* <a href="/categories">1st menu item</a> */}
      </Menu.Item>
       <Menu.Divider />
       {categories.map((category) => (
        <Menu.Item key={category.id}>
          <Link to={`/category/${category.id}/organizations`}>{category.name}</Link>
        </Menu.Item>
        ))}
      {/* <Menu.Item key="1">
      <Link to="/category">Category 1</Link> */}
        {/* <a href="/categories">2nd menu item</a> */}
      {/* </Menu.Item>
      <Menu.Item key="2">
      <Link to="/category">Category 2</Link> */}
        {/* <a href="/categories">2nd menu item</a> */}
      {/* </Menu.Item> */}
    </Menu>
);

// const Navbar = ({ logout, auth: { isAuthenticated, loading } }) => {
//     const authLinks = (
//     <ul>
//       <li>
//         <Link to="/profiles">Developers</Link>
//       </li>
//       <li>
//         <Link to="/posts">Posts</Link>
//       </li>
//       <li>
//         <Link to="/dashboard">
//           <i className="fas fa-user"></i>
//           {'  '}
//           <span className="hide-sm">Dashboard</span>
//         </Link>
//       </li>
//       <li>
//         <a onClick={() => logout()} href="#!">
//           <i className="fas fa-sign-out-alt"></i>
//           {'  '}
//           <span className="hide-sm">Logout</span>
//         </a>
//       </li>
//     </ul>
//   );

  

  const guestLinks = (
    <ul>
      <li>

        <Dropdown overlay={menu} >
          <Link to="/categories" className="ant-dropdown-link" >
            Categories <DownOutlined />
          </Link>
      </Dropdown>
      
        {/* <Link to="/categories">Categories</Link> */}

      </li>
      <li>
        <Link to="/register" className="">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="">
          Login
        </Link> 
      </li>
    </ul>
  );

  return (
    //  <nav className="navbar">
    <NavigationStyle>
      <h1>
        <Link to="/" className="logo">
          {/* <i className="fas fa-meteor"></i> <strong>Dev</strong>
          <span style={{ color: '#f5f5f5' }}>Meetup</span> */}
          Find Help
        </Link>
      </h1>
      {guestLinks}
      {/* {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>} */}
     {/* </nav> */}
    </NavigationStyle>
  );
};

// Navbar.propTypes = {
//   logout: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { logout })(Navbar);
export default Navbar;