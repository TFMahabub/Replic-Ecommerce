import { createSlice } from "@reduxjs/toolkit";

export interface CartProduct {
  id: number;
  quantity: number;
}
interface InitialState {
  hamburgerMenu: boolean;
  profileMenu: boolean;
  cartProducts: CartProduct[];
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
        state.cartProducts = [
          {
            id: payload,
            quantity: 1,
          },
        ];
      } else {
        const isHave = state.cartProducts.find(
          (item: CartProduct) => item?.id === payload
        );

        if (isHave) {
          isHave.quantity++;
        } else {
          state.cartProducts.push({
            id: payload,
            quantity: 1,
          });
        }
      }
    },
    decreaseCartProduct: (state, { payload }) => {
      state.cartProducts = state.cartProducts.filter(
        (item) => item.id !== payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setHamburgerMenu,
  setProfileMenu,
  increateCartProduct,
  decreaseCartProduct,
} = navbarSlice.actions;

export default navbarSlice.reducer;
