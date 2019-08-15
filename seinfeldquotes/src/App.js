import React from 'react';
import { connect } from "react-redux";
import './App.css';
import QuoteSection from "./Components/quoteSection.js";
import { getQuote } from "./Actions";

function App(props) {
  
  return (
    <div className="App">
      <QuoteSection noStateApi= {props.noStateApi} randomquote = {props.randomquote} isLoading={props.isLoading} getQuote = {props.getQuote}/>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    randomquote: state.randomquote,
    isLoading: state.isLoading,
    noStateApi: state.noStateApi
  }
}

export default connect(mapStateToProps, {getQuote})(App);
