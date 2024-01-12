export function DeleteButton({ onClick, children }) {
    return (
      <button
        className="bg-red-500 px-4 py-1 rounded-md my-2 disabled:bg-indigo-300"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  

