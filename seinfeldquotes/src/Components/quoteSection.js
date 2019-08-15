import React from "react";
import Loader from "react-loader-spinner";

import Quotes from './quote.js'


const quoteSection = props => {
    return (
        <>
        <h3>Seinfeld Quotes</h3>
        <button onClick = {props.getQuote}>{props.isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={15} width={100} />
        ) : (
          'Giddy Up!'
        )}</button>
       {props.randomquote && <Quotes randomquote = {props.randomquote} />}
        </>
    )
}

export default quoteSection;