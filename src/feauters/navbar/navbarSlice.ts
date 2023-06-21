import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
}

interface InitialState {
  hamburgerMenu: boolean;
  profileMenu: boolean;
  cartProducts: any;
}

const initialState: InitialState = {
  hamburgerMenu: false,
  profileMenu: false,
  cartProducts: [],
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
    increateCartProduct: (state, { payload }) => {
      if (state.cartProducts.length === 0) {
        state.cartProducts = [payload];
      } else {
        state.cartProducts.push(payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHamburgerMenu, setProfileMenu, increateCartProduct } =
  navbarSlice.actions;

export default navbarSlice.reducer;
