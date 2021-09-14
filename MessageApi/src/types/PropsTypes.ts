import { Priority } from '../Api'; 

export interface PriorityContainerProps {
    Color?: string;
    Title?: string;
    Priority: Priority;
}

export interface StyledCardProps {
    Color?: string;
}

export interface StyledDivProps {
    size?: string;
    weight?: string;
    flexDirection?: string;
    cursor?: string;
}

export interface CountProps {
    elementCount: number;
}


export interface StyledSpanProps extends StyledDivProps {}



