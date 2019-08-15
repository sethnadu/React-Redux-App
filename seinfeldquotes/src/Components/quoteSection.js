import React from "react";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";

import Quote from './quote.js'
import seinfeldLogo from "../Assets/seinfeldlogo.png";


const useStyles = makeStyles({
    Container: {
        display: "flex",
        alignItems: "center",
        textAlign: "center", 
        flexDirection: "column",
  },
    Button: {
        width: "200px",
        padding: "5px 10px",
        fontSize: "1.2rem",
        borderRadius: "10px",
        border: "2px solid black",
        backgroundColor: "#fcd720",
        color: "#e22121",
        fontWeight: "bold",
        marginBottom: "80px"

    },
    img: {
        width: "400px",
        marginTop: "80px",
    },
    quoteText: {
        display: "flex",
        marginLeft: "180px",
        marginTop: "-10px",
        fontSize: "2rem",
        color: "#e22121",

    }
})

const QuoteSection = props => {

    const classes = useStyles();

    return (
        <div className = {classes.Container}>
        <img className = {classes.img} src = {seinfeldLogo} alt = "seinfeld logo"/>
        <h3 className = {classes.quoteText}>Quotes</h3>
        <button className = {classes.Button} onClick = {props.getQuote}>{props.isLoading ? (
          <Loader type="ThreeDots" color="#00BFFF" height={15} width={100} />
        ) : (
          'Giddy Up!'
        )}</button>
       {props.randomquote && <Quote noStateApi= {props.noStateApi} randomquote = {props.randomquote} />}
        </div>
    )
}

export default QuoteSection;