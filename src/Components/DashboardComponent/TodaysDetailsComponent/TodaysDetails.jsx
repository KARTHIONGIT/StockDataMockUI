import './TodaysDetails.css';

const TodaysDetails = () =>

    <div className="todaysDetails">
        <div className='moneyCard'>
            <div className='moneyCardContents'>
                <div className='highLowIcons'>
                    <img
                        className='moneyCardStockIcons'
                        src='https://static.thenounproject.com/png/136700-200.png'
                        alt='todaysHigh'
                        width="38"
                        height="38"
                    />
                </div>
                <div className='moneyCardPriceData'>
                    Today's High
                    <h2 className='moneyCardPrice'>&#x20b9;123</h2>
                </div>
            </div>
        </div>
        <div className='moneyCard'>
            <div className='moneyCardContents'>
                <div className='highLowIcons rotate'>
                    <img
                        className='moneyCardStockIcons'
                        src='https://static.thenounproject.com/png/136700-200.png'
                        alt='todaysLow'
                        width="38"
                        height="38"
                    />
                </div>
                <div className='moneyCardPriceData'>
                    Today's Low
                    <h2 className='moneyCardPrice'>&#x20b9;1236.999</h2>
                </div>
            </div>
        </div>
        <div className='moneyCard'>
            <div className='moneyCardContents'>
                <div className='highLowIcons'>
                    <img
                        className='moneyCardStockIcons'
                        src='https://static.thenounproject.com/png/1359502-200.png'
                        alt='52weeksHigh'
                        width="35"
                        height="35"
                    />
                </div>
                <div className='moneyCardPriceData'>
                    52 Week High
                    <h2 className='moneyCardPrice'>&#x20b9;123</h2>
                </div>
            </div>
        </div>
        <div className='moneyCard'>
            <div className='moneyCardContents'>
                <div className='highLowIcons rotate'>
                    <img
                        className='moneyCardStockIcons'
                        src='https://static.thenounproject.com/png/1359502-200.png'
                        alt='52weeksLow'
                        width="35"
                        height="35"
                    />
                </div>
                <div className='moneyCardPriceData'>
                    52 Week Low
                    <h2 className='moneyCardPrice'>&#x20b9;123</h2>
                </div>
            </div>
        </div>
    </div>


export default TodaysDetails;