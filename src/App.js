import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dice la gente de nuestra app. </h1>
        <Testimonio nombre='Shawn Wang' pais='Singapur' imagen='shawn' cargo='ingeniero de software' empresa='Amazon' testimonio='Integer eleifend, sem ac sollicitudin molestie, dolor dolor imperdiet massa, in euismod massa arcu ac nisl. Aliquam commodo velit et efficitur pellentesque. Praesent viverra arcu vel ante euismod bibendum. Morbi scelerisque neque sit amet lectus aliquet varius. In iaculis sagittis ligula venenatis sodales. Sed eu tellus erat. Proin ultrices lacinia congue.' />
        <Testimonio nombre='Sarah Chima' pais='Nigeria' imagen='sarah' cargo='ingeniera de software' empresa='ChatdDesk' testimonio='Fusce blandit, purus eget congue iaculis, dolor lacus pellentesque nisl, sit amet semper odio purus id orci. Proin laoreet ante a magna fermentum, et venenatis orci luctus. Cras a felis vitae libero auctor ornare. Pellentesque sed mi id enim dapibus efficitur sit amet in diam. Curabitur a libero a magna mollis maximus. Ut elit augue, varius quis fermentum sed, sollicitudin eget tellus. Cras id eleifend lorem, sit amet dapibus justo.' />
        <Testimonio nombre='Emma Bostian' pais='Suecia' imagen='emma' cargo='ingeniera de software' empresa='Spotify' testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus massa, commodo rutrum finibus non, lobortis at lacus. Etiam eget convallis quam. Aliquam lacus metus, viverra in convallis ut, gravida luctus purus. Sed quis congue purus. Etiam non mi a mauris dapibus ornare quis in lectus. Morbi blandit turpis elit, quis fermentum felis luctus a. Sed mattis magna quis vestibulum porta. Aenean ante elit, viverra id interdum sed, efficitur non tellus. Etiam cursus tempus felis at porta. Curabitur elementum nulla sed dui sagittis dapibus. Vestibulum at turpis eget lorem accumsan eleifend.' />        
      </div>
    </div>
  );
}

export default App;
