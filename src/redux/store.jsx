import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/auth.slice";
import accountReducer from "./features/accounts/accounts.slice";
import productReducer from "./features/products/product.slice";
import categoryReducer from "./features/category/category.slice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    accounts: accountReducer,
    products: productReducer,
    categories: categoryReducer,
  },
});
