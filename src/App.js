import "./App.css";
import React from "react";
import withStyles from "react-jss";
import Map from "./Map";
import { thirtysixdays } from "./matchboxes";

const styles = {
  app: {
    overflow: "hidden",
  },
  "@keyframes hoverGrow": {
    from: { height: "125px" },
    to: { height: "250px" },
  },
  titleBook: {
    position: "absolute",
    zIndex: 10,
    right: 10,
    bottom: 0,
    width: "auto",
    height: "125px",
    objectFit: "cover",
    cursor: "pointer",
    transition: "height .5s ease-in-out",
    "&:hover": {
      width: "auto",
      height: "250px",
      transition: "height .5s ease-in-out",
      // animationName: "$hoverGrow",
      // animationDuration: "1s",
    },
    "@media only screen and (max-width: 650px)": {
      top: 0,
      left: 5,
      transition: "none",
      "&:hover": { transition: "none" },
      height: "100px",
    },
  },
  header: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 9,
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "Graphik",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "black",
    color: "rgb(231, 216, 196)",
    fontSize: "12px",
    "@media only screen and (max-width: 650px)": {
      top: 0,
      bottom: "initial",
      flexDirection: "column",
      textAlign: "left",
      alignItems: "flex-end",
      lineHeight: 1.2,
      paddingRight: "8px",
    },
  },
  title: {
    margin: 0,
    padding: 0,
    fontWeight: 500,
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: 2.3,
    "@media only screen and (max-width: 650px)": {
      textTransform: "uppercase",
      letterSpacing: 2.3,
      fontWeight: 100,
    },
    "@media only screen and (min-width: 651px)": {
      display: "none",
    },
  },
  subHead: {
    margin: 0,
    padding: 0,
    fontSize: "14px",
    "@media only screen and (max-width: 650px)": {
      fontSize: "12px",
      lineHeight: 1.5,
    },
    "@media only screen and (min-width: 651px)": {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "#d25e5e",
    "&:hover": {
      color: "#f29494",
      cursor: "pointer",
    },
  },
};

function App({ classes }) {
  return (
    <div className={classes.app}>
      <a
        href="https://www.lilyelle.xyz/36days"
        target="_blank"
        rel="noreferrer"
        className={classes.titleBookContainer}
      >
        <img
          className={classes.titleBook}
          alt={
            "an illustrated matchbook title card that says '36 Days of NYC Matchboxes' and links to Lily's portfolio website"
          }
          src={thirtysixdays}
        />
      </a>
      <div className={classes.header}>
        {" "}
        {/* <h2 className={classes.title}>36 Days of NYC Matchboxes</h2>
        <p className={classes.subHead}>
          A{" "}
          <a
            className={classes.link}
            href="https://www.36daysoftype.com/"
            target="_blank"
            rel="noreferrer"
          >
            36 Days of Type
          </a>{" "}
          project by{" "}
          <a
            className={classes.link}
            href="https://www.lilyelle.xyz/36days"
            target="_blank"
            rel="noreferrer"
          >
            Lily Boyce
          </a>
        </p> */}
      </div>
      <Map />
    </div>
  );
}

export default withStyles(styles)(App);
