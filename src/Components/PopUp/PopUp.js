import React, {useState,useEffect,useRef} from "react";

//Components
import StyledPopUp from "./Styled/StyledPopUp";
import StyledCloseBtn from "./Styled/StyledCloswBtn";

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
            <StyledCloseBtn onClick={()=>closePopUp()}>Cancel</StyledCloseBtn>
        </StyledPopUp>
    )
};

export default PopUp;