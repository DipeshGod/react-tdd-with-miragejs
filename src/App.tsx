import { useEffect, useState } from 'react';
import { MockServer } from './mirage/mock-server';

const environment = process.env.NODE_ENV;

if (import.meta.env.MODE !== 'production') {
  MockServer({ environment });
}

function App() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('data', data);
        setUsers(data.users);
      })
      .catch((err) => {
        console.log('handle errors', err);
      });
  }, []);

  return (
    <ul>
      {users.length > 0 &&
        users.map((user: any) => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}

export default App;
