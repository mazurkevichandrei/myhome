import React from "react";
import { Link } from "react-router-dom";

//Components
import StyledHeader from "./styledHeaderConponents/StyledHeader";
import StyledLogoArea from "./styledHeaderConponents/StyledLogoArea";
import StyledBuildingInfoArea from "./styledHeaderConponents/StyledBuildingInfoArea";
import StyledBuilbingData from "./styledHeaderConponents/StyledBuilbingData";
import StyledLink from "./styledHeaderConponents/StyledLink";
import StyledMain from "./styledHeaderConponents/StyledMain";

import checkActive from "./checkIsActiveLink"



const Header = ()=>{
return(
    <StyledHeader>
        <StyledMain>
            <StyledLogoArea>
                MH
            </StyledLogoArea>
            <StyledBuildingInfoArea>
                <StyledBuilbingData type='titleEn'>Буэнос-Айрес</StyledBuilbingData>
                {/* <StyledBuilbingData type='titleRus'>Буэнос-Айрес</StyledBuilbingData> */}
                <StyledBuilbingData type='address'>Минск, ул.Игоря Лученка, 27</StyledBuilbingData>
            </StyledBuildingInfoArea>
        </StyledMain>
        <StyledMain isNavi>
            <StyledLink to='/'>House</StyledLink>
            |
            <StyledLink to='/admin'>Admin</StyledLink>
        </StyledMain>

    </StyledHeader>
)
}

export default Header;