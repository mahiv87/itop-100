import React from 'react';

export default function Albums({ albumName, albumCover, artist, albumLink }) {
	return (
		<a
			id={albumName}
			className="album container m-2 flex justify-between items-center bg-primary hover:bg-background ease-in duration-300 border-2 border-headline rounded-md"
			href={albumLink}
			target="_blank"
		>
			<img className="pr-2 rounded-md" src={albumCover} alt="" />
			<p className="text-sm">{albumName}</p>
			<p className="text-sm pr-2">{artist}</p>
		</a>
	);
}
