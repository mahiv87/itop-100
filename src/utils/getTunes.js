export const getTopAlbums = () => {
	let itunesApi = 'https://itunes.apple.com/us/rss/topalbums/limit=100/json';
	return fetch(itunesApi).then((data) => data.json());
};
