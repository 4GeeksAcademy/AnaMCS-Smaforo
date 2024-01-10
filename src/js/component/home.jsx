import React from "react";
import ReactDOM from "react-dom";
import TrafficLight  from "./ligths";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<TrafficLight />
	)
		
};

export default Home;

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));