
import Welcome from "./Welcome";
import HyperLinks from "./HyperLinks";
import CompanyLogo from "./CompanyLogo";
import CompanyLogoImage from "../../assets/images/company-logo.png";
import {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";

const TopMenuContainer = () => {

    const username = useContext(UserContext);

    return <div className="flex justify-between border border-green-500 p-2 absolute w-full top-0">
        <CompanyLogo img={CompanyLogoImage} />
        <HyperLinks />
        <Welcome currentUser={username} />
    </div>
}

export default TopMenuContainer;