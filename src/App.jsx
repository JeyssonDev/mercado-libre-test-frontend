import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import ProductDetail from './views/ProductDetail/ProductDetails';
import ProductList from './views/ProductList/ProductList';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<ProductList />} />
                <Route path="/items/:id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default App;
