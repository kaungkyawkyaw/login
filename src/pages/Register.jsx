
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRegisterMutation } from "../feature/api/authApi";

const Register = () => {
  const [register] = useRegisterMutation();
  const form = useForm({
    initialValues: {
      username: "",
      email: "",
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
          <h1>Register</h1>
          <form
            onSubmit={form.onSubmit(async (values) => await register(values))}
          >
            <TextInput
              withAsterisk
              label="Username"
              placeholder="Username"
              {...form.getInputProps("username")}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="password"
              {...form.getInputProps("password")}
            />

            <div className="flex justify-end mt-10">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
