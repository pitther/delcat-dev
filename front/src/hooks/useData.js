import { useEffect, useState } from 'react'
import axios from 'axios'

export const useData = () => {
  const [companies, setCompanies] = useState([])
  const [cities, setCities] = useState([])
  const [services, setServices] = useState([])
  const [regions, setRegions] = useState([])

  const getData = async () => {
    setCompanies((await axios.get('/companies')).data)
    setServices((await axios.get('/services')).data)
    setCities((await axios.get('/cities')).data)
    setRegions((await axios.get('/regions')).data)
  }

  useEffect(() => {
    getData()
  }, [])
  return { companies, cities, services }
}
