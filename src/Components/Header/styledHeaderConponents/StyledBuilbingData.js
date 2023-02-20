import styled, {css} from "styled-components";

const StyledBuilbingData = styled.span`
    padding: 0;
    font-size: 17px;
    color: #d4d2d2;
    opacity: .9;
    ${props => props.type==='titleRus' && css `
    font-size: 15px;
    // color: #ababab;
    opacity: .7;
    `};
    ${props => props.type==='address' && css `
    font-size: 15px;
    // color: grey;
    opacity: .5;
    `};
`;

export default StyledBuilbingData;