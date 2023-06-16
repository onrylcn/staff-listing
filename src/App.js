import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      staffes: [],
      searchFiled: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { staffes: users };
          },
          () => {}
        )
      );
  }

  onSearchChange = (event) => {
    const searchFiled = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFiled };
    });
  };

  render() {
    const { staffes, searchFiled } = this.state;
    const { onSearchChange } = this;
    const filteredStaffes = staffes.filter((staff) => {
      return staff.name.toLocaleLowerCase().includes(searchFiled);
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search staffes"
          className='staff-search-box'
        />
        <CardList staffes={filteredStaffes} />
      </div>
    );
  }
}

export default App;
