import "./App.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "./logo.svg";
import Moment from "react-moment";
import {RouterProvider, createBrowserRouter} from "react-router-dom"




function CycleTracker() {
    const [value, onChange] = useState(new Date());
    const [cycle, cycleValue] = useState("28");
    
    const date = value;
    console.log(cycle);
    const cycleLength = parseInt(cycle);
    
    return (
      <>
        <div className="text-center">
          <nav className="navbar navbar-light bg-light">
            <div className="container-fluid text-center">
              <h4>Cycle Calculator</h4>
            </div>
          </nav>
    
          <label for="cycle"> What is your cycle length? </label>
          <select
            onChange={(e) => cycleValue(e.target.value)}
            defaultValue={cycle}
            className="m-2"
          >
            <option value="28">24</option>
            <option value="29">25</option>
            <option value="30">26</option>
            <option value="31">27</option>
            <option value="32">28</option>
            <option value="33">29</option>
            <option value="34">30</option>
            <option value="35">31</option>
            <option value="36">32</option>
            <option value="37">33</option>
            <option value="38">34</option>
            <option value="39">35</option>
          </select>
        </div>
    
        <p className="text-center">
          Select Your Last Period Start Date from the Calendar
        </p>
    
        <div className="d-flex justify-content-center ">
          <Calendar onChange={onChange} value={value} 
            className="calendar mt-0" />
        </div>
    
        <div className="text-center mt-4 p-2">
          <div className="row">
            <div class="d-flex justify-content-center">
              <div className="col-md-3 m-3 box ">
                <p>Your Next Period May Begin Between</p>
    
                <Moment format="Do MMMM" 
                  add={{ days: cycleLength - 1 }}>
                  {date}
                </Moment>
                - 
                <Moment format="Do MMMM" 
                  add={{ days: cycleLength + 3 }}>
                  {date}
                </Moment>
              </div>
              <div className="col-md-3 m-3 box ">
                <p> Your Predicted Ovulation Window is:</p>
    
                <Moment
                  format="Do MMMM"
                  add={{ days: cycleLength - 5 - 14 }}
                >
                  {date}
                </Moment>
                -
                <Moment
                  format="Do MMMM"
                  add={{ days: cycleLength - 1 - 14 }}
                >
                  {date}
                </Moment>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
    
  export default CycleTracker;