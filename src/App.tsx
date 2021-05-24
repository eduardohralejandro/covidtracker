import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GetCountry } from './redux/actions/countriesActions';
import { RootStore } from './redux/Store';
import './styles.css';

 
export const App = () =>  {
  const dispatch = useDispatch();
  const countryState = useSelector((state: RootStore) =>  state.country);
    useEffect(() => {
      dispatch(GetCountry());
    }, [dispatch]);

  return (
    <div>
      test
    </div>
  )
}