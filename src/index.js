import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { store } from "./stores/store";
import GlobalStyles from "./styles/GlobalStyles";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const MetaTags = React.memo(() => {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Baloo+Bhaina+2:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
});

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <MetaTags />
      <Provider store={store}>
        <GlobalStyles />
        <App />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
