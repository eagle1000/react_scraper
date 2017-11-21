// Require React
import React from "react";

// Require subcomponents
import Search from "./subcomponents/search";
import Results from "./subcomponents/results";
import Saved from "./subcomponents/saved";

class Main extends React.Component {
	 state = {
    search: [],
    results: [],
    saved: []
  };


  setSearch = (topic, startYear, endYear) =>{
    console.log(`TODO search for ${topic}`)
    // this.setState({ search: [topic, startYear, endYear] });

  }



  render () {
  	return (
  		<container>
      <h1> New York Times Article Scrubber </h1>
      <h2> Search and annotate articles of interest! </h2>
  		 <Search  doSearch = {this.setSearch} />	 

       <Results />

       <Saved />
  		 </container>
  		)
 	 }
  }

export default Main;