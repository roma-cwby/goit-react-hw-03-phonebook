import propTypes from 'prop-types';
import { Contact } from './Contacts.styled';

export const Contacts = ({ contacts, onSearch, onDelete }) => {
  return (
    <Contact>
      <form onChange={e => onSearch(e.target.value)}>
        <label htmlFor="find">Find contact by name</label>
        <input type="text" id="find" />
      </form>

      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.number}</span>
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Contact>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};
