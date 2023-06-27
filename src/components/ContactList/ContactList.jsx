import { Ul, Button, Li } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from 'redux/contactsSlice';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactList = () => {
  const { data: contacts, error, isFetching } = useGetContactsQuery();
  console.log('ContactList  contacts:', contacts);
  const [deleteContact] = useDeleteContactsMutation();
  const filter = useSelector(getFilter);

  const filteredContacts = filter => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {isFetching && <Spinner />}
      {error && <p>{error.data}</p>}
      {contacts && (
        <Ul>
          {filteredContacts(filter).map(({ id, name, number }) => (
            <Li key={id}>
              <div>
                {name}: {number}
              </div>
              <Button onClick={() => deleteContact(id)} type="button">
                Delete
              </Button>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
};
