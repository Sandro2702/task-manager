import React, { useState } from 'react';
import './App.css';

const App = () => {
	// create currentinput with value ''
	const [ currentInput, setCurrentInput ] = useState('');
	// create list[]
	const [ list, setList ] = useState([]);

	// -----------ADD TODO-------------
	const AddTodo = (event) => {
		event.preventDefault();
		const createdAt = new Date().toLocaleString();
		const newList = list;
		newList.unshift({
			content     : currentInput,
			createdAt,
			isCompleted : false
		});
		setList([ ...newList ]);
		setCurrentInput('');
	};

	// ----------DELETE TODO---------
	const deleteTodo = (index) => {
		let newList = list;
		newList.splice(index, 1);
		setList([ ...newList ]);
	};

	// Completed TODO function
	const completedTask = (index) => {
		let newList = list;
		newList[index].isCompleted = !newList.isCompleted;
		setList([ ...newList ]);
	};

	return (
		<div>
			<div className='outer-box'>
				{/* Title */}
				<h1>Todo Manager</h1>

				{/* FORM */}
				<form className='input-box'>
					{/* INPUT */}
					<input
						className='input'
						onChange={(event) => setCurrentInput(event.target.value)}
						value={currentInput}
					/>

					{/* BUTTON */}
					<button className='add-button' onClick={AddTodo}>
						Add
					</button>
				</form>

				{list.map(({ content, createdAt, isCompleted }, index) => {
					return (
						<div className='todo-container'>
							<div className='todo-main-content'>
								<div
									className='todo-content'
									onClick={() => completedTask(index)}
									style={{
										textDecoration : isCompleted
											? 'line-through'
											: 'none'
									}}
								>
									{content}
								</div>
								<div className='todo-createdAt'>
									Created At: {createdAt}
								</div>
							</div>
							<div
								className='del-button'
								onClick={() => deleteTodo(index)}
							>
								Delete
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default App;
