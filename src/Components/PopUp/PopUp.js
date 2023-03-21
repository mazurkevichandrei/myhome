import React, {useState,useEffect,useRef} from "react";

//Components
import StyledPopUpArea from "./Styled/StyledPopUpArea";
import StyledPopUp from "./Styled/StyledPopUp";
import StyledBtnArea from "./Styled/StyledBtnArea";
import StyledCloseBtn from "./Styled/StyledCloseBtn";
import StyledLable from "./Styled/StyledLable";
import StyledInput from "./Styled/StyledInput";

const PopUp = ({isVisible,setPopUpVisible,calcWidth}) => {

    //Pop Up Open Close rules START:
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
    //Pop Up Open Close rules END:

    //Change input values START:
    const [homeNameRu, setHomeNameRu] = useState('')
    const [homeNameEn, setHomeNameEn] = useState('')
    const [address, setAddress] = useState('')
    const [floorsCount, setFloorsCount] = useState('')
    const [firstFloorsFlats, setFirstFloorsFlats] = useState('')
    const [flatsPerFloor, setFlatsPerFloor] = useState('')
    //Change input values END:
    
    //Generate House Data START:
    const calcHouseData = () => {
        const houseData = {
            nameRu: homeNameRu,
            homeNameEn: homeNameEn,
            homeAddress: address,
            houseFloorsCount: floorsCount,
            firstFloor: firstFloorsFlats,
            flatsOnFloor: flatsPerFloor
        }
        console.log(houseData)
    }
    //Generate House Data END:

    return(
        <StyledPopUp ref={ref2} isVisible={isVisible} calcWidth={calcWidth}>
            <StyledPopUpArea>
                <StyledLable>House name Ru</StyledLable>
                <StyledInput onChange={(e)=>{setHomeNameRu(e.target.value)}}></StyledInput>
                <StyledLable>House name En</StyledLable>
                <StyledInput onChange={(e)=>{setHomeNameEn(e.target.value)}}></StyledInput>
                <StyledLable>Address</StyledLable>
                <StyledInput onChange={(e)=>{setAddress(e.target.value)}}></StyledInput>
                <StyledLable>Floors count</StyledLable>
                <StyledInput onChange={(e)=>{setFloorsCount(e.target.value)}}></StyledInput>
                <StyledLable>First floor flats count</StyledLable>
                <StyledInput onChange={(e)=>{setFirstFloorsFlats(e.target.value)}}></StyledInput>
                <StyledLable>Flats per floor</StyledLable>
                <StyledInput onChange={(e)=>{setFlatsPerFloor(e.target.value)}}></StyledInput>
                <StyledBtnArea>
                    <StyledCloseBtn onClick={()=>closePopUp()}>Cancel</StyledCloseBtn>
                    <StyledCloseBtn isSave onClick={calcHouseData} >Save</StyledCloseBtn>
                </StyledBtnArea>
            </StyledPopUpArea>
        </StyledPopUp>
    )
};

export default PopUp;