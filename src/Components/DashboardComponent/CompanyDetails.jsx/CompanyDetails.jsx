import './CompanyDetails.css'

const CompanyDetails = () =>
    <>
        <div >
            <h1 className='companyName'>Reliance Private Ltd.</h1>
            <p>
                NSE:
                &nbsp;
                <span className='nseBseValue'>TELECOM </span>
                &nbsp;&nbsp;&nbsp;
                BSE:
                &nbsp;
                <span className='nseBseValue'>500315</span>
            </p>
        </div>
        <div className='stockPriceContainer'>
            <div className='stockPrice'>
                ^142.35
            </div>
            <div>
                +1.65(1.17%)<br />
                <span style={{ fontSize: "12px" }}>&nbsp;NSE: Today 3:31PM</span>
            </div>
        </div>
    </>

export default CompanyDetails;