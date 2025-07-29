import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({ label, type, placeholder, onChange, defaultValue,value }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col ">
      <label className="text-sm pb-2" htmlFor={label}>
        {label}
      </label>
      <div className="relative">
        <input
          onChange={onChange}
          className="border-[1.5px] border-gray-400 rounded-md px-3 py-2 w-full"
          type={
            type !== "password" ? type : !showPassword ? "password" : "text"
          }
          id={label}
          value={value}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
        {type === "password" && (
          <div className="absolute hover:cursor-pointer right-3 top-1/2 transform -translate-y-1/2">
            {showPassword ? (
              <EyeOff size={16} onClick={() => setShowPassword(false)} />
            ) : (
              <Eye size={16} onClick={() => setShowPassword(true)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
