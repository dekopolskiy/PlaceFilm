const initial = {
  account: null,
  status: "",
  aboutMe: null,
  contacts: {
    facebook: null,
    website: null,
    vk: null,
    twitter: null,
    instagram: null,
    youtube: null,
    github: null,
    mainLink: null,
  },
  lookingForAJob: false,
  lookingForAJobDescription: null,
  fullName: null,
  userId: 0,
  photos: {
    small: null,
    large: null,
  },
};

const account_reducer = (state = initial, action) => {
  switch (action.type) {
    case "SET-ACCOUNT":
      return {
        ...action.data
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export default account_reducer;
