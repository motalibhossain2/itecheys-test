import React, { useState, useEffect } from "react";
// import Search from "./Search";

const MainCountry = () => {
    const [countrys, setCountry] = useState([]);

    const CountryFetch = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setCountry(data);
    };

    useEffect(() => {
        CountryFetch("https://restcountries.com/v3.1/all");
    }, []);
    // Remove country

    const RemoveCountry = (clickIndex) => {
        setCountry((preCountry) => {
            const filterCountry = preCountry.filter((i, ItemIndex) => ItemIndex !== clickIndex);
            return filterCountry;
        });
    };

    // Search country
    // const SearchCountry = (searchValue) => {
    //     let value = searchValue.toLowerCase();
    //     console.log(searchValue);
    //     const CountrySearch = countrys.filter((country) => {
    //         const CountryName = country.name.common.toLowerCase();
    //         return CountryName.startsWith(value);
    //     });
    //     setCountry(CountrySearch);
    // };
    // console.log("All FilterCountry", allfilterCountry);
    // console.log("All Country", countrys);

    return (
        <div className="row mt-2">
            <div className="col-lg-12 text-center">
                <h1>Total Country={countrys.length}</h1>
            </div>
            {/* <Search onSearch={SearchCountry} /> */}
            {countrys.map((country, index) => {
                if (index <= 3) {
                    return (
                        <div className="col-lg-3" key={index}>
                            <div className="card p-3 mb-3">
                                <div className="image-box text-center">
                                    <img src={country.flags.png} alt="" width="60" height="40" />
                                </div>
                                <div className="content">
                                    <div className="details text-center">
                                        <h2>{index + 1}</h2>
                                        <h2>{country.name.common}</h2>
                                        <div className="data">
                                            <h5>
                                                {country.population}-<span>Population</span>
                                            </h5>
                                            <h5>
                                                {country.capital}-<span>Capital</span>
                                            </h5>
                                            <h5>
                                                {country.area}-<span>Area</span>
                                            </h5>
                                        </div>
                                        <div className="action-buttons">
                                            <button
                                                className="btn btn-primary me-2"
                                                onClick={() => RemoveCountry(index)}
                                            >
                                                Remove Country
                                            </button>
                                            {/* <button>Message</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                return null
            })}
        
        </div>
    )
};

export default MainCountry;
