/* eslint-disable react/display-name */
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Menu,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuButton,
  Text,
} from '@chakra-ui/react';
import { useDebounce } from '@umijs/hooks';
import queryString from 'query-string';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FilterSelectProps } from './types';
export const FilterSelect = ({ title = 'Filtro', queryParam = 'q' }: FilterSelectProps) => {
  const [selected, setSelected] = useState<string | string[]>('');
  const navigate = useNavigate();
  const location = useLocation();

  const debouncedValue = useDebounce(selected, 500);

  useEffect(() => {
    const query = queryString.parse(location.search);
    query[queryParam] = debouncedValue || undefined;

    if (navigate) {
      navigate({
        search: queryString.stringify(query),
      });
    }
  }, [queryParam, debouncedValue, selected, location.search, navigate]);

  useEffect(() => {
    const { [queryParam]: queryValue } = queryString.parse(location.search);
    if (queryValue) {
      setSelected(queryValue);
    }
  }, [location.search, queryParam]);

  return (
    <Box>
      <Text
        marginLeft="1rem"
        alignSelf="center"
        fontSize="0.875rem"
        marginBottom="0.25rem"
        color="white"
      >
        {title}
      </Text>
      <Menu closeOnSelect={false}>
        <MenuButton
          mr="0.5rem"
          placeholder="Selecione"
          backgroundColor="white"
          color="black"
          width="10.125rem"
          height="2.25rem"
          border="none"
          focusBorderColor="primary.600"
          borderRadius="var(--chakra-radii-md)"
        >
          <Text textAlign="left" pl="1rem" display="flex" justifyContent="space-between">
            Selecione <ChevronDownIcon position="relative" right="10px" top="5px" />
          </Text>
        </MenuButton>
        <MenuList>
          <MenuOptionGroup type="checkbox" onChange={(e) => setSelected(e)}>
            <MenuItemOption value="deepblue">DeepBlue</MenuItemOption>
            <MenuItemOption value="terra">Terra</MenuItemOption>
            <MenuItemOption value="undefined">Undefined</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};
