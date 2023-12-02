import { Web5 } from "@web5/api/browser";
import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";

function App() {
  const [web5, setWeb5] = useState(null);
  const [did, setDid] = useState(null);

  useEffect(() => {
    const connectWeb5 = async () => {
      const { web5, did } = await Web5.connect();
      setWeb5(web5);
      setDid(did);
    };

    connectWeb5();
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      {/* <p>{did}</p> */}
    </div>
  );
}

export default App;
