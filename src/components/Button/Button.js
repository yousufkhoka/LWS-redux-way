

const Button = ({children , hendelar}) => {
    return (
        <button

            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={hendelar}
          >
            {children}
          </button>
    );
};

export default Button;