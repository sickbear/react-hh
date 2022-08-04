import { useState } from 'react'
import useFetchJobs from './hooks/useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './components/Job'

function App() {
  const [ params, setParams ] = useState({})
  const [ page, setPagte ] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page)

  return (
    <Container className="my-4">
      { loading && <h1>Загрузка...</h1> }
      { error && <h1>Ошбика. Попробуйте перезагрузить страницу.</h1> }
      { jobs.map(job => {
        return <Job key={ job.id } job={ job } />
      }) }
    </Container>
  );
}

export default App;
