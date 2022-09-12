import React, { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
    let [ChangeValue, setChange] = useState("");

    const HandleChange = (e) => {
        setChange(e.target.value);
    };

    useEffect(() => {
        onSearch(ChangeValue);
    }, [ChangeValue]);

    return (
        <div className="row">
            <div className="col-lg-12">
                <input type="text" onChange={HandleChange} />
            </div>
        </div>
    );
};

export default Search;
