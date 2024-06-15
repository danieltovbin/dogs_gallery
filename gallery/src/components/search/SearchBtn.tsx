import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import { FC } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from './SearchStyles';

interface SearchBtnProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBtn: FC<SearchBtnProps> = ({ setSearchTerm }) => {

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(ev.target.value)
  }

  return (
    <Box sx={{ mb: 4 }}>
      <Search >
        <SearchIconWrapper>
          <SearchIcon sx={{ color: 'gray' }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="What are you looking for?"
          onChange={handleSearchChange}
        />
      </Search>
    </Box>

  );
}

export default SearchBtn
