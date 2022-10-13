import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PokemonSearch = ({ keyword, onDataChange }) => {
  return (
    <div className="flex justify-center mb-4 h-10 w-full">
      <div className="flex items-strech justify-center w-full bg-gray-200 max-w-xl rounded-lg hover:bg-gray-300 duration-200 hover:duration-200 dark:bg-dark2 dark:hover:bg-dark3 ">
        <div className="flex items-center ml-4 mr-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-black dark:text-yellow-300"
          />
        </div>
        <input
          className=" PokemonSearch  rounded-lg  cursor-text text-black  w-full bg-transparent max-w-xl focus:outline-none dark:placeholder:text-white dark:text-white"
          placeholder=" What Pokémon are you looking for?"
          value={keyword}
          onChange={(e) => onDataChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PokemonSearch;
