
import React, { useEffect, useState } from "react";

//include images into your bundle
import { Task } from "./Task.jsx";
//create your first component

const Home = () => {
	const [todoTask, setTask] = useState([]);
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {});
	return (
		<div className="container col-4 mt-5">
			<div className="row d-flex justify-content-center">
				<center><h1 className="display-1 text-danger text-opacity-25">todos</h1></center>
			
      </div>
      <div className="row d-flex border-top-0 p-3 shadow">
			<div className="row">
				<input
					type="text"
					className="p-2 input "
					placeholder={
						todoTask.length == 0 ? "No hay tareas, añadir tareas" : ""
					}
					value={inputValue}
					onChange={event => {
						setInputValue(event.target.value);
					}}
					onKeyPress={event => {
						if (event.key == "Enter") {
							if (event.target.value == "") {
								console.log("");
								return;
							}
							setTask(prevTask => [...prevTask, inputValue]);
							setInputValue("");
						}
					}}
				/>
        
			</div>
			<div className="">
				<ul className="list-unstyled">
					{todoTask.map((task, index) => {
						return (
							<Task
								inputTask={task}
								position={index}
								removeCallBack={_removeTask =>
									setTask(
										todoTask.filter(
											(task, index) =>
												index != _removeTask
										)
									)
								}
								key={index}
                
							/>
              
						);
					})}
				</ul>
				<div className="row p-3">{`${todoTask.length} items left`}</div>
			</div>
		</div>
    </div>
	);
};

export default Home;
