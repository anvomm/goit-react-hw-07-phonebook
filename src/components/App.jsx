import { GlobalStyles } from 'utils/GlobalStyles';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledToastContainer } from './ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />

        <ContactList />
      </Section>
      <StyledToastContainer />

      <GlobalStyles />
    </div>
  );
};
