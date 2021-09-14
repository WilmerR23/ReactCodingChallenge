
import styled from 'styled-components';
import { StyledCardProps, StyledDivProps, StyledSpanProps } from '../types/PropsTypes';

export const StyledCard = styled.div`
    display: flex;
    margin: 5px 0 5px 0;  
    padding: 15px 15px;
    min-height: 45px;
    box-shadow: 0.5px 0.5px 2px black;
    background-color: ${(props: StyledCardProps)=> props.Color ? props.Color :"#ffffff" };
`;

export const StyledDiv = styled.div.attrs((props: StyledDivProps) => props)`
    font-size: ${(props) => props.size ? props.size : "16"}px;
    font-weight: ${(props) => props.weight ? props.weight : "400"};
    align-self: ${(props) => props.flexDirection ? props.flexDirection : "auto"};
`;

export const StyledSpan = styled.span.attrs((props: StyledSpanProps) => props)`
    cursor: ${(props) => props.cursor ? props.cursor : "auto"};
`;

export const StyledButton = styled.button`
  background-color: #88FCA3;
  font-color: #FFFFFF;
  font-weight: 700;
  width: 70px;
  margin: 5px;
  padding: 5px;
  box-shadow: 0.5px 0.5px;
  border-radius: 2px;
  border: 1px solid #88FCA3;
  cursor: pointer;
  `;