import styled from 'styled-components';

export default styled.div`

  display: flex;
  margin: .5rem 0;
  background-color: ${props => props.theme.colors.primary};
  height: 5rem;
  width: 90%;
  margin-left: 5%;
  padding: 1rem;
  flex-direction: column;
  border-radius: .5rem;

  .nome {
    font-weight: bold;
  }

`;