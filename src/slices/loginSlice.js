import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.getItem("email") || "",
  password: localStorage.getItem("password") || "",
  confirmPassword: localStorage.getItem("confirmPassword") || "",
  isEmployee: localStorage.getItem("isEmployee") == "true" || false,
  isLoading: localStorage.getItem("isLoading") == "true" || false,
  isLogin: localStorage.getItem("isLogin") == "true" || false,
  error: localStorage.getItem("error") ?? "",
  dataUser: JSON.parse(localStorage.getItem("dataUser")) ?? {
    uid: "",
    email: "",
    displayName: "",
    photoURL: "",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    resetAll: (state) => {
      state.confirmPassword = "";
      state.isEmployee = false;
      state.isLoading = false;
      state.isLogin = false;
      state.password = "";
      state.email = "";
      state.error = "";
      state.dataUser = {
        uid: "",
        email: "",
        displayName: "",
        photoURL: "",
      };
      localStorage.clear();
    },
    setIsEmployee: (state, action) => {
      state.isEmployee = action.payload;
      localStorage.setItem("isEmployee", action.payload);
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      localStorage.setItem("password", action.payload);
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
      localStorage.setItem("confirmPassword", action.payload);
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
      localStorage.setItem("isLoadingLogin", action.payload);
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
      localStorage.setItem("isLogin", action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
      localStorage.setItem("errorLogin", JSON.stringify(action.payload));
    },
    setDataUser: (state, action) => {
      state.dataUser = {
        uid: action.payload.uid ?? "",
        email: action.payload.email ?? "",
        displayName: action.payload.displayName ?? "",
        photoURL: action.payload.photoURL ?? "",
      };
      localStorage.setItem("dataUser", JSON.stringify(state.dataUser));
    },
  },
});

export const {
  setConfirmPassword,
  setIsEmployee,
  setIsLoading,
  setPassword,
  setDataUser,
  setIsLogin,
  setError,
  setEmail,
  resetAll,
} = loginSlice.actions;

export const selectIsLogin = (state) => state.login.isLogin;
export const selectDataUser = (state) => state.login.dataUser;
export const selectIsLoading = (state) => state.login.isLoading;
export const selectError = (state) => state.login.error;
export const selectEmail = (state) => state.login.email;
export const selectPassword = (state) => state.login.password;
export const selectConfirmPassword = (state) => state.login.confirmPassword;
export const selectIsEmployee = (state) => state.login.isEmployee;

export default loginSlice.reducer;
