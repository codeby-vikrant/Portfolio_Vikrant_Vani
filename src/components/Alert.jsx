const Alert = ({ type, text }) => {
  return (
    <div className="fixed z-50 flex items-center justify-center bottom-5 right-5">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-500" : "bg-royal"
        } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md p-5`}
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-lavender"
          }`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
