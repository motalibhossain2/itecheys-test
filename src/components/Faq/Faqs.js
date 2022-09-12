import React, { useState } from 'react'

const Faqs = (props) => {
    const { id, name, desc } = props.item
    const [ toggle, setToggle ] = useState(false)
    return (
        <article>
            <div className="row">
                <div className="col-lg-9">
                    <h4 key={id}>{name}</h4>
                    {toggle && <p>{desc}</p>}
                </div>
                <div className="col-lg-3">
                    <button onClick={() => { setToggle(!toggle); }}>
                        {toggle ? "-" : "+"}
                    </button>
                </div>
            </div>
        </article >
    )
}

export default Faqs