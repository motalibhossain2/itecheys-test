import React from 'react'

import Data from './data.js'

const About = () => {
    console.log(Data)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                     {Data.map((data, key) => (
                        <tr key={key}>
                            <td >{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.phone}</td>
                            <td>{data.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default About