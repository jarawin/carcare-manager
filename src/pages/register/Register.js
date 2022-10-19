import React from "react";
import firebaseConfig from "../../firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectConfirmPassword,
  selectEmail,
  selectPassword,
  selectError,
  selectIsLoading,
  selectIsLogin,
  selectDataUser,
  setEmail,
  setPassword,
  setConfirmPassword,
  setIsLoading,
  setIsLogin,
  setError,
  setDataUser,
} from "../../slices/loginSlice";

function Register() {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const confirmPassword = useSelector(selectConfirmPassword);
  const isLoading = useSelector(selectIsLoading);
  const isLogin = useSelector(selectIsLogin);
  const error = useSelector(selectError);

  const verifyRegister = () => {
    if (password !== confirmPassword) {
      dispatch(setError("Passwords do not match"));
      return false;
    }
    if (password.length < 6) {
      dispatch(setError("Password must be at least 6 characters"));
      return false;
    }
    if (email === "") {
      dispatch(setError("Email is required"));
      return false;
    }
    if (password === "") {
      dispatch(setError("Password is required"));
      return false;
    }
    if (confirmPassword === "") {
      dispatch(setError("Password confirmation is required"));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    if (verifyRegister()) {
      try {
        const response = await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email, password);

        dispatch(setIsLogin(true));
        dispatch(setDataUser(response.user));
        dispatch(setError(null));
        dispatch(setIsLoading(false));
      } catch (error) {
        dispatch(setError(error.message));
        dispatch(setIsLoading(false));
        alert(error);
      }
    }
  };

  React.useEffect(() => {
    if (isLogin) {
      window.location.href = "/application";
    }
  }, [isLogin]);

  return (
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center h-screen">
        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <div class="flex-1 border-gray-200 p-10 rounded-2xl border">
            <div class="text-center">
              <h2 class="text-5xl font-bold text-center text-gray-700 dark:text-white">
                Carcare Manager
              </h2>

              <p class="mt-3 text-gray-500 dark:text-gray-300">
                สมัครสมาชิกเพื่อเข้าสู่ระบบ
              </p>
            </div>

            <div class="mt-8">
              <div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >
                    อีเมล
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label
                      for="password"
                      class="text-sm text-gray-600 dark:text-gray-200"
                    >
                      รหัสผ่าน
                    </label>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                    placeholder="Your Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={confirmPassword}
                    onChange={(e) =>
                      dispatch(setConfirmPassword(e.target.value))
                    }
                    placeholder="Confirm Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                {error && <p className="text-red-500">{error}</p>}

                <div class="mt-6">
                  <button
                    class={
                      (isLoading
                        ? " cursor-wait disabled"
                        : " cursor-pointer") +
                      " w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-400 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
                    }
                    onClick={handleSubmit}
                    disabled={isLoading}
                  >
                    สมัครสมาชิก
                  </button>
                </div>
              </div>

              <p class="mt-6 text-sm text-center text-gray-400">
                คุณมีบัญชีอยู่แล้วใช่หรือไม่?{" "}
                <a
                  href="/login"
                  class="text-red-500 focus:outline-none focus:underline hover:underline"
                >
                  ลงชื่อเข้าใช้
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
