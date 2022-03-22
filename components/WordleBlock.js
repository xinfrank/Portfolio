export const WordleBlock = ({ letter, status }) => {
  if (status === "in") {
    return (
      <div className="bg-wordle-in h-16 w-16 flex items-center justify-center">
        <p className="font-bold text-4xl text-neutral-50 inline">{letter}</p>
      </div>
    );
  } else if (status === "found") {
    return (
      <div className="bg-wordle-found h-16 w-16 flex items-center justify-center">
        <p className="font-bold text-4xl text-neutral-50 inline">{letter}</p>
      </div>
    );
  } else {
    return (
      <div className="bg-wordle-out h-16 w-16 flex items-center justify-center">
        <p className="font-bold text-4xl text-neutral-50 inline">{letter}</p>
      </div>
    );
  }
};
