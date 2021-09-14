import React from 'react';
import { CountProps } from '../types/PropsTypes';
import { StyledDiv } from '../styles/StyledComponents';

export const Count: React.FC<CountProps> = ({ elementCount }) => {
    return (
        <React.Fragment>
            <StyledDiv className="count" size="12" weight="500">Count {elementCount}</StyledDiv>
        </React.Fragment>
    )
}