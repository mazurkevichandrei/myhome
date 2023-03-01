import styled,{css} from "styled-components";

const StyledPopUp = styled.div`
    // z-index: 0;
    box-sizing: border-box;
    display: none;
    flex-direction: row;
    align-items: stretch;
    padding: 0 10px;
    opacity: 0;
    position: absolute;
    height: 350px;
    width: 100%;
    left: 50%;
    transform: translate(-50%);
    ${props => props.isVisible && css `
    display: flex;
    opacity: 1;
    `};
    transition: all .5s linear;
`;

export default StyledPopUp;