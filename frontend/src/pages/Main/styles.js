import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  min-width: 415px;
  min-height: 290px;
  padding: 40px;
  border-radius: 3px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .css-1pcexqc-container,
  .css-bg1rzq-control,
  .css-1hwfws3 {
    height: 50px;
  }
  .css-1szy77t-control {
    .css-dvua67-singleValue {
      top: 120%;
    }
  }

  input {
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 18px;
    padding: 0 30px;
    margin-top: 30px;
    margin-bottom: 15px;
  }
  button {
    height: 50px;
    background: #7159c1;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 30px;
    margin-top: 20px;
    color: #fff;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    &:hover {
      background: #6647d0;
    }
  }
`;
