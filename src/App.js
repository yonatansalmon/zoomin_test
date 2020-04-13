import React from "react";
import axios from "axios";
import MovieList from "./components/MovieList/MovieList";

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

  checkItem(e){
    console.log(e.target.id)
    this.setState()
  }

  render() {
    const { persons, loading } = this.state;
    return (
      <div>
        {loading ? <div>loading..</div> : <MovieList persons={persons}/> }
      </div>
    );
  }
}

export default App;
