const clientId = "9cd8b4a381824789a271a51fe9bcc3ea"
const redirectUri = "http://localhost:3000/"
// const redirectUri = "https://google.com"
let userAccessToken;
const Spotify = {
    getAccessToken() {
        if (userAccessToken) return userAccessToken;
        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if (accessTokenMatch && expiresInMatch) {
            userAccessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            // this clears the parameters, allowing us to grab a new acess token when it expires.
            window.setTimeout(() => (userAccessToken = ''), expiresIn * 1000);
            window.history.pushState('Access Token', null, "/")
            return userAccessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },
    async search(term) {
        const accessToken = Spotify.getAccessToken()
        const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${term.replace(' ', '%20')}`;
        return fetch(searchUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => response.json())
            .then((jsonResponse) => {
                if (!jsonResponse.tracks) return [];
                return jsonResponse.tracks.items.map((track) => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri,
                    };
                });
            });
    },

    async savePlaylist(name, trackIds) {
        const accessToken = Spotify.getAccessToken()
        if (Array.isArray(trackIds) && trackIds.length) {
            const createPlaylistUrl = `https://api.spotify.com/v1/me/playlists`;
            const response = await fetch(createPlaylistUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({
                    name: name,
                    public: true,
                }),
            });
            const jsonResponse = await response.json();
            const playlistId = jsonResponse.id;
            if (playlistId) {
                const replacePlaylistTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
                await fetch(replacePlaylistTracksUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken}`,
                    },
                    body: JSON.stringify({
                        uris: trackIds.map((id) => 'spotify:track:'.concat(id)),
                    }),
                });
            }
        }
    },
}

export default Spotify