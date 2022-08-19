const SearchBar = (props) => {
    const { label, searchTerm, handleInput } = props;
  
    const capitalizedLabel = label[0].toUpperCase() + label.slice(1);
  
    return (
      <form className="search-bar">
        <label htmlFor={label} className="search-bar__label">
          {capitalizedLabel}
        </label>
        <input
          type="text"
          name={label}
          value={searchTerm}
          onInput={handleInput}
          className="search-bar__input"
        />
      </form>
    );
  };
  
  export default SearchBar;