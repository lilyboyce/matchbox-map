import "./App.css";
import React from "react";
import withStyles from "react-jss";
import Map from "./Map";

const styles = {
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
  },
  title: {
    margin: 0,
    padding: 0,
    fontWeight: 500,
    fontSize: "14px",
  },
  subHead: {
    margin: 0,
    padding: 0,
    "@media only screen and (max-width: 650px)": {
      textAlign: "right",
      lineHeight: 1.5,
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
    <div>
      <div className={classes.header}>
        <h2 className={classes.title}>36 Days of NYC Matchboxes</h2>
        <p className={classes.subHead}>
          A{" "}
          <a
            className={classes.link}
            href="https://www.36daysoftype.com/"
            target="_blank"
            noref="noreferrer"
          >
            36 Days of Type
          </a>{" "}
          project by{" "}
          <a
            className={classes.link}
            href="https://www.lilyelle.xyz"
            target="_blank"
            noref="noreferrer"
          >
            Lily Boyce
          </a>
        </p>
      </div>
      <Map />
    </div>
  );
}

export default withStyles(styles)(App);
