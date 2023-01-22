const accessToken = () => {
  const accessToken =
    localStorage.getItem("Token") !== "undefined"
      ? JSON.parse(localStorage.getItem("Token"))
      : localStorage.clear();

  // console.log(accessToken)

  return accessToken;
};

export default accessToken;
