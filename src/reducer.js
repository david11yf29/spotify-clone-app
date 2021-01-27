export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing...
  token:
    "BQDUAyRuiM1DGtk1dqCe-3a-738Ec35L1RgH_bL1acVW4y4VaNSXPtt-_n7BHiWufdmCa0wAEuqg1Gt55NSyxNZJshtEhyja_gjZQPOG-DZ60OPRklkGIaEuxXf2Dq64FLxfz04Z1_4Yd9uF8NTAJKbIRzF-w1ERog",
};

const reducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
