import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';

import styled from "styled-components"

import { ASYNC } from "./actions/Async"

function App(props) {
  const { Assets } = props;
  console.log("APP PROPS: ", props)

  useEffect(() => {
    props.Async() //Run an axios API call.
  }, [])

  const handleClick = (e) => {
    //  e.preventDefault()
    // props.Async()
  }

  const makeLabel = () => {
    //DISPLAY API DATA IN A COMPONENT

    return (
      <div className="List">
        {
          Assets.map(val => {
            // console.log(val)
            return (
              <div className="Card" key={val.assetID}>
                <p className="ItemName">{val.name}</p>
                <p className="ItemId">{val.id} </p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="App">
      <h2 className="title">Assets</h2>

      <form onSubmit={handleClick}>
        <label>
          <button >REFRESH</button>
        </label>
      </form>

      {
        makeLabel()
      }

    </div>
  );
}

const mapStateToProps = state => {
  //console.log(state)
  return state
}

export default connect(mapStateToProps, { Async: ASYNC })(App);