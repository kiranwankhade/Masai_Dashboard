import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Events from "../Pages/Events/Events";
import Login from "../Pages/Login/Login";
import OTPPage from "../Pages/Login/OTPPage";
import SignUp from "../Pages/Login/SignUp";
import SidebarWithHeader from "../Components/SidebarWithHeader";
import Learning from "../Pages/Self_Learning/Learning";
import RightNav from "../Components/RightNav";
import NotFound from "../Pages/NotFoundPage/NotFoundPage";
import Profile from "../Pages/Profile/Profile";
import Certificates from "../Pages/Certificates/Certificates";
import CourseDetail from "../Pages/Courses/CourseDetail";
import Tutorials from "../Pages/MyTutorials/Tutorials";
import Bookmarks from "../Pages/MyBookmarks/Bookmarks";
import Alumni from "../Pages/Alumni/Alumni";
import Referral from "../Pages/Referral/Referral";
import SignupOTP from "../Pages/Login/SignupOTP";
import { PrivateRoute } from "./PrivateRoutes";
import RegisterEventDetails from "../Pages/Events/RegisterEventDetails";
import EventWatch from "../Pages/Events/EventWatch";
import MsatResult from "../Pages/MSAT/MsatResult";
import Onboarding from "../Pages/Onboarding/Onboarding";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Home />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignUp />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/otp",
    element: (
      <>
        <OTPPage />
      </>
    ),
  },
  {
    path: "/signup-otp",
    element: (
      <>
        <SignupOTP />
      </>
    ),
  },
  {
    path: "/courses",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Courses />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/courses/:id/details",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <CourseDetail />
            {/* {"courseDetails"} */}
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/events",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Events />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/events/:id/details",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <EventWatch />
            {/* {"EventWatch"} */}
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/events/:id",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <RegisterEventDetails />
            {/* {"registerEventDetails"} */}
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/learn",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Learning />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/learn/my-certificates",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Certificates />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/learn/my-tutorials",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Tutorials />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/learn/bookmarks",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Bookmarks />
            <RightNav />
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <NotFound />
      </>
    ),
  },
  {
    path: "/MSAT-result",
    element: (
      <>
       <PrivateRoute>
        <MsatResult/>
        </PrivateRoute>
      </>
    ),
  },
 
  {
    path: "/profile",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Profile />
            {/* {"profile"} */}
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/alumni",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Alumni />
            {/* {"alumni"} */}
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/referral-program",
    element: (
      <>
        <SidebarWithHeader>
          <Referral />
          <RightNav />
        </SidebarWithHeader>
      </>
    ),
  },
  {
    path: "/msat-result",
    element: (
      <>
        <PrivateRoute>
          <MsatResult />
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/onboarding",
    element: (
      <>
        <PrivateRoute>
          <SidebarWithHeader>
            <Onboarding />
            {/* {"onboarding"} */}
          </SidebarWithHeader>
        </PrivateRoute>
      </>
    ),
  },
]);

const AllRoutes = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AllRoutes;
