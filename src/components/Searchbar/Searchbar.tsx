/* eslint-disable react/display-name */
import { InputGroup, Input, InputLeftElement, Icon, Text, Box } from '@chakra-ui/react';
import { useDebounce } from '@umijs/hooks';
import queryString from 'query-string';
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

import { SearchbarTypes } from './types';

export const Searchbar = ({
  queryParam = 'q',
  placeholder = 'Pesquisar...',
  debounceTime = 500,
}: SearchbarTypes) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const debouncedValue = useDebounce(searchValue, debounceTime);

  useEffect(() => {
    const query = queryString.parse(location.search);
    query[queryParam] = debouncedValue || undefined;

    if (navigate) {
      navigate({
        search: queryString.stringify(query),
      });
    }
  }, [queryParam, debouncedValue, searchValue, location.search, navigate]);

  useEffect(() => {
    const { [queryParam]: queryValue } = queryString.parse(location.search);
    if (queryValue) {
      setSearchValue(queryValue);
    }
  }, [location.search, queryParam]);

  return (
    <Box mr="0.6rem">
      <Text
        marginLeft="1rem"
        alignSelf="center"
        fontSize="0.875rem"
        marginBottom="0.25rem"
        color="white"
      >
        Pesquisar
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FiSearch} color="brand.600" />
        </InputLeftElement>
        <Input
          placeholder={placeholder}
          backgroundColor="white"
          color="black"
          width="13.125rem"
          height="2.25rem"
          borderColor="brand.600"
          focusBorderColor="brand.600"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></Input>
      </InputGroup>
    </Box>
  );
};
