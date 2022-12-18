import { useNavigate } from "react-router-dom";

import Navbar from "../NavbarComponent/navbar";
import CompanyDetails from "./CompanyDetails.jsx/CompanyDetails";
import TodaysDetails from "./TodaysDetailsComponent/TodaysDetails";
import Swot from "./SwotComponent/Swot";
import StarRating from "./StarRatingComponent/StarRating";
import Essentials from "./EssentialsComponent/Essentials";
import './Dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const onClickChange = () => {
        navigate('/Search')
    }
    return (
        <div>
            <Navbar />
            <div className='dashboardContents'>
                <br />
                <button onClick={onClickChange}>Back</button>
                <div className="companyDetails">
                    <CompanyDetails />
                </div>
                <TodaysDetails />
                <div className='swotStarEssentials'>
                    <div>
                        <Swot />
                        <StarRating />
                    </div>
                    <div>
                        <Essentials />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dashboard