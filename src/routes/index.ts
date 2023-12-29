import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { ROUTES } from "../enum/routes";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import CreateMovie from "../pages/CreateMovie";
import EditMovie from "../pages/EditMovie";
import AuthProvider from "../components/authProvider";

export const routes = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: () => AuthProvider({ page: Home, isProtected: true }),
  },
  {
    path: ROUTES.SIGN_UP,
    Component: () =>
      AuthProvider({ isAuthPage: true, page: SignUp, isProtected: false }),
  },
  {
    path: ROUTES.SIGN_IN,
    Component: () =>
      AuthProvider({ isAuthPage: true, page: SignIn, isProtected: false }),
  },
  {
    path: ROUTES.CREATE_MOVIE,
    Component: () => AuthProvider({ page: CreateMovie, isProtected: true }),
  },
  {
    path: `${ROUTES.EDIT_MOVIE}/:movieId`,
    Component: () => AuthProvider({ page: EditMovie, isProtected: true }),
  },
]);
