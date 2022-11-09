import './App.css';
import React, {useState} from "react";
import Form from "./components/Form/Form";
import Blocks from "./components/Blocks/Blocks";
import Expenses from "./components/Expenses/Expenses";
import {useDispatch} from "react-redux";
import Sort from "./components/Sort";

function App() {
    const dispatch = useDispatch();
    
    const clear = () => {
      dispatch({type: "CLEAR",payload :{}})
    }
    return (
        <div className="container mx-auto px-9">
            <div className="flex items-center justify-between">
                <h1 className="text-center text-4xl font-bold py-8
       text-zinc-700">
                    Your list expenses
                </h1>
                <div className="flex items-center">
                    <Sort/>
                    <button
                        onClick={() => clear()}
                        className="bg-gray-700 ml-4 px-4 py-2 text-white rounded
                    hover:bg-gray-900">Clear</button>
                </div>

            </div>

            <Blocks/>
            <Form/>
            <Expenses/>


        </div>
    );
}

export default App;