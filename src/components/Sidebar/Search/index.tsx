import { FC, useCallback, useMemo, useState } from "react";
import debounce from "lodash/debounce";
import SearchIcon from "elements/Icons/Search";
import TextField from "elements/Form/TextField";
import { useAppDispatch } from "store";
import { getSearchResults, resetSearchResults } from "store/thunks/search";

interface ISearchProps {}

const Search: FC<ISearchProps> = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useAppDispatch();

  const handleDebounceFn = useCallback((keyword: any) => {
    if(keyword)
      dispatch(getSearchResults(keyword))
    else
      dispatch(resetSearchResults())
  }, [dispatch])
  
  const debounceFn = useMemo(() => debounce(handleDebounceFn, 1000), [handleDebounceFn]);

  const handleChange = (event: any) => {
    setKeyword(event.target.value);
    debounceFn(event.target.value);
};

  return (
    <TextField
      LeftIcon={SearchIcon}
      type="text"
      name="search"
      placeholder="Search on Twitter"
      value={keyword}
      onChange={handleChange}
    />
  );
};

export default Search;
