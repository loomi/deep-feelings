import { List, ListItem, ListIcon, IconButton, Icon } from '@chakra-ui/react';
import { MdDone, MdKeyboardArrowRight } from 'react-icons/md';

import * as LC from '@/components/LC';

export const SurveysTable = () => {
  return (
    <List spacing={3} mt={8} bg="white" borderRadius="md" padding={5}>
      <LC.Horizontal spaceBetween>
        <ListItem py={3}>
          <ListIcon as={MdDone} color="white" />
          Enquete 30/10
        </ListItem>
        <IconButton icon={<Icon as={MdKeyboardArrowRight} />} aria-label="" />
      </LC.Horizontal>
      <LC.Horizontal spaceBetween>
        <ListItem py={3}>
          <ListIcon as={MdDone} color="green.500" />
          Enquete 29/10
        </ListItem>
        <IconButton icon={<Icon as={MdKeyboardArrowRight} />} aria-label="" />
      </LC.Horizontal>
      <LC.Horizontal spaceBetween>
        <ListItem py={3}>
          <ListIcon as={MdDone} color="green.500" />
          Enquete 28/10
        </ListItem>
        <IconButton icon={<Icon as={MdKeyboardArrowRight} />} aria-label="" />
      </LC.Horizontal>
      <LC.Horizontal spaceBetween>
        <ListItem py={3}>
          <ListIcon as={MdDone} color="green.500" />
          Enquete 27/10
        </ListItem>
        <IconButton icon={<Icon as={MdKeyboardArrowRight} />} aria-label="" />
      </LC.Horizontal>
    </List>
  );
};
