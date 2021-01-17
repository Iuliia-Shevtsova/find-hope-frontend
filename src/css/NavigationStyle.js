import styled from 'styled-components';

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 120;
  width: 100%;
  top: 0; 
  background: rgb(0, 50, 78);
  ${'' /* background: ${props => props.theme.background}; */}

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  ul {
    margin: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
  }

  .logo {
    color: rgb(248, 230, 180);
    padding: 0.25rem 0;
    display: inline-block;
  }

  a:not(.btn):not(.logo) {
    color: rgb(248, 230, 180);
    font-weight: bold;
    padding: 0.45rem;
    margin: auto 0.25rem;
    display: inline-block;
  }

  a:hover:not(.btn):not(.logo) {
    color: rgb(5, 14, 56);
  }
`;

export default NavigationStyle;