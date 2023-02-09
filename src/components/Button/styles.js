import styled from "styled-components";

export const ButtonContainer = styled.button`
  user-select: none;
  padding: 20px;
  border: 0;
  font-family: "Poppins", sans-serif !important;
  background-color: #ef4226;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  flex: 1;
  margin: 4px 4px;
  border-radius: 8px;

  &:hover {
    background-color: #ef422690;
    transition: 0.2s;
  }
`;
