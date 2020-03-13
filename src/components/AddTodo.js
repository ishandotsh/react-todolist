import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
	state = {
		title: ""
	};

	updateTitle = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.title !== "") {
			this.props.addTodo(this.state.title);
			this.setState({ title: "" });
		}
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: "flex" }}>
				<input
					type="text"
					name="title"
					placeholder="Add Todo..."
					style={{
						flex: "10",
						padding: "5px",
						borderTopLeftRadius: "5px",
						borderBottomLeftRadius: "5px"
					}}
					value={this.state.title}
					onChange={this.updateTitle}
				/>
				<input
					type="submit"
					value="submit"
					className="btn"
					style={{
						flex: "1",
						borderTopRightRadius: "5px",
						borderBottomRightRadius: "5px"
					}}
				/>
			</form>
		);
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default AddTodo;
