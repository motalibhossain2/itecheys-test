import React, { useState, useEffect } from 'react'

const MainDataFetch = () => {
    const [data, setData] = useState([])
    const DataFetch = () => {
        useEffect(() => {
            const getApiData = async () => {
                const response = await fetch("https://api.github.com/users")
                const data = await response.json()
                return data
            }
            const showData = () => {
                getApiData()
                    .then((data) => {
                        setData(data)
                    })
            }
            showData()
        }, [])
    };
    DataFetch()
    console.log("This is our API fetch data", data)
    // load more 
    let [sum, setSum]=useState(3)
    const LoadMore=()=>{
        sum=sum+6
        setSum(sum)
    }
    // useEffect(()=>{
    //     LoadMore()
    // },[])
    console.log("total sum",sum)

    return (
        <div className="row">
            <div className="col-lg-12">
                <h1>API data fetch</h1>
            </div>
            {
                data.map((Item,index) => {
                    if(index<sum){
                        return (
                            <div className="col-lg-4" key={Item.id}>
                                <div className="Profile">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div>
                                                <img className="w-100 h-100 p-1"
                                                    src={Item.avatar_url}
                                                    alt="User Profile" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8">
                                            <h3>{Item.login}-{index}</h3>
                                            <a href={Item.url}>Github Link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null
                })
            }
            <div className="col-lg-12">
                <button onClick={LoadMore} className='btn btn-primary' disabled={sum === 27 ? true : false}>Load More ...</button>
            </div>
        </div>
    )
};

export default MainDataFetch