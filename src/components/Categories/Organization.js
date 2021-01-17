import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const organizations = [
    {
      id: 1,
      name: 'African Services Committee',
      services: [
        {
          name: 'Civil legal services', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
          age: '',          
        },
        {
          name: 'Benefits Assistance and Education', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
          age: '',          
        },
        {
          name: 'Housing', 
          availability: 'for HIV/Aids people',
          age: '',       
        },
        {
          name: 'Attorney help', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls. Some consultations will be subject to a $60 initial consultation fee.',
          age: '',          
        },
        {
          name: 'Attorney help', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls. Some consultations will be subject to a $60 initial consultation fee.',
          age: '',          
        }
      ],
      contacts: {
        name: 'Getachew Fikremariam',
        phone: '(212) 2223882 ext. 108',
        fax: '(212) 2227067',
        email: 'getachewf@africanservices.org',
        hours: 'Monday-Friday, 9am-5pm',
        address: '429 West 127th Street New York, NY 10027',
        zipCode: '10027',
        language: [
          'Haitian Creole',
          'French'
        ],
        website: 'http://africanservices.org/',
      }
    },
  
    {
      id: 2,
      name: 'Cabrini Immigrant Services',
      services: [
        {
          name: 'Legal and social services ', 
          availability: 'immigrants (free initial consultation)',
          age: '',      
        },
        {
          name: 'Scholarships', 
          availability: 'low-income immigrant students who are pursuing higher education',
          age: '',          
        },
        {
          name: 'Food pantry', 
          availability: 'for HIV/Aids clients',
          age: '',          
        },
        {
          name: 'Justice for Immigrants', 
          availability: '',
          age: '',          
        }
      ],
      contacts: {
        name: 'Sr. Kelly Carpenter',
        phone: '(212) 7914590',
        fax: '(212) 7914592',
        email: 'info@cis-nyc.org',
        hours: 'MondayFriday by appointment',
        address: '139 Henry Street New York, NY 10002',
        zipCode: '10002',
        language: [
          'Spanish'
        ],
        website: 'http://cis-nyc.org/',
      }
    },
  
    {
      id: 3,
      name: 'CAMBA',
      services: [
        {
          name: 'Food Pantry', 
          availability: 'need to bring a Photo ID',
          age: '',      
        },
        {
          name: 'Housing', 
          availability: 'single homeless adults',
          age: '',          
        },
        {
          name: 'Free career advisement', 
          availability: '',
          age: '',          
        },
        {
          name: 'Professional classes', 
          availability: 'for immigrant engineers and IT Professionals who are underemployed or unemployed',
          age: '',          
        }
      ],
      contacts: {
        name: '',
        phone: '(718) 287-2600',
        fax: '',
        email: 'info@camba.org',
        hours: '',
        address: '1720 Church Avenue, 2nd Fl. Brooklyn, NY 11226',
        zipCode: '11226',
        language: [],
        website: 'https://camba.org/',
      }
    },

    {
      id: 4,
      name: 'African Services Committee',
      services: [
        {
          name: 'Civil legal services', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
          age: '',          
        },
        {
          name: 'Benefits Assistance and Education', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls',
          age: '',          
        },
        {
          name: 'Housing', 
          availability: 'for HIV/Aids people',
          age: '',       
        },
        {
          name: 'Attorney help', 
          availability: 'for HIV/Aids people, African and Caribbean immigrant women and girls. Some consultations will be subject to a $60 initial consultation fee.',
          age: '',          
        }
      ],
      contacts: {
        name: 'Getachew Fikremariam',
        phone: '(212) 2223882 ext. 108',
        fax: '(212) 2227067',
        email: 'getachewf@africanservices.org',
        hours: 'Monday-Friday, 9am-5pm',
        address: '429 West 127th Street New York, NY 10027',
        zipCode: '10027',
        language: [
          'Haitian Creole',
          'French'
        ],
        website: 'http://africanservices.org/',
      }
    },
  
    {
      id: 5,
      name: 'Cabrini Immigrant Services',
      services: [
        {
          name: 'Legal and social services ', 
          availability: 'immigrants (free initial consultation)',
          age: '',      
        },
        {
          name: 'Scholarships', 
          availability: 'low-income immigrant students who are pursuing higher education',
          age: '',          
        },
        {
          name: 'Food pantry', 
          availability: 'for HIV/Aids clients',
          age: '',          
        },
        {
          name: 'Justice for Immigrants', 
          availability: '',
          age: '',          
        }
      ],
      contacts: {
        name: 'Sr. Kelly Carpenter',
        phone: '(212) 7914590',
        fax: '(212) 7914592',
        email: 'info@cis-nyc.org',
        hours: 'MondayFriday by appointment',
        address: '139 Henry Street New York, NY 10002',
        zipCode: '10002',
        language: [
          'Spanish'
        ],
        website: 'http://cis-nyc.org/',
      }
    },
  
    {
      id: 6,
      name: 'CAMBA',
      services: [
        {
          name: 'Food Pantry', 
          availability: 'need to bring a Photo ID',
          age: '',      
        },
        {
          name: 'Housing', 
          availability: 'single homeless adults',
          age: '',          
        },
        {
          name: 'Free career advisement', 
          availability: '',
          age: '',          
        },
        {
          name: 'Professional classes', 
          availability: 'for immigrant engineers and IT Professionals who are underemployed or unemployed',
          age: '',          
        }
      ],
      contacts: {
        name: '',
        phone: '(718) 287-2600',
        fax: '',
        email: 'info@camba.org',
        hours: '',
        address: '1720 Church Avenue, 2nd Fl. Brooklyn, NY 11226',
        zipCode: '11226',
        language: [],
        website: 'https://camba.org/',
      }
    },

]

