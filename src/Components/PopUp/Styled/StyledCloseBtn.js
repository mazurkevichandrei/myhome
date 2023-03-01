import styled, {css} from "styled-components";

const StyledCloseBtn = styled.button`
    display: flex;
    width: 100%;
    border-radius: 10px 0 0 10px;
    padding: 10px;
    box-sizing: border-box;
    align-self: flex-end;
    // background: #c7c7c7;
    background: rgb(252, 186, 86);
    justify-content: center;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    border: none;
    font-size: 16px;
    ${props => props.isSave && css `
    background: rgb(163, 198, 68);
    border-radius: 0 10px 10px 0;
    `};
`;

export default StyledCloseBtn;