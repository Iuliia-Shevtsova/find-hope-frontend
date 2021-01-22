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
      </Menu.Item>
       <Menu.Divider />
       {categories.map((category) => (
        <Menu.Item key={category.id}>
          <Link to={`/category/${category.id}/organizations`}>{category.name}</Link>
        </Menu.Item>
        ))}
    </Menu>
);
 

  const guestLinks = (
    <ul>
      <li>

        <Dropdown overlay={menu} >
          <Link to="/categories" className="ant-dropdown-link" >
            Categories <DownOutlined />
          </Link>
      </Dropdown>

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
    <NavigationStyle>
      <h1>
        <Link to="/" className="logo">
          NY Doors
        </Link>
      </h1>
      {guestLinks}
    </NavigationStyle>
  );
};

// Navbar.propTypes = {
//   
// };

export default Navbar;