const Container = styled.div`
    max-width: 80%;
    margin: auto;
    overflow: hidden;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;

    ${'' /* display: flex; */}
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

const Title  = styled.div`
    font-weight: bold;
    border-bottom: double; 
    margin-bottom: 5px;
    padding-bottom: 5px;
`
const Ul  = styled.div`
    list-style-type: circle;
    text-align: left; 
    padding-left: 20px;
    padding-bottom: 0px;
    margin-bottom: 10px;
    margin-top: 10px;

    p {
        font-size: 1em;
        font-weight: bold;
        padding-bottom: 0px;
        margin-bottom: 0px;
        
    }
`
const CardStyle = styled.div`
    width: auto;
    textAlign: center;
    margin: 10px;
    padding: 0px;
    flexDirection: row;
    ${'' /* display: flex; */}
  
`


const Organization = ({match}) => {

    // let organization = organizations[match.params.id];

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );


      const listData = [];
    for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
    }

    return (
        <Container>
        <List
        itemLayout="vertical"
        size="large"
        pagination={{
            onChange: page => {
            console.log(page);
            },
            pageSize: 3,
        }}
        dataSource={listData}
        footer={
            <div>
            <b>ant design</b> footer part
            </div>
        }
        renderItem={item => (
            <List.Item
            key={item.title}
            actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
            ]}
            extra={
                <img
                width={50}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
            }
            >
            <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
            />
            {item.content}
            </List.Item>
        )}
        />
        </Container>
    )
    
        // <Container>
        //     <h3>Organization {match.params.id}</h3> 
        //     <CardStyle>
        //     <List.Item
        //         key={organization.id}
        //         actions={[
        //         <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        //         <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        //         <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        //         ]}
        //         extra={
        //         <img
        //             width={272}
        //             alt="logo"
        //             src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //         />
        //         }
        //     >
        //         <List.Item.Meta
        //         avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />}
        //         title={<a href='#'>{organization.name}</a>}
        //         description={organization.services.map((service, index) => (
        //                 <li key={index}>{service.name}</li>
        //         ))}
        //         />
        //         {organization.contacts.address}
        //     </List.Item>
            
        //     </CardStyle>

        //         <Card>
        //         <Title>
        //             {organizations[match.params.id].name}
        //         </Title>
        //         <Ul>
        //             <p>Services provided:</p>
        //             {organizations[match.params.id].services.map((service, index) => (
        //                 <li key={index}>{service.name}</li>
        //             ))}
        //         </Ul>
        //             <div>
        //             {/* <Link to={`/category/${organization.id}`}>More</Link> */}
        //                 {/* <a href="/categories/1" >More</a> */}
        //             </div>
        //         </Card>
            
        //     </Container>
       
    // )
}

export default Organization;