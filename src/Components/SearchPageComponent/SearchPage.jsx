import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { useNavigate, createSearchParams } from "react-router-dom"
import Autocomplete from '@material-ui/lab/Autocomplete';
import background from "../../Utilities/Images/SearchBg.jpg";
import Navbar from '../NavbarComponent/navbar';
import './SearchPage.css';

const SearchPage = () => {
    const navigate = useNavigate();
    const [showTrending, setShowTrending] = useState(true);
    const myOptions = ['Reliance', 'Tata Motors', 'Indalco', 'HDFC', 'Dalmia', 'ICICI', 'IBM', 'Sun Pharma'];
    const getDataFromAPI = (e) => {
        setShowTrending(false);
        navigate({
            pathname: '/Dashboard',
        })

    }
    return (
        <div>
            <Navbar />
            <div style={{ backgroundImage: `url(${background})`, height: '450px', weight: '400px' }} >
                <div style={{ marginLeft: '40%', marginTop: '100px' }} className="searchBar">
                    <h2 id='header'>Investing Search Engine</h2>
                    <h4 id='desc'>The Modern Stock Screener shows you the better stock</h4>
                    <Autocomplete
                        style={{ width: 500 }}
                        freeSolo
                        onChange={(e) => getDataFromAPI(e)}
                        autoComplete
                        autoHighlight
                        options={myOptions}
                        renderInput={(params) => (
                            <>
                                <TextField {...params}
                                    variant="outlined"
                                    onChange={(e) => { setShowTrending(false); }}
                                    label="Please type atleast 3 characters"
                                />
                                <br />
                                <br />
                                <br />
                                {showTrending && (
                                    <div className="todaysDetails">
                                        <div className='moneyCard'>
                                            <div className='moneyCardContents' style={{ justifyContent: 'space-between' }}>
                                                <div className='moneyCardPriceData'>
                                                    <img
                                                        className='litIcon'
                                                        src='https://moritzfirelab.files.wordpress.com/2018/10/flame.png'
                                                        alt='todaysHigh'
                                                        width="22"
                                                        height="22"
                                                    />
                                                </div>
                                                <div className='moneyCardPriceData' style={{ color: 'green' }}>
                                                    Reliance
                                                    <h4 className='moneyCardPrice'>&#x20b9;345.34</h4>
                                                </div>
                                                <div className='moneyCardPriceData' style={{ color: 'green', marginLeft: '30px' }}>
                                                    HDFC
                                                    <h4 className='moneyCardPrice'>&#x20b9;154.22</h4>
                                                </div>
                                                <div className='moneyCardPriceData' style={{ color: 'red', marginLeft: '30px' }}>
                                                    Tata Motors
                                                    <h4 className='moneyCardPrice'>&#x20b9;700.54</h4>
                                                </div>
                                                <div className='moneyCardPriceData' style={{ color: 'green', marginLeft: '30px' }}>
                                                    Dalmia
                                                    <h4 className='moneyCardPrice'>&#x20b9;109.22</h4>
                                                </div>
                                                <div className='moneyCardPriceData' style={{ color: 'red', marginLeft: '30px' }}>
                                                    Indalco
                                                    <h4 className='moneyCardPrice'>&#x20b9;88.34</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </>

                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchPage