import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { Contact } from 'components/Contact/Contact';
import { List, ListItem, Text, Span } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return contacts.length !== 0 && filteredContacts.length !== 0 ? (
    <List>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <Contact name={name} number={number} id={id}></Contact>
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
