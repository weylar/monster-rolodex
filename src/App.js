import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

  
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) =>  {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(v => 
      v.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      
      <div className="App">
        <h1>Moster Rolodex</h1>
        <SearchBox type="search" 
        placeholder="Search monster" 
        handleChange={this.handleChange} />
        <CardList monster={filteredMonsters} />


      </div>
    );  
  }

}

export default App;
