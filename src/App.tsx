import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@/modules/HomeModule/HomeScreen";
import store from "@/redux/store";
import SearchViewScreen from "./modules/SearchViewModule/SearchViewScreen";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search-view" element={<SearchViewScreen />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
