import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { FunctionComponent, lazy, Suspense } from "react";
import Home from "./pages/Home";

const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const Router: FunctionComponent = () => {

 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <Home />
        }/>
        <Route path="/:loginId" element={
          <Suspense fallback={ <div></div> }>
            <ProfilePage/>
          </Suspense>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
