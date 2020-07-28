import styled from 'styled-components';

export default styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
  align-items: center;
  width: 100%;

  form{
    display: flex;
    flex-direction: column;
    width: 90%;
    height: auto;

    input {
      height: 2.5rem;
      margin-bottom: 1rem;
      text-indent: .5rem;
      font-size: 1.5rem;
    }

    button{
      font-size: 1.5rem;
    }
  }
`;