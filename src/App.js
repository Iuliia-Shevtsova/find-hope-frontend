// import React from 'react';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Category from './components/Categories/category_organizations/Category';
import ReviewCardParent from './components/Categories/organizations/reviews/ReviewCardParent';
import AllCategories from './components/Categories/allCategories/AllCategories';
import Organization from './components/Categories/organizations/Organization';
import GlobalStyle from './css/GlobalStyle';
// import { ThemeProvider } from "styled-components";
import 'antd/dist/antd.css';


// const [theme, setTheme] = useState({ background: 'none' })

// useEffect = () => {
//   if (document.URL==='http://localhost:3000/categories')
//     setTheme({ background: 'rgb(0, 50, 78)' });
//   else if (document.URL==='http://localhost:3000/')
//     setTheme({ background: 'none' });
//   end;
// } 


// const theme = (document.URL==='http://localhost:3000/')?
// { 
//   background: 'none' 
// }:
// { 
//   background: 'rgb(0, 50, 78)' 
// }

// console.log(document.URL)


function App() {

  const [categories, setCategories] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect( () => {
    categoriesList();
    organizationsList();
  }, [])


  const categoriesList = () => {
    axios.get('http://localhost:3000/categories')
    .then(response => {
      console.log(response);
      setCategories(response.data);
    })
    .catch(error => console.log('api errors:', error))
  }

  const organizationsList = () => {
    axios.get('http://localhost:3000/organizations')
    .then(response => {
      console.log(response);
      setOrganizations(response.data)
    })
    .catch(error => console.log('api errors:', error))
  }

  return (
    <Router>
      <GlobalStyle />
      {/* <ThemeProvider theme={theme}> */}
        <Navbar categories={categories}/>
      {/* </ThemeProvider> */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route 
              path="/categories" 
              render={props => (
              <AllCategories {...props} categories={categories} organizations={organizations}/>
              )}
            />
            {/* <Route exact path="/categories" component={AllCategories} /> */}
            <Route 
              exact path="/category/:id/organizations"
              render={props => (
              <Category {...props} categories={categories} />
              )}
            />
            <Route exact path="/review" component={ReviewCardParent} />
            <Route 
              path="/category/:id/organizations/:org_id"
              render={props => (
              <Organization {...props} organizations={organizations}/>
              )}
            />
            {/* <Route path="/category/:id/organizations/:org_id" component={Organization} /> */}
          </Switch>
    </Router>
  );
} 

export default App;
