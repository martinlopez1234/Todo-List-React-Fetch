import React from "react";
import PropTypes from "prop-types";

export const Task = props => {
	return (
		<>
			<li>
				{props.inputTask}
				<i 
					className="eliminar"
					onClick={() => props.removeCallBack(props.position)}><img width="20px" src="https://cdn-icons-png.flaticon.com/512/2919/2919590.png"/></i>
			</li>
			<hr className="mt-0" />
		</>
	);
};

Task.propTypes = {
	inputTask: PropTypes.string,
	position: PropTypes.number,
	removeCallBack: PropTypes.func
};
