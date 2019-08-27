import React, { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
    results: []
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submitForm = async (e) => {
    e.preventDefault()
    const search = new FormData()
    search.append("search", this.state.search)
    const data = await fetch(`${process.env.REACT_APP_BACKEND_URL}/search`,{
      method: "POST",
      data:search,
      credentials: "include",
      headers:{
        "enctype": "multipart/form-data"
      }
    })

    const jsonData = await data.json()
    console.log(jsonData.results)
    this.setState({
      results: jsonData.results
    })
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitForm}>
          <input type='text' value={this.state.search} onChange={this.handleChange} name='search'/>
          <button type='submit'>Search</button>
        </form>
        {
          this.state.results.map((r, i) =>
            <div key={i} >{r.title}</div>
          )
        }
      </div>
  )
  }
}
export default Search;
