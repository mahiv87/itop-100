import React, { useState, useContext, useEffect } from 'react';

import { AppContext } from '../App';
import autocomplete from '../utils/autocomplete';

export default function SearchBar() {
	// import global state
	const content = useContext(AppContext);

	// state for input value
	const [value, setValue] = useState('');

	// initials autocomplete data
	useEffect(() => {
		autocomplete(document.getElementById('myInput'), content.albumName);
	});

	// Event handler scrolls to matching album name
	const handleFormSubmit = async (e) => {
		e.preventDefault();

		document
			.getElementById(value)
			.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	return (
		<form
			onSubmit={handleFormSubmit}
			autoComplete="off"
			className="w-full flex flex-col md:flex-row justify-center items-center"
		>
			<div className="autocomplete w-5/6 lg:w-1/3 m-2">
				<input
					className="bg-primary pl-2 border-headline focus:border-button border-4 rounded-md"
					type="text"
					id="myInput"
					name="searchBar"
					placeholder="Search an Album"
					onChange={(e) => setValue(e.target.value)}
					onSelect={(e) => setValue(e.target.value)}
					value={value}
				/>
			</div>
			<button
				type="submit"
				className=" mt-2 md:mt-0 md:ml-2 text-base bg-button hover:text-background ease-in duration-300 text-headline px-4 py-2 rounded-md border-4 border-headline "
			>
				Search
			</button>
		</form>
	);
}
