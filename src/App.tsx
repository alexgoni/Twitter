import Layout from "components/Layout";
import Router from "components/Router";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Loading from "components/loading/Loading";

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setInit(true);
    });
  }, [auth]);

  return (
    <Layout>
      <ToastContainer
        theme="dark"
        autoClose={500}
        hideProgressBar
        newestOnTop
      />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loading />}
    </Layout>
  );
}

export default App;
