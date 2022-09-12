import React from 'react'

function Todo() {
    return (
        <div>
            <form action="">
                <div className='mb-1 mt-5'>
                    <input type="text" value="" placeholder='Name' />
                </div>
                <div className='mb-1'>
                    <input type="email" value="" placeholder='Email' />
                </div>
                <div className='mb-1'>
                    <input type="password" value="" placeholder='password' />
                </div>
                <input type="submit" value="Submit"  className='mb-5'/>
            </form>
        </div>
    )
}

export default Todo