import { ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const DropDownMenu = ({ options, defaultTitle, onOptionChose, label }) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(defaultTitle);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      <div ref={ref} className="relative flex flex-col gap-2">
        {label && <label className="text-sm  ">{label}</label>}
        <p
          onClick={() => setShow(!show)}
          className="bg-white border-gray-300 px-4 py-2 border-[1.5px] h-10 rounded-md flex justify-between items-center gap-12 hover:cursor-pointer"
        >
          {title}{" "}
          <ChevronDown
            className={`${
              show ? "rotate-180" : "rotate-0"
            } transition-all duration-300  `}
            size={16}
          />
        </p>
        {show && (
          <ul className= {` ${label ? 'top-[75px]' : ' top-[45px]'} absolute z-40 left-0 right-0 bg-white border-gray-300  border-[1.5px] rounded-md  flex flex-col gap-1 p-1`} >
            {options.map((option, index) => {
              return (
                <li
                  onClick={() => {
                    setTitle(option);
                    setShow(false);
                    onOptionChose(option);
                  }}
                  className="transition-all flex items-center gap-2 duration-500 hover:bg-gray-200 hover:cursor-pointer px-3 py-1 rounded-md"
                  key={index}
                >
                  {option === title && <Check size={16} />} {option}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;
