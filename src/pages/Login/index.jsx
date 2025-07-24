import { LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Global/Input";
import Button from "../../components/Global/Button";
import { useState } from "react";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!email || !password) {
      setError("Email and password are required");
      return;
    }

    if(!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if(password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError("");
    setLoading(!loading);
    navigate("/dashboard");
  };

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
          {error && (
            <div className="text-red p-4 border-[1.5px] rounded-lg border-red">
              {error}{" "}
            </div>
          )}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <Button
          Icon={<LogIn size={16} />}
          text="Sign In"
          onClick={(e) => {
            handleLogin(e);
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
