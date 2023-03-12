import { useEffect, useState } from 'react';
import { MockServer } from './mirage/mock-server';

const environment = process.env.NODE_ENV;

if (import.meta.env.MODE !== 'production') {
  MockServer({ environment });
}

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        setError('error vayo');
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      <ul data-testid="users">
        {users.length > 0
          ? users.map((user: any) => <li key={user.id}>{user.name}</li>)
          : 'loading'}
        {error.length > 0 ? 'errored' : null}
      </ul>
    </div>
  );
}

export default App;
