import { useReducer, useEffect } from 'react'
import axios from 'axios'

const  ACTION = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

const BASE_URL = 'https://api.hh.ru/vacancies'

function reducer(state, action) {
  switch (action.type) {
    case ACTION.MAKE_REQUEST:
      return { loading: true, jobs: [] }
    case ACTION.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs }
    case ACTION.ERROR:
      return { ...state, loading: false, error: action.payload.error, jobs: [] }
    default:
      return state
  }
}

export default function useFetchJobs(params, page) {
  const [ state, dispatch ] = useReducer(reducer, { jobs: [], loading: true})
  
  useEffect(() => {
    dispatch({ type: ACTION.MAKE_REQUEST })
    axios.get(BASE_URL).then(res => {
      console.log(res.data)
      dispatch({ type: ACTION.GET_DATA, payload: { jobs: res.data.items } })
    }).catch(e => {
      dispatch({ type: ACTION.ERROR, payload: { error: e } })
    })
  }, [params, page])

  return state
}