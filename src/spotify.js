export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "9d7de7fea7ce4f719a271a57d0ba7916";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1) // # 這個符號我不要
    .split("&") // 返回 array [token=ajdlfk, name=asdjflk]
    .reduce((initial, item) => {
      // [[token, ajdlfk], [name, asdjflk]]
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      // { token: decoce(ajdlfk), name: decode(sdjflk) }
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
