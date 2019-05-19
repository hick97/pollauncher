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
    min-width: 900px;
    height: auto;
    padding: 40px;
    border-radius: 5px;
    .form-check-label {
      margin-left: 5px;
      color: #111;
      width: 100%;
      font-size: 25px;
    }
    .option-container {
      margin-bottom: 15px;
      label {
        font-size: 25px;
        input {
          margin-right: 5px;
        }
      }
      .parcial-result {
        margin-top: 5px;
        i {
          margin-right: 5px;
        }
      }
    }

    input[type='text'] {
      border: none;
      border-bottom: 2px solid #380a6a;
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
        font-size: 25px !important;
        ::placeholder {
          font-size: 36px !important;
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
    h5 {
      margin-top: 10px;
    }
  }
`;
