import React, { Component } from 'react'
import MainComponents from '../components/MainComponents'
import { connect } from 'react-redux'

const mapStateToProps = state =>{
  console.log("mapsta",state)
  return{
    a:state.dishes 
  }
}

const Home=()=> {

  return (
      
    <>
      <MainComponents></MainComponents>
    </>
    
  )
  
}

export default Home