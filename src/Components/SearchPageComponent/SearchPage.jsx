import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router-dom"
import Autocomplete from '@material-ui/lab/Autocomplete';
import LogOut from '../LogoutComponent/LogOut';
import background from "../../Utilities/Images/SearchBg.jpg";
import Navbar from '../NavbarComponent/navbar';

const SearchPage = () => {

    const navigate = useNavigate();
    const [myOptions, setMyOptions] = useState(['Reliance', 'TataMotor', 'Bajaj ltd', 'HDFC'])
    const [nav, setNav] = useState(0)
    const getDataFromAPI = () => {
        setNav(nav + 1)
        fetch("https://api.randomuser.me/?nat=US&results=5").then((response) => {
            return response.json()
        }).then((res) => {
            for (var i = 0; i < res.results.length; i++) {
                myOptions.push(res.results[i].email)
            }
            setMyOptions(myOptions)
        })
        if (nav > 1) {
            navigate('/Dashboard');
        }
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
                        autoComplete
                        autoHighlight
                        options={myOptions}
                        renderInput={(params) => (
                            <>
                                <TextField {...params}
                                    onChange={getDataFromAPI}
                                    variant="outlined"
                                    label="Search Box"
                                />
                                <p style={{color: 'grey'}}>Please type atleast 3 characters</p>
                            </>

                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default SearchPage