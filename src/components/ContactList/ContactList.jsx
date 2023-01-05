import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem, Text, Span } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return contacts.length === 0 && isLoading ? (
    <Loader />
  ) : contacts.length !== 0 && filteredContacts.length !== 0 ? (
    <List>
      {filteredContacts.map(({ name, phone, id }) => (
        <ListItem key={id}>
          <Contact name={name} number={phone} id={id}></Contact>
        </ListItem>
      ))}
    </List>
  ) : contacts.length === 0 ? (
    <Text>Unfortunately your contacts list is empty</Text>
  ) : (
    <Text>
      Your list does not contain the contact named
      <Span> {filter}</Span>
    </Text>
  );
};
