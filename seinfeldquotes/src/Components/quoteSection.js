import React from "react";
import Loader from "react-loader-spinner";
import { makeStyles } from "@material-ui/core/styles";

import Quote from './quote.js'
import QuoteAll from "./quoteAll.js"
import seinfeldLogo from "../Assets/seinfeldlogo.png";


const useStyles = makeStyles({
    Container: {
        display: "flex",
        alignItems: "center",
        textAlign: "center", 
        flexDirection: "column",
  },
    Button: {
        width: "240px",
        padding: "5px 10px",
        fontSize: "1.2rem",
        borderRadius: "10px",
        border: "2px solid black",
        backgroundColor: "#fcd720",
        color: "#e22121",
        fontWeight: "bold",
        margin: "10px"

    },
    ButtonLast: {
        width: "240px",
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

    },
    copyright: {
        bottom: "0",
        color: "#fcd720",
        textDecoration: "none"
    },
    address: {
        color: "#e22121",
        textDecoration: "none"
    }
})

const QuoteSection = ({props}) => {
 console.log(props)
    const classes = useStyles();

    return (
        <div className = {classes.Container}>
        <img className = {classes.img} src = {seinfeldLogo} alt = "seinfeld logo"/>
        <h3 className = {classes.quoteText}>Quotes</h3>
        <button className = {classes.Button} onClick = {props.getQuote}>{props.isLoading ? (
          <Loader type="ThreeDots" color="#e22121" height={15} width={100} />
        ) : (
          'Random Giddy Up!'
        )}</button>
        <div>
        <button className = {classes.Button} onClick = {props.getAllQuote}>{props.isLoading ? (
          <Loader type="ThreeDots" color="#e22121" height={15} width={100} />
        ) : (
          'Jerry Quotes!'
        )}</button>
        </div>  
         {/*Random Quote B  */}
       {props.randomquote && <Quote noStateApi= {props.noStateApi} randomquote = {props.randomquote} />}
       {props.allQuote &&  props.allQuote.map((item, index) => { return item.author === "Jerry" && (<QuoteAll key = {index} noStateApiAll= {item.noStateApiAll} allQuote = {item} /> )})}
       <p className = {classes.copyright} >Quotes from </p>
       <p><a className = {classes.address} href="https://seinfeld-quotes.herokuapp.com/">https://seinfeld-quotes.herokuapp.com/</a></p>
       
        </div>
    )
}

export default QuoteSection;