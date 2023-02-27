import styled, {css} from "styled-components";

const StyledMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(115, 121, 133, 0.2);
    -moz-box-shadow: 0px 5px 10px 0px rgba(115, 121, 133, 0.2);
    box-shadow: 0px 5px 10px 0px rgba(115, 121, 133, 0.2);
    ${props => props.isNavi && css `
    font-size: 15px;
    justify-content: center;
    justify-content: space-around;
    color: #595959;
    padding: 10px 40px;
    `};

`;

export default StyledMain;