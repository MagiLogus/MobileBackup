import styled from "styled-components";

export const BtnStyle = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: ${props => props.cor || '#007bff'}; 
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const TextBtn = styled.Text`
  color: ${props => props.corTexto || '#ffffff'}; 
`;