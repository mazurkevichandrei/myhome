import React, {useState,useEffect,useRef} from "react";

//Components
import StyledPopUpArea from "./Styled/StyledPopUpArea";
import StyledPopUp from "./Styled/StyledPopUp";
import StyledBtnArea from "./Styled/StyledBtnArea";
import StyledCloseBtn from "./Styled/StyledCloseBtn";
import StyledLable from "./Styled/StyledLable";
import StyledInput from "./Styled/StyledInput";

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
                <StyledLable>House name Ru</StyledLable>
                <StyledInput></StyledInput>
                <StyledLable>House name En</StyledLable>
                <StyledInput></StyledInput>
                <StyledLable>Address</StyledLable>
                <StyledInput></StyledInput>
                <StyledLable>Floors count</StyledLable>
                <StyledInput></StyledInput>
                <StyledLable>First floor flats count</StyledLable>
                <StyledInput></StyledInput>
                <StyledLable>Flats per floor</StyledLable>
                <StyledInput></StyledInput>
                <StyledBtnArea>
                    <StyledCloseBtn onClick={()=>closePopUp()}>Cancel</StyledCloseBtn>
                    <StyledCloseBtn isSave >Save</StyledCloseBtn>
                </StyledBtnArea>
            </StyledPopUpArea>
        </StyledPopUp>
    )
};

export default PopUp;