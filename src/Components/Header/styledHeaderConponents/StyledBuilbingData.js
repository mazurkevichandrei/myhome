import styled, {css} from "styled-components";

const StyledBuilbingData = styled.span`
    padding: 0;
    font-size: 17px;
    color: #d4d2d2;
    ${props => props.type==='titleRus' && css `
    font-size: 15px;
    color: #ababab;
    `};
    ${props => props.type==='address' && css `
    font-size: 15px;
    color: grey;
    `};
`;

export default StyledBuilbingData;