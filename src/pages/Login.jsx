import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRegisterMutation } from "../feature/api/authApi";

const Login = () => {
  const [register] = useRegisterMutation();
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },

    validate: {
      username: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <>          
      <div className=" flex justify-center items-center h-screen">
        <div className=" ">
          <h1>Login</h1>
          <form
            onSubmit={form.onSubmit(async (values) => await register(values))}
          >
            <TextInput
              withAsterisk
              label="Username"
              placeholder="Username"
              {...form.getInputProps("username")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="password"
              {...form.getInputProps("password")}
            />

            <div className="flex justify-end mt-10">
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
