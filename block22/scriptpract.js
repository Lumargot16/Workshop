async function init () {
// here will contain my code
const songs = await fetchAllSongs ();
console.log(songs);
}
init ();

const fetchAllSongs = async () => {
    try {
        const response = await fetch(SONGS_API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
