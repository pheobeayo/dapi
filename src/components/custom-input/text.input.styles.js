import styled from "styled-components";

export const FormLabel = styled.label`
  color: #ffffff;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1rem;
  margin-top: 2rem;
`;

export const FormControl = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "79%")};
  border: 1px solid #6A6A6A;
  border-radius: 5px;
  height: ${(props) => (props.width ? props.width : "15%")};
  padding: 0 1rem;
  background: #6A6A6A;
  margin-top: 1rem;

  & .form-input {
    border: 0;
    outline: none;
    flex: 1;
    background: #6A6A6A;
    color: #FFA500;
    font-size: 1rem;
  }

  & .form-input::placeholder {
    color: #FFA500;
    line-height: 20px;
    font-size: 0.8rem;
  }

`;