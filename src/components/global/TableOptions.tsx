import { useState } from "react";

const Dropdown = ({
  close,
  options,
}: {
  close: () => void;
  options: { title: string | undefined; action: () => void | undefined }[];
}) => {
  return (
    <div
      className={`absolute z-50 ${
        // lastUser?.id === user?.id ? "bottom-2" :
        "top-10"
      } border-dark-6 shadow-3xl right-4 w-52 border bg-white`}
    >
      {options.map((option) =>
        option.title ? (
          <div
            key={option.title}
            className="hover:bg-gray-6 text-renaissance-black cursor-pointer p-3 text-sm font-medium"
            onClick={() => {
              close();
              option.action();
            }}
          >
            {option.title}
          </div>
        ) : null,
      )}
    </div>
  );
};

const TableOptions = ({
  options,
}: {
  options: { title: string | undefined; action: () => void | undefined }[];
}) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="h-6 w-6">
        <button
          className="relative block w-full"
          onClick={() => setIsOpened(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14ZM6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14ZM12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14Z"
              fill="#718096"
            />
          </svg>
        </button>
      </div>

      {isOpened && (
        <Dropdown options={options} close={() => setIsOpened(false)} />
      )}

      {/* overlay */}
      <div
        className={
          isOpened
            ? "fixed left-0 top-0 z-30 block h-full w-full bg-transparent"
            : "hidden"
        }
        onClick={() => setIsOpened(false)}
      ></div>
    </>
  );
};

export default TableOptions;