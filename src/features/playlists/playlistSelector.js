export const selectNewPlaylist = (state) => state.playlists.newPlaylist;

export const selectTrackIDs = (state) =>
  state.playlists.newPlaylist.map((track) => track.id);

export const selectTrackUri = (state) =>
  state.playlists.newPlaylist.map((track) => track.uri);

export const selectPlaylists = (state) => state.playlists.playlistsList.items;

export const selectNamePlaylist = (state) => state.playlists.namePlaylist;