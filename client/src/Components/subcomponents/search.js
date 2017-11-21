// Include React dependency
import React from "react";

// Creating the Search component
class Search extends React.Component{
	state = {
		topic: "",
		startYear: "",
		endYear: ""
	};

componentDidMount(){
  console.log(this.props.doSearch)
}
// Change state when user input

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
    // BRETT, HOW DO I CALL THAT OTHER FUNCTION???
    this.props.doSearch(this.state.topic);
};

render() {
  return (
   
	       <form>
            <h3> Search </h3>
            <div className="form-group">
              <input
                type= "text"
                className="form-control"
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Search any topic"
              />
              </div>
              <div className="form-group">
              <input
                type= "text"
                className="form-control"
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year"
              />
              </div>
              <div className="form-group">
              <input
                type= "text"
                className="form-control"
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year"
              />
              </div>
              <button
                type="button" 
                className="btn btn-primary"
                onClick={this.handleFormSubmit}
              >
                Submit 
              </button>
          </form>

          );
		    }
	   }

	export default Search;