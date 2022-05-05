import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { FunctionComponent, lazy, Suspense } from "react";

const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const Router: FunctionComponent = () => {

 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={ <div></div> }>
            <div>Home</div>
          </Suspense>
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
