import React from "react";

function About() {
	return (
		<React.Fragment>
			<h2 style={textStyle}>About</h2>
			<p style={textStyle}>
				This is the TodoList app version 1.0.0 for a React Crash Course.
			</p>
			<p style={textStyle}>
				Data from: <code>https://jsonplaceholder.typicode.com/todos</code>
			</p>
		</React.Fragment>
	);
}

const textStyle = {
	color: "#bbb"
};

export default About;
