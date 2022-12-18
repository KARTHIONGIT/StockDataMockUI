import './StartRating.css';


const StarRating = () =>

    <div className="starRating">
        <div className='starIconContainer'>
            <h1>FinStar</h1>
            <div className='starIcon'>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        className="clickedstar" points="12,0 5,25 25,10 0,10 20,25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        className="clickedstar" points="12,0 5,25 25,10 0,10 20,25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        className="clickedstar" points="12,0 5,25 25,10 0,10 20,25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        className="null" points="12,0 5,25 25,10 0,10 20,25" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        className="null" points="12,0 5,25 25,10 0,10 20,25" />
                </svg>
            </div>
            <br />
            3.0(90)
        </div>
        <div className='starRatingCategoryContainer'>
            <div>
                <div className='categoryRating'>
                    <div className='stabilityRating'>Stable</div>
                    <p className='categoryRatingTitle'>Ownership &nbsp;&nbsp; 3.0(90)</p>
                </div>
                <div className='categoryRating'>
                    <div className='stabilityRating'>Stable</div>
                    <p className='categoryRatingTitle'>Efficiency &nbsp;&nbsp; 3.0(90)</p>
                </div>
            </div>
            <div>
                <div className='categoryRating'>
                    <div className='stabilityRating'>Stable</div>
                    <p className='categoryRatingTitle'>Valuation &nbsp;&nbsp; 3.0(90)</p>
                </div>
                <div className='categoryRating'>
                    <div className='stabilityRating'>Stable</div>
                    <p className='categoryRatingTitle'>Financials &nbsp;&nbsp; 3.0(90)</p>
                </div>
            </div>
        </div>
    </div>


export default StarRating;