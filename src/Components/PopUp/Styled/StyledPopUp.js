import styled,{css} from "styled-components";

const StyledPopUp = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    opacity: 0;
    border: 2px solid orange;
    position: absolute;
    height: 150px;
    // width: ${window.innerWidth-20}px;
    // ${props => props.calcWidth && css`
    // width: ${props.calcWidth}px;
    // `}
    // top: 50px;
    width: 100%;
    // margin-left: 10px;
    // margin-right: 10px;
    box-sizing: border-box;
    background: #efefef;
    left: 50%;
    transform: translate(-50%);
    border-radius: 10px;
    ${props => props.isVisible && css `
    opacity: 1;
    `};
    transition: all .3s linear;
`;

export default StyledPopUp;