import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greeting/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((store) => store.greeting.greeting);

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  return <h1>{greeting}</h1>;
}

export default Greeting;
