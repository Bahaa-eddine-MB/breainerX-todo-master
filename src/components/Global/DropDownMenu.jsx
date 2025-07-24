import { ChevronDown, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const DropDownMenu = ({ options, onOptionChose, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [title, setTitle] = useState("All Tasks");
  const selectRef = useRef(null);
  function handleClickOutside(event) {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={selectRef} className="relative">
        {label && ( <p className="text-sm pb-2">{label}</p>)}
       
        <p
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="flex items-center bg-white px-4 py-2 border-[1.5px] rounded-lg gap-12 transition-all duration-500 hover:cursor-pointer"
        >
          {title} <ChevronDown size={16} />{" "}
        </p>
        {isOpen && (
          <div className="absolute top-12 z-30 left-0 w-full bg-white border-[1.5px] rounded-lg transition-all duration-500">
            {options.map((option, index) => (
              <div key={index} className={` `} onClick={() => {}}>
                <p
                  onClick={() => {
                    setTitle(option);
                    setIsOpen(false);
                    onOptionChose(option);
                  }}
                  className="py-2 flex gap-2 items-center  hover:bg-gray-100 p-2 hover:cursor-pointer"
                >
                  {title === option && <Check size={16} />} {option}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DropDownMenu;
