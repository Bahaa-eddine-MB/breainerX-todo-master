import { UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Global/Input";
import Button from "../../components/Global/Button";
import { useState } from "react";
const SignUpPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <main className="bg-background h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary text-4xl font-bold">TodoMaster</h1>
      <p className="pt-2 pb-4">Create your account to get started</p>
      <form className="bg-white border-[1.5px] border-gray-300 rounded-lg p-6  shadow-md flex flex-col w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%]">
        <h2 className="text-primary text-center font-semibold text-xl">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-500 pb-8">
          Sign up to start organizing your tasks
        </p>
        <div className="space-y-4 flex flex-col pb-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
          />
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
           <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />
        </div>
        <Button
          Icon={<UserPlus size={16} />}
          text="Create Account"
          onClick={(e) => {
            e.preventDefault();
            setLoading(!loading);
            navigate("/dashboard");
          }}
          isLoading={loading}
        />

        <p className="text-center pt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link className="text-primary hover:underline" to={"/sign-in"}>
            Sign in here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignUpPage;
