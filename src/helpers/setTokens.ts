export const setTokens = (
  accessToken: string,
  refreshToken: string,
  remember: boolean,
) => {
  if (remember && !sessionStorage.getItem("isSessionSave")) {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  } else {
    sessionStorage.setItem("isSessionSave", "true");
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
  }
};

export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
  sessionStorage.removeItem("isSessionSave");
};

export const getTokens = () => {
  return {
    accessToken:
      sessionStorage.getItem("accessToken") ||
      localStorage.getItem("accessToken"),
    refreshToken:
      sessionStorage.getItem("refreshToken") ||
      localStorage.getItem("refreshToken"),
  };
};

export const setAccessToken = (accessToken: string) => {
  sessionStorage.getItem("isSessionSave")
    ? sessionStorage.setItem("accessToken", accessToken)
    : localStorage.setItem("accessToken", accessToken);
};
