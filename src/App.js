import { useState } from 'react'
import useFetchJobs from './hooks/useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './components/Job'
import JobsPagination from './components/JobsPagination'

function App() {
  const [ params, setParams ] = useState({})
  const [ page, setPage ] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  return (
    <Container className="my-4">
      <h1 className="mb-4">Работа с hh.ru</h1>
      <JobsPagination page={ page } setPage={ setPage } hasNextPage={ hasNextPage } />
      { loading && <h1>Загрузка...</h1> }
      { error && <h1>Ошбика. Попробуйте перезагрузить страницу.</h1> }
      { jobs.map(job => {
        return <Job key={ job.id } job={ job } />
      }) }
      <JobsPagination page={ page } setPage={ setPage } hasNextPage={ hasNextPage } />
    </Container>
  );
}

export default App;
