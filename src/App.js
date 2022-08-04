import useFetchJobs from './hooks/useFetchJobs'
import { Container } from 'react-bootstrap'

function App() {
  const { jobs, loading, error } = useFetchJobs()

  return (
    <Container>
      { loading && <h1>Загрузка...</h1> }
      { error && <h1>Ошбика. Попробуйте перезагрузить страницу.</h1> }
      { <div>{ jobs.length }</div> }
    </Container>
  );
}

export default App;
