import './Swot.css';

const Swot = () =>
    <div className="swot">
        <div className='swotCard swotStrength'>
            <div className='swotCardData'>
                <h1 className='swotRatingScore'>&nbsp;&nbsp;8&nbsp;</h1>
                <h4>Strengths</h4>
                <p className='swotDescription'>
                    Strong annual EPS growth property.
                </p>
            </div>
        </div>
        <div className='swotCard swotWeakness'>
            <div className='swotCardData'>
                <h1 className='swotRatingScore'>&nbsp;&nbsp;9&nbsp;</h1>
                <h4>Weaknesses</h4>
                <p className='swotDescription'>
                    RedFlag: High interest rates compared to earnings
                </p>
            </div>
        </div>
        <div className='swotCard swotOppurtunities'>
            <div className='swotCardData'>
                <h1 className='swotRatingScore'>&nbsp;&nbsp;3&nbsp;</h1>
                <h4>Oppurtunuties</h4>
                <p className='swotDescription'>
                    Strong annual EPS growth property.
                </p>
            </div>
        </div>
        <div className='swotCard swotThreat'>
            <div className='swotCardData'>
                <h1 className='swotRatingScore'>&nbsp;&nbsp;0&nbsp;</h1>
                <h4>Threats</h4>
                <p className='swotDescription'>
                    No threats
                </p>
            </div>
        </div>
    </div>


export default Swot;