import React, { useState } from 'react'
// import { Data } from '../data'

import Faqs from './Faqs'

const Data = [
    {
        "id": "1",
        "name": "Motalib Hossain",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste hic inventore quo corporis earum tempore perferendis minima dolor excepturi, quisquam, veritatis rerum officiis libero amet voluptatibus aliquam quas? Doloremque!",
        "address": "dhaka",
    },
    {
        "id": "2",
        "name": "Rahmin Hossain",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste hic inventore quo corporis earum tempore perferendis minima dolor excepturi, quisquam, veritatis rerum officiis libero amet voluptatibus aliquam quas? Doloremque!",
        "address": "rajshahi",
    },
    {
        "id": "3",
        "name": "Hossain",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iste hic inventore quo corporis earum tempore perferendis minima dolor excepturi, quisquam, veritatis rerum officiis libero amet voluptatibus aliquam quas? Doloremque!",
        "address": "dhaka",
    },

];
const MainFaq = () => {
    const [faqs] = useState(Data)
    console.log("data", faqs)
    return (
        <main>
            <section>
                <h1>FAQ</h1>
                {faqs.map((item) => (
                    <Faqs key={item.id} item={item}/>
                ))}
            </section>
        </main>
    )
}

export default MainFaq