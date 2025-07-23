import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Global/Input";
import Button from "../../components/Global/Button";
import { useState } from "react";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <main className="bg-background h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary text-4xl font-bold">TodoMaster</h1>
      <p className="pt-2 pb-4">Organize your tasks efficiently</p>
      <form className="bg-white border-[1.5px] border-gray-300 rounded-lg p-6  shadow-md flex flex-col w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%]">
        <h2 className="text-primary text-center font-semibold text-xl">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500 pb-8">
          Sign in to your account to continue
        </p>
        <div className="space-y-4 flex flex-col pb-6">
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <Button
          Icon={<LogIn size={16} />}
          text="Sign In"
          onClick={(e) => {
            e.preventDefault();
            setLoading(!loading);
            navigate("/dashboard");
          }}
          isLoading={loading}
        />

        <p className="text-center pt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link className="text-primary hover:underline" to={"/sign-up"}>
            Sign up here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
