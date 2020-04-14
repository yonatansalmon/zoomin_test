import React from "react";
import axios from "axios";
import "./App.css"
import MovieList from "./components/MovieList/MovieList";
import FavoriteMovies from "./components/FavoriteMovies/FavoriteMovies"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      loading: true,
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        console.log(persons);
        this.setState({
          persons: persons, loading:false
        });
      })
      .catch((error) => {
        // alert("ERROR: Tweet Empty");
      });
  }



  render() {
    const { persons, loading } = this.state;
    return (
      <div className="main_container">
        {loading ? <div>loading..</div> : <MovieList persons={persons}/> }
        <FavoriteMovies/>
      </div>
    );
  }
}

export default App;
