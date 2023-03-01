import React, {useState,useEffect,useRef} from "react";

//Components
import StyledPopUpArea from "./Styled/StyledPopUpArea";
import StyledPopUp from "./Styled/StyledPopUp";
import StyledBtnArea from "./Styled/StyledBtnArea";
import StyledCloseBtn from "./Styled/StyledCloseBtn";

const PopUp = ({isVisible,setPopUpVisible,calcWidth}) => {

    const closePopUp = () => {
        setPopUpVisible(!isVisible)
    }

    const ref2 = useRef(null)
    useEffect(() => {
      const handler = (e) => {
        if(!ref2.current.contains(e.target)){
            setPopUpVisible(false)
        }
      }
      document.addEventListener('mousedown', handler)
    }, []); 

    return(
        <StyledPopUp ref={ref2} isVisible={isVisible} calcWidth={calcWidth}>
            <StyledPopUpArea>
                <StyledBtnArea>
                    <StyledCloseBtn onClick={()=>closePopUp()}>Cancel</StyledCloseBtn>
                    <StyledCloseBtn isSave >Save</StyledCloseBtn>
                </StyledBtnArea>
            </StyledPopUpArea>
        </StyledPopUp>
    )
};

export default PopUp;