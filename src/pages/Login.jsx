import { PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useGetloginMutation } from "../feature/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../feature/services/authSlice";
import { useState } from "react";
import { Loader } from "@mantine/core";

const Login = () => {
  const [getlogin, isAdmin] = useGetloginMutation();
  const [dbutton, setDbutton] = useState(false);
  const [isloading, setIsLoading] = useState(null);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      password: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <fieldset className=" border rounded-lg shadow-md p-7">
        <legend className=" text-2xl -translate-y-1 font-bold">Login</legend>
        <form 
          onSubmit={form.onSubmit(async (values) => {
            try {
              setDbutton(true);
              setIsLoading(true);
              const { data } = await getlogin(values);
              setIsLoading(false);

              console.log(data, "login");
              dispatch(adduser(data));
              if (data?.accessToken && !data?.isAdmin) {
                return nav("/");
              } else if (isAdmin) {
                return nav("/admin");
              }
            } catch (error) {
              console.log(error);
            }
          })}
        >
          <div className=" flex flex-col justify-evenly w-[250px] gap-10  items-center">
            <div className="flex w-full flex-col justify-center gap-3 items-center">
              <TextInput
                withAsterisk
                className=" w-full"
                label="Username"
                placeholder="Username"
                {...form.getInputProps("username")}
              />
              <PasswordInput
                withAsterisk
                className=" w-full"
                label="Password"
                placeholder="password"
                {...form.getInputProps("password")}
              />
            </div>
            <div className=" flex justify-center items-center">
              <p >Account? <Link to={"/register"}><span className=" text-sm text-blue-600">Register</span></Link> </p>
            </div>
            <div className="flex justify-center w-[90%] mx-auto text-white font-semibold bg-blue-500 py-1 rounded-xl active:bg-blue-400 items-center">
              {isloading ? (
                <button
                  className=" flex justify-center place-items-baseline"
                  disabled={dbutton}
                >
                  <span>Loading</span>
                  <Loader color="rgba(255, 255, 255, 1)" size="sm" type="dots" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={dbutton}
                >
                Login
                </button>
              )}
            </div>
          </div>
        </form>
        </fieldset>
      </div>
    </>
  );
};

export default Login;
