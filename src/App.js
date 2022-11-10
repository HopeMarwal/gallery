//impost style
import './assets/scss/style.scss'
//import components
import Header from './components/Header';
import Search from './components/Search';
import Buttons from './components/Buttons';
import Gallery from './components/Gallery'


function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Buttons />
      <Gallery />
    </div>
  );
}

export default App;
