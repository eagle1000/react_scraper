// Include React dependency
import React from "react";

class Saved extends React.Component{



 render () {
  	return (
 <div>
<h3> Saved Articles </h3>
 <div className="card">

  	<div className="card-body">
    <h4 className="card-title">Article Headline</h4>
    <p className="card-text">Article Link</p>
    <button className="btn btn-primary">Delete</button>
  </div>
</div>
</div>

  	)
  }

	}

export default Saved;