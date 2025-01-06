import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from "react-dom/client";

import { persistor, index } from "./store";

import BaseLayout from "./layouts/BaseLayout";

import "./index.css";

const rootElement = document.getElementById("root");

// Create the root element
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={index}>
    <PersistGate loading={null} persistor={persistor}>
      <BaseLayout />
    </PersistGate>
  </Provider>
);
