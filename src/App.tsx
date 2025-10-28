import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@/modules/HomeModule/HomeScreen";
import store from "@/redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
