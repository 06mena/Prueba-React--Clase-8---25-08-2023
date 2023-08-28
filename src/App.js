import logo from './logo.svg';
import './App.css';
import Navbar from './Components/ResponsiveAppBar'
import Tarjetas from './Components/ActionAreaCard'
import Mural from './Components/ImageMasonry'
import Boton from './Components/BasicButtons'
import Footer from './Components/ColorInversionFooter'

function App() {
  return (
    <div className="App">

      <Navbar/>
     
      <article className='Home'>

        <article className='Seccion1'>
          <article className='boton'>
            <h1>Los aviones mas increibles del mundo</h1>
            <Boton/>
          </article>
          
          <article>
            <img src='https://concepto.de/wp-content/uploads/2023/01/avion.jpg'></img>
          </article>
        
        </article>

      </article>

      <article className='Home'>

        <article className='Tarjetas'>

          <Tarjetas/>
          <Tarjetas/>
          <Tarjetas/>

        </article>

      </article>
      
      <article className='Home'>

        <Mural/>

      </article>
      
      <article>

        <Footer/>

      </article>
      
      
      
    </div>
  );
}

export default App;
