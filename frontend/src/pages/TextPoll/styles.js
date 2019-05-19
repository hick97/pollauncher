import styled from 'styled-components';

export const QuestionContainer = styled.div`
  margin-top: 60px;
  width: 100%;
  min-height: 267px;
  display: flex;
  align-items: center;
  justify-content: center;

  .form-container {
    background: #fff;
    max-width: 1105px;
    height: auto;
    padding: 40px;
    border-radius: 5px;

    input[type='text'] {
      border: none;
      border-bottom: 2px solid #dddddd;
      margin-bottom: 30px;
      padding: 6px;
      color: #111;
      width: 100%;
      font-size: 25px;
      height: 46px;
      background: none;
      ::placeholder {
        color: #9d9595;
        font-size: 25px;
      }

      &:nth-child(1) {
        font-size: 36px !important;
        ::placeholder {
          font-size: 36px !important;
        }

        &:hover {
          border-bottom: 2px solid #380a6a;
        }
      }
    }
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    button {
      margin-top: 64px;
      border: none;
      max-width: 474px;
      background-color: #380a6a;
      font-size: 25px;
      padding: 15px 80px;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        background-color: #2d0756;
      }
    }
    a {
      margin-top: 10px;
      color: #ffffff !important;
    }
  }
`;
