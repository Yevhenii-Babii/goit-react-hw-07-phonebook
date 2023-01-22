import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchApi } from 'redux/operations';

export function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const filterName = () => {
    const filterName = filter.toLowerCase().trim();
    return contacts.filter(user =>
      user.name.toLowerCase().trim().includes(filterName)
    );
  };

  return (
    <>
      <Form />
      <List contacts={filterName()} />
      <Filter />
    </>
  );
}
