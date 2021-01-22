import React from 'react';
import { Link } from 'react-router-dom';
// import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import FormFill from './Form'

// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';


const imgUrl = require('../images/state_19_12_cut.jpg').default;

const Background = styled.section`
    position: relative;
    background: url(${ props => props.imgUrl });
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const PageText = styled.div`
    color: rgb(0, 32, 51);
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const PageName = styled.h1`
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
`;

const PageDescription = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    width: 80%;
`;


const Landing = () => {
  
    return (        
        <Background imgUrl={imgUrl}>
            <Overlay>
            <PageText>
                <PageName>NY Doors</PageName>
                <PageDescription>
                To find organizations that match your needs, including your age, language and location 
                fill the FORM below.
                </PageDescription>
                <div>
                <FormFill/>
                </div>
            </PageText>
            </Overlay>
        </Background>
    );
};
  
// Landing.propTypes = {
// };

export default Landing;