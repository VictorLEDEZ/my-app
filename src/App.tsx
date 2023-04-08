import { useQuery } from 'react-query';

function App() {
  const { isLoading, error, data } = useQuery('todos', () =>
    fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error fetching todos</div>;

  return (
    <div>
      {data.map((todo: any) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
