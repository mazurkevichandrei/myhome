import React, {useState, useRef, useEffect} from "react";

//Components
import StyledPageCommon from "../StyledCommon/StyledPageContainer";
import StyledAddHouseBtn from "./Styled/StyledAddHouseBtn";
import PopUp from "../PopUp/PopUp";

const Admin = () => {
    const [popUpVisible, setPopUpVisible] = useState(false)

    let btnName = ''
    const isHouseExist = 0

    isHouseExist === 0 ? btnName='CREATE HOUSE' : btnName='EDIT HOUSE';

    const createHouse = (e) => {
        console.log('Create')
        setPopUpVisible(!popUpVisible)      
    }

    const editHouse = () => {
        console.log('Edit')
    }

    const createBtnAction = isHouseExist === 0 ? createHouse : editHouse


    const ref1 = useRef(null);
    const [calcWidth, setCalcWidth] = useState(0)
    useEffect(() => {
        setCalcWidth(ref1.current.offsetWidth)
        console.log(11)
      }, [window.innerWidth]);

    return(
        <StyledPageCommon>
            <PopUp isVisible={popUpVisible} setPopUpVisible={setPopUpVisible} calcWidth={calcWidth}  />
            <StyledAddHouseBtn ref={ref1} onClick={()=>createBtnAction()}>{`${btnName}`}</StyledAddHouseBtn>
        </StyledPageCommon>
        
    )
}

export default Admin;