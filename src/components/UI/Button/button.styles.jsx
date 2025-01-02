import styled from "styled-components";

export const BasicButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
`;

export const BigButton = styled(BasicButton)`
  font-size: 24px;
  padding: 15px 30px;
`;

export const SmallButton = styled(BasicButton)`
  font-size: 12px;
  padding: 5px 10px;
`;
