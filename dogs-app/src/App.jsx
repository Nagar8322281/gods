import { BreedImages, FavoriteImages, RandomImages } from "./components/images_collection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import "./App.css";
import {DogsContextProvider} from './components/context'


function App() {
  return (
        <DogsContextProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<RandomImages />} />
                  <Route path="/favorite" element={<FavoriteImages />} />
                  <Route path="breeds/:breed?" element={<BreedImages />} />
                </Route>
              </Routes>
            </BrowserRouter>
         </DogsContextProvider>
      
  );
}

export default App;
