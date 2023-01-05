import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactButton } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {number}
      </p>
      <ContactButton
        type="button"
        onClick={() => {
          dispatch(deleteContact({ id, name }));
        }}
      >
        Delete
      </ContactButton>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
