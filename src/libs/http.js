class http {
  static instance = new http();

  get = async (url) => {
    try {
      let req = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      let json = await req.text();

      return json;
    } catch (error) {
      console.log("get error", error);
      throw Error(error);
    }
  };

  post = async (url, body) => {
    try {
      let req = await fetch(url, {
        method: "POST",
        body,
      });
      let json = await req.json();
      return json;
    } catch (error) {
      console.log("post error", error);
      throw Error(error);
    }
  };
}

export default http;
