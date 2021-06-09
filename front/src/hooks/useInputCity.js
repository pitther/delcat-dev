import { useEffect, useState } from 'react'
import axios from 'axios'

export const useInputCity = (onChangeCity) => {
  const [cityList, setCityList] = useState([])
  const [cityFromValid, setCityFromValid] = useState(null)
  const [cityToValid, setCityToValid] = useState(null)
  const [cityFrom, setCityFrom] = useState(null)
  const [cityTo, setCityTo] = useState(null)

  const onChangeFrom = (data) => {
    setCityFrom({
      name: data,
    })

    const city = cityList.find(
      (x) => x.value.toLowerCase() === data.toLowerCase(),
    )

    if (city) {
      setCityFrom({
        name: city.value,
        _id: city._id.toString(),
        regionID: city.regionID,
      })
      setCityFromValid({
        name: city.value,
        _id: city._id.toString(),
        regionID: city.regionID,
      })
    } else {
      setCityFromValid({
        name: '',
      })
    }
  }
  const onChangeTo = (data) => {
    setCityTo({
      name: data,
    })
    const city = cityList.find(
      (x) => x.value.toLowerCase() === data.toLowerCase(),
    )

    if (city) {
      setCityTo({
        name: city.value,
        _id: city._id.toString(),
        regionID: city.regionID,
      })
      setCityToValid({
        name: city.value,
        _id: city._id.toString(),
        regionID: city.regionID,
      })
    } else {
      setCityToValid({
        name: '',
      })
    }
  }

  useEffect(() => {
    if (cityFromValid !== null || cityToValid !== null) {
      onChangeCity(cityFromValid, cityToValid)
    }
  }, [cityFromValid, cityToValid])

  const getCityList = async () => {
    const response = await axios.get('/cities')
    const data = await response.data

    setCityList(
      data.map((x) => ({
        ...x,
        _id: x._id,
        value: x.name,
      })),
    )
  }

  useEffect(() => {
    getCityList()
    const { from, to } = JSON.parse(localStorage.getItem('address') || '{}')
    setCityFrom(from)
    setCityTo(to)
    setCityFromValid(from)
    setCityToValid(to)
  }, [])

  return {
    cityList,
    cityFrom,
    cityTo,
    onChangeFrom,
    onChangeTo,
  }
}
