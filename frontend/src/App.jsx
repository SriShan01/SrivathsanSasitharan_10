import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar.jsx";
import { Auth } from "./pages/auth";
import { CreateRecipe } from "./pages/create-recipe.jsx";
import { Home } from "./pages/home";
import { SavedRecipes } from "./pages/saved-recipes.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-recipe.jsx" element={<CreateRecipe />} />
          <Route path="/saved-recipes.jsx" element={<SavedRecipes />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;