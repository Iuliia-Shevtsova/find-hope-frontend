import React, {useState} from 'react';
import styled from 'styled-components';
// import { List, Avatar } from 'antd';

// import { Card, Col, Row } from 'antd';
// import { Card } from 'antd';
import 'antd/dist/antd.css';
import CardItem from './CardItem';
// import { ThemeProvider } from "styled-components";

// const organizations = [
//     {
//       id: 1,
//       name: 'African Services Committee',
//       services: [
//         {
//           name: 'Civil legal services', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
//           age: '',          
//         },
//         {
//           name: 'Benefits Assistance and Education', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
//           age: '',          
//         },
//         {
//           name: 'Housing', 
//           availability: 'for HIV/Aids people',
//           age: '',       
//         },
//         {
//           name: 'Attorney help', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls. Some consultations will be subject to a $60 initial consultation fee.',
//           age: '',          
//         },
//         {
//           name: 'Attorney help', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls. Some consultations will be subject to a $60 initial consultation fee.',
//           age: '',          
//         }
//       ],
//       contacts: {
//         name: 'Getachew Fikremariam',
//         phone: '(212) 2223882 ext. 108',
//         fax: '(212) 2227067',
//         email: 'getachewf@africanservices.org',
//         hours: 'Monday-Friday, 9am-5pm',
//         address: '429 West 127th Street New York, NY 10027',
//         zipCode: '10027',
//         language: [
//           'Haitian Creole',
//           'French'
//         ],
//         website: 'http://africanservices.org/',
//       }
//     },
  
//     {
//       id: 2,
//       name: 'Cabrini Immigrant Services',
//       services: [
//         {
//           name: 'Legal and social services ', 
//           availability: 'immigrants (free initial consultation)',
//           age: '',      
//         },
//         {
//           name: 'Scholarships', 
//           availability: 'low-income immigrant students who are pursuing higher education',
//           age: '',          
//         },
//         {
//           name: 'Food pantry', 
//           availability: 'for HIV/Aids clients',
//           age: '',          
//         },
//         {
//           name: 'Justice for Immigrants', 
//           availability: '',
//           age: '',          
//         }
//       ],
//       contacts: {
//         name: 'Sr. Kelly Carpenter',
//         phone: '(212) 7914590',
//         fax: '(212) 7914592',
//         email: 'info@cis-nyc.org',
//         hours: 'MondayFriday by appointment',
//         address: '139 Henry Street New York, NY 10002',
//         zipCode: '10002',
//         language: [
//           'Spanish'
//         ],
//         website: 'http://cis-nyc.org/',
//       }
//     },
  
//     {
//       id: 3,
//       name: 'CAMBA',
//       services: [
//         {
//           name: 'Food Pantry', 
//           availability: 'need to bring a Photo ID',
//           age: '',      
//         },
//         {
//           name: 'Housing', 
//           availability: 'single homeless adults',
//           age: '',          
//         },
//         {
//           name: 'Free career advisement', 
//           availability: '',
//           age: '',          
//         },
//         {
//           name: 'Professional classes', 
//           availability: 'for immigrant engineers and IT Professionals who are underemployed or unemployed',
//           age: '',          
//         }
//       ],
//       contacts: {
//         name: '',
//         phone: '(718) 287-2600',
//         fax: '',
//         email: 'info@camba.org',
//         hours: '',
//         address: '1720 Church Avenue, 2nd Fl. Brooklyn, NY 11226',
//         zipCode: '11226',
//         language: [],
//         website: 'https://camba.org/',
//       }
//     },

//     {
//       id: 4,
//       name: 'African Services Committee',
//       services: [
//         {
//           name: 'Civil legal services', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
//           age: '',          
//         },
//         {
//           name: 'Benefits Assistance and Education', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
//           age: '',          
//         },
//         {
//           name: 'Housing', 
//           availability: 'for HIV/Aids people',
//           age: '',       
//         },
//         {
//           name: 'Attorney help', 
//           availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls. Some consultations will be subject to a $60 initial consultation fee.',
//           age: '',          
//         }
//       ],
//       contacts: {
//         name: 'Getachew Fikremariam',
//         phone: '(212) 2223882 ext. 108',
//         fax: '(212) 2227067',
//         email: 'getachewf@africanservices.org',
//         hours: 'Monday-Friday, 9am-5pm',
//         address: '429 West 127th Street New York, NY 10027',
//         zipCode: '10027',
//         language: [
//           'Haitian Creole',
//           'French'
//         ],
//         website: 'http://africanservices.org/',
//       }
//     },
  
//     {
//       id: 5,
//       name: 'Cabrini Immigrant Services',
//       services: [
//         {
//           name: 'Legal and social services ', 
//           availability: 'immigrants (free initial consultation)',
//           age: '',      
//         },
//         {
//           name: 'Scholarships', 
//           availability: 'low-income immigrant students who are pursuing higher education',
//           age: '',          
//         },
//         {
//           name: 'Food pantry', 
//           availability: 'for HIV/Aids clients',
//           age: '',          
//         },
//         {
//           name: 'Justice for Immigrants', 
//           availability: '',
//           age: '',          
//         }
//       ],
//       contacts: {
//         name: 'Sr. Kelly Carpenter',
//         phone: '(212) 7914590',
//         fax: '(212) 7914592',
//         email: 'info@cis-nyc.org',
//         hours: 'MondayFriday by appointment',
//         address: '139 Henry Street New York, NY 10002',
//         zipCode: '10002',
//         language: [
//           'Spanish'
//         ],
//         website: 'http://cis-nyc.org/',
//       }
//     },
  
//     {
//       id: 6,
//       name: 'CAMBA',
//       services: [
//         {
//           name: 'Food Pantry', 
//           availability: 'need to bring a Photo ID',
//           age: '',      
//         },
//         {
//           name: 'Housing', 
//           availability: 'single homeless adults',
//           age: '',          
//         },
//         {
//           name: 'Free career advisement', 
//           availability: '',
//           age: '',          
//         },
//         {
//           name: 'Professional classes', 
//           availability: 'for immigrant engineers and IT Professionals who are underemployed or unemployed',
//           age: '',          
//         }
//       ],
//       contacts: {
//         name: '',
//         phone: '(718) 287-2600',
//         fax: '',
//         email: 'info@camba.org',
//         hours: '',
//         address: '1720 Church Avenue, 2nd Fl. Brooklyn, NY 11226',
//         zipCode: '11226',
//         language: [],
//         website: 'https://camba.org/',
//       }
//     },

// ]

const Container = styled.div`
    max-width: 80%;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;

    display: flex;
    flex-wrap: wrap;
    ${'' /* flex-direction: row; */}


  h3 {
    flex-basis: 100%;
    height: 0;

    font-weight: bold;
    text-align: center;
    margin: 10px auto;
    padding-bottom: 2em;
  }
`;






const Category = ({categories, organizations}) => {
  const inialTheme = '';
  const [theme, setTheme] = useState(inialTheme);

  

  

  const changeContent = (e) => {
    e.preventDefault()
    setTheme('100%');
  }

  return (
      <Container>
        <h3>Category 1</h3>
            

        {organizations.map((organization) => (
          <CardItem key={organization.id} organization={organization}/>
        ))}
      </Container>
  )
}

export default Category;