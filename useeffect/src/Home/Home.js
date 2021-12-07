import React, { useContext } from "react";
import Button from "../Components/UI/Button/Button";
import Card from "../Components/UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../context/auth-context";
import PageLayout from "../layout/PageLayout";

const Home = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Card className={classes.home}>
        <h1>Welcome back!</h1>
        <Button onClick={ctx.onLogout}>Logout</Button>
      </Card>
    </>
  );
};

export default PageLayout(Home);
