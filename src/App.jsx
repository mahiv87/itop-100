import React, { useState, useEffect, createContext } from 'react';

import { getTopAlbums } from './utils/getTunes';
import SearchBar from './components/SearchBar';
import Albums from './components/Albums';

export const AppContext = createContext();

function App() {
	// Set initial state incase data is not ready from api
	const initialState = {
		feed: {
			entry: [
				{
					'im:name': {
						label: 'A Family Christmas'
					},
					'im:image': [
						{
							label:
								'https://is4-ssl.mzstatic.com/image/thumb/Music112/v4/4f/aa/31/4faa316b-d7c0-4e39-64ca-3aeb30308244/22UMGIM94809.rgb.jpg/55x55bb.png'
						},
						{
							label:
								'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/4f/aa/31/4faa316b-d7c0-4e39-64ca-3aeb30308244/22UMGIM94809.rgb.jpg/60x60bb.png'
						}
					],
					id: {
						attributes: {
							'im:id': '1641553167'
						}
					},
					'im:artist': {
						label: 'Andrea Bocelli, Matteo Bocelli & Virginia Bocelli'
					},
					link: {
						attributes: {
							href: 'https://music.apple.com/us/album/a-family-christmas/1641553167?uo=2'
						}
					}
				}
			]
		}
	};

	// State for api data
	const [details, setDetails] = useState(initialState);

	// Set content for global context
	const content = {
		albumName: details.feed.entry.map((item) => item['im:name'].label),
		albumId: details.feed.entry.map((item) => item.id.attributes['im:id'])
	};

	// Makes api call
	useEffect(() => {
		let mounted = true;
		getTopAlbums().then((items) => {
			if (mounted) {
				setDetails(items);
			}
		});
		return () => (mounted = false);
	}, []);

	return (
		<AppContext.Provider value={content}>
			<div className="App h-full bg-background text-4xl font-bold">
				<header className="bg-secondary mx-2 md:mx-auto h-16 max-w-main flex justify-center items-center border-headline border-l-4 border-r-4 border-b-4 rounded-b-md">
					<h1 className="text-headline">iTop 100</h1>
				</header>
				<SearchBar content={content} />

				<div className="container max-w-main mx-auto px-2 md:px-0 flex flex-col justify-center items-center">
					{details.feed.entry.map((item) => (
						<Albums
							albumName={item['im:name'].label}
							albumCover={item['im:image'][1].label}
							artist={item['im:artist'].label}
							albumId={item.id.attributes['im:id']}
							albumLink={item.link.attributes.href}
							key={item.id.attributes['im:id']}
						/>
					))}
				</div>
				<footer className="bg-secondary mx-auto h-16 w-1/2 flex justify-center items-center border-headline border-l-4 border-t-4 border-r-4 rounded-t-md">
					<p className="text-headline text-sm">
						<span>&copy;</span> Marcus Herrera 2022
					</p>
				</footer>
			</div>
		</AppContext.Provider>
	);
}

export default App;
