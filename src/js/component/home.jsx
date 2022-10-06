
import React, { useEffect, useState } from "react";
const url = "https://assets.breatheco.de/apis/fake/todos/user/martinLopez";
//include images into your bundle
import { Task } from "./Task.jsx";
//create your first component

const Home = () => {
	const [todoTask, setTask] = useState([{ label: "No hay tareas, añadir tareas" }]);
	const [inputValue, setInputValue] = useState("");
	
  
	const load = async () => {
	  fetch(url)
		.then((response) => response.json())
		.then((data) => {
			setTask(data);
		  console.log("Fetch Load: ", data);
		})
		.catch((err) => console.log("Error"));
	};
  
	const sync = async (dat) => {
	  fetch(url, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(dat),
	  })
		.then((response) => response.json())
		.then((data) => {
			setTask(dat);
		  console.log("Fetch Sync: ", dat);
		})
		.catch((err) => console.log("Error"));
	};
  
	useEffect(() => {
	  load();
	}, []);
  
	const keyHandle = (event) => {
	  if (event.key === "Enter") {
		setInputValue("");
		if (inputValue !== "") {
		  sync([...todoTask, { label: inputValue, done: false }]);
		}
	  }
	};
  
	const handleRemoveItem = (index) => {
	  sync(todoTask.filter((_, i) => i !== index));
	};
  
	const Items = ({ content }) => {
	  const total = content.length;
	  const items = content.map((item, k) => (
		<>
		<li className="mt-0" key={k}>
		  {item.label} 
		  <i className="eliminar" onClick={() => handleRemoveItem(k)}><img width="20px" src="https://cdn-icons-png.flaticon.com/512/2919/2919590.png"/></i>
		</li>
		<hr className="mt-0" />
		</>
	  ));
	  return (
		<>
		
		  <ul className="">{items}</ul>
		  <aside>{total} item left</aside>
		  
		</>
	  );
	};
  
	return (
		<>
		<div className="container col-4 mt-5">
		<div className="row d-flex justify-content-center">
				<center><h1 className="display-1 text-danger text-opacity-25">todos</h1></center>
			
      </div>
		
	<div className="row">
		<div className="row d-flex border-top-0 p-3 shadow">
		<input
		className="p-2 input"
		  type="text"
		  onKeyUp={keyHandle}
		  onChange={(e) => setInputValue(e.target.value)}
		  value={inputValue}
		  placeholder=""
		/>
		<Items  content={todoTask} />
		</div>
		</div>
		</div>
		
		</>
	  
	);
  };
  export default Home;
