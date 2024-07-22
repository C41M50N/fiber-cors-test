import './App.css'
import * as api from './api';
import { useQuery } from '@tanstack/react-query'

function App() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['ping'],
    queryFn: api.ping,
    staleTime: Infinity
  })

  return (
    <div>
      {isLoading && (
        <span>loading...</span>
      )}
      {!isLoading && (
        <button onClick={() => refetch()}>Ping</button>
      )}
      {!isLoading && data && (
        <span>{data}</span>
      )}
    </div>
  )
}

export default App
