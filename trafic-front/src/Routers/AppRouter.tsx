import React, { useContext, useEffect, useState } from "react";
import { BooleanProps, isKeyPressContext } from "../Provider/CookieProvider";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import Home from "../Pages/Home/Home";
import DialogComp from "../Components/Dialog-comp/DialogComp";
import DisplayUserrComp from "../Components/Users/DisplayUserrComp";
import { UserConntext } from "../Provider/UserProvider";

const AppRouter = () => {
  const isAuth = useContext<BooleanProps>(isKeyPressContext);
  useEffect(() => {
    console.log(45);
    console.log(isAuth.isPress);
  }, []);

  return (
    <div>
      {isAuth.isPress && <DialogComp />}
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
