const Button = ({icon, text}) => {
    return (
       <button className="flex bg-violet-500 py-2 px-4 rounded-xl gap-2 text-white items-center hover:bg-violet-600 duration-300 cursor-pointer">
        {icon} {text}
       </button>
    );
};

export default Button;