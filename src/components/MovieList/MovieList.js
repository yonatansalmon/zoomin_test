import React from "react";
import axios from "axios";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  checkItem(e) {
    console.log(e.target.id);
    this.setState();
  }

  render() {
    const { persons } = this.props;
    return (
      <div>
        {persons.map((person) => {
          return (
            <div id={person.id} key={person.id}>
              <div>{person.name}</div>
              <input
                id={person.name}
                type="checkbox"
                onChange={(e) => this.checkItem(e)}
              ></input>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
