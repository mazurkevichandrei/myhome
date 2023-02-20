import React from "react";
import StyledHeader from "./styledHeaderConponents/StyledHeader";
import StyledLogoArea from "./styledHeaderConponents/StyledLogoArea";
import StyledBuildingInfoArea from "./styledHeaderConponents/StyledBuildingInfoArea";
import StyledBuilbingData from "./styledHeaderConponents/StyledBuilbingData";

const Header = ()=>{
return(
    <StyledHeader>
        <StyledLogoArea>
            MH
        </StyledLogoArea>
        <StyledBuildingInfoArea>
            <StyledBuilbingData type='titleEn'>Buenos-Aires</StyledBuilbingData>
            <StyledBuilbingData type='titleRus'>Буэнос-Айрес</StyledBuilbingData>
            <StyledBuilbingData type='address'>Минск, ул.Игоря Лученка, 27</StyledBuilbingData>
        </StyledBuildingInfoArea>
    </StyledHeader>
)
}

export default Header;