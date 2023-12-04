import { Button, Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRegisterMutation } from "../feature/api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [register] = useRegisterMutation();
  const [dbutton, setDbutton] = useState(false);
  const [isloading, setIsLoading] = useState(null);

  const nav = useNavigate();
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validate: {
      username: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      password: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <div className=" flex justify-center items-center h-screen">
        <fieldset className=" border rounded-lg shadow-md p-7">
        <legend className=" text-2xl -translate-y-1 font-bold">Register</legend>
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              setDbutton(true);
              setIsLoading(true);
              const { data } = await register(values);
              setIsLoading(false);
              console.log(data);
              if (data._id) {
                return nav("/login");
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
                label="Username"
                className=" w-full"
                placeholder="Username"
                {...form.getInputProps("username")}
              />
              <TextInput
                withAsterisk
                label="Email"
                className=" w-full"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                withAsterisk
                label="Password"
                className=" w-full"
                placeholder="password"
                {...form.getInputProps("password")}
              />
              </div>
              <div className=" flex justify-center items-center">
                <p >Already Account? <Link to={"/login"}><span className=" text-sm text-blue-600">Login</span></Link> </p>
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

export default Register;
