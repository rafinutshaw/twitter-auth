import { useEffect, useState } from "react";
import { AppService } from "../service/appService";
import ProfilePicture from "../components/ProfilePicture";
import TwitterIcon from "../icons/twitter.icon";
import { BASE_API_URL } from "../constants";

export default function Home() {
  useEffect(checkAuth, []);

  const [state, setState] = useState({
    authenticated: false,
    user: null,
  });

  function checkAuth() {
    AppService.checkAuth()
      .then((res) => {
        setState({
          authenticated: true,
          user: res.data.user,
        });
      })
      .catch((err) => {
        setState({
          authenticated: false,
          error: "Failed to authenticate user",
        });
      });
  }

  function toogleLogin() {
    state.authenticated
      ? window.open(BASE_API_URL + "/auth/logout", "_self")
      : window.open(BASE_API_URL + "/auth/twitter", "_self");
  }

  return (
    <div className="min-h-1/2 bg-gray-900  border border-gray-900 rounded-2xl">
      <div className="sm:mx-24 md:mx-34 lg:mx-56 mx-auto w-48 flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col">
        {state.authenticated ? (
          <ProfilePicture src={state.user.photos[0].value} />
        ) : (
          <TwitterIcon />
        )}
        {state.authenticated && (
          <div className="text-white text-2xl font-bold">{state.user.name}</div>
        )}
        <button
          className="w-full p-2 bg-gray-50 rounded-full font-bold text-gray-900 border border-gray-700 whitespace-nowrap	"
          type="button"
          id=""
          onClick={toogleLogin}
        >
          {state.authenticated ? "Log out" : "Login with Twitter"}
        </button>
      </div>
    </div>
  );
}
