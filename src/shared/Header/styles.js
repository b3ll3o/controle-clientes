import styled from 'styled-components';

export default styled.div`

  display: flex;
  width: 100%;
  height: 10%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};

  a{
    font-size: 2rem;
    text-decoration: none;
    color: black;
  }
`;