import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Components/MovieList/MovieList';
import data from './data';
import './App.css';
import Search from './Components/Search/Search';
import Heading from './Components/Heading/Heading';

function App() {
  const [Newdata, setNewdata] = useState(data);
  const [search, setSearch] = useState("")
  const [rating, setRating] = useState(0)
  const addMovie=(title,desc,rating,id,posterUrl,trailerSrc)=>{
    setNewdata([...Newdata,{title,description:desc,rating, id:Newdata.length+1,posterUrl,trailerSrc}])
  }
  return (
    <div className='container-fluid movie-app'>
      			<div className='row d-flex align-items-center mt-4 mb-4'>
				<Heading heading='Movies' />
        <Search />
			</div>
      <div className='row'>
        <MovieList data={Newdata.filter((el)=>el.title?.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()) && el.rating>=rating)} />
        </div>
        </div>

  );
}
export default App;