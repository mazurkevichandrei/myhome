const checkActive = (match, location) => {
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";

}

export default checkActive