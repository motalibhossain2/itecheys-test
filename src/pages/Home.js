import React from 'react'
// import About from './components/about'
// import Tasks from './components/Tasks';
// import Todo from './components/Todo'
import Counter from "../components/Counter";
import Maintodo from "../components/App_ToDo/Maintodo";
import MainFaq from "../components/Faq/MainFaq";
import MainDataFetch from "../components/Data_Fetch_From_API/MainDataFetch";
import MainCountry from "../components/Country/MainCountry";


const Home = () => {
    return (
        <>
            <div className="container">
                <MainCountry />
                <hr />
                <MainDataFetch />
                <hr />
                <MainFaq />
                <hr />
                <Maintodo />
                <hr />
                {/* <Todo /> */}
                <Counter />
                <hr />
                {/* <About /> */}
                {/* <Tasks tasks={tasks} ondelate={deleteTask}></Tasks> */}
            </div>
        </>
    )
}

export default Home