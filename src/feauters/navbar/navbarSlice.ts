import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  hamburgerMenu: boolean;
  profileMenu: boolean;
}

const initialState: InitialState = {
  hamburgerMenu: false,
  profileMenu: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setHamburgerMenu: (state) => {
      state.hamburgerMenu = !state.hamburgerMenu;
    },
    setProfileMenu: (state) => {
      state.profileMenu = !state.profileMenu;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHamburgerMenu, setProfileMenu } = navbarSlice.actions;

export default navbarSlice.reducer;
