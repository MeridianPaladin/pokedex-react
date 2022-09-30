import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const PokemonSearch = ({ data, onDataChange }) => {
  const [keyword, setKeyword] = React.useState("");
  const [searchResult, setSearchResult] = React.useState([]);

  const onSearchValueChange = (event) => {
    setKeyword(event.target.value);
    const results = searchResult.filter((item) => item.name.includes(keyword));
    onDataChange(results);
  };

  React.useEffect(() => {
    setSearchResult(data);
  }, [data]);

  return (
    <div className="flex justify-center mb-4 h-10 w-full">
      <div className="flex items-strech justify-center w-full bg-gray-200 max-w-xl rounded-lg hover:bg-gray-300 duration-200 hover:duration-200">
        <div className="flex items-center ml-4 mr-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <input
          className=" PokemonSearch  rounded-lg  cursor-text text-black  w-full bg-transparent max-w-xl focus:outline-none"
          placeholder=" What Pokémon are you looking for?"
          value={keyword}
          onChange={onSearchValueChange}
        />
      </div>
    </div>
  );
};

export default PokemonSearch;
