import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "@/modules/HomeModule/HomeScreen";
import store from "@/redux/store";
import SearchViewScreen from "./modules/SearchViewModule/SearchViewScreen";
import PropertyDetailsScreen from "./modules/PropertyDetailsModule/PropertyDetailsScreen";
import ScrollToTop from "./components/ScrollToTop";
import { routes } from "./routes/routesPath";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={routes.HOME} element={<HomeScreen />} />
          <Route path={routes.SEARCH_VIEW} element={<SearchViewScreen />} />
          <Route
            path={routes.PROPERTY_DETAILS}
            element={<PropertyDetailsScreen />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
