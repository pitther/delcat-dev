import Gradient from 'javascript-color-gradient'

export const p5constrain = function (n, low, high) {
  return Math.max(Math.min(n, high), low)
}

export const p5map = function (n, start1, stop1, start2, stop2, withinBounds) {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2
  if (!withinBounds) {
    return newval
  }
  if (start2 < stop2) {
    return p5constrain(newval, start2, stop2)
  } else {
    return p5constrain(newval, stop2, start2)
  }
}

export const calculatePrice = () => {
  let companies = JSON.parse(localStorage.getItem('companies') || '[]')
  const regions = JSON.parse(localStorage.getItem('regions') || '[]')
  const { from, to } = JSON.parse(localStorage.getItem('address') || '{}')
  const { mass, height, width, length } = JSON.parse(
    localStorage.getItem('package') || '{}',
  )
  const switchServices = JSON.parse(
    localStorage.getItem('switchServices') || '[]',
  )

  companies.forEach((company) => {
    company.show = true
  })
  console.log(from, to)
  if (from?.name) {
    companies.forEach((company) => {
      if (company.show)
        company.show = !!company.cities.includes(from?._id.toString())
    })
  }

  if (to?.name) {
    companies.forEach((company) => {
      if (company.show)
        company.show = !!company.cities.includes(to?._id.toString())
    })
  }
  const checker = (arr, target) => target.every((v) => arr.includes(v))

  const filteredChecks = switchServices
    .filter((x) => x.checked)
    .map((x) => x._id)

  companies.forEach((company) => {
    if (
      !checker(
        company.services.map((x) => x.id.toString()),
        filteredChecks,
      )
    ) {
      company.show = false
    }
  })

  if (from?.name && to?.name && mass && height && width && length) {
    companies
      .filter((x) => x.show)
      .forEach((company) => {
        const coefMass = 8
        const coefVolume = 30
        const volume = height * width * length
        let packageSum

        //

        packageSum = 20 + mass * coefMass + volume * coefVolume

        //

        let factor = 1
        if (from?._id === to?._id) {
          factor = company.factor.city
        } else if (from?.regionID === to?.regionID) {
          factor = company.factor.region
        } else {
          factor = company.factor.country
        }
        if (factor == 0) {
          company.show = false
        } else {
          company.price = packageSum * factor

          let additionalPrice = 0
          filteredChecks.forEach((id) => {
            const service = company.services.find((x) => x.id.toString() === id)
            const fixedPrice = service.fixedPrice
            const percentPrice = service.percentPrice
            additionalPrice += fixedPrice + percentPrice * company.price
          })

          company.price += additionalPrice
        }

        //company.price = Math.random() * 900
      })

    const maxPrice = companies.map((x) => x.price).sort((a, b) => b - a)[0]
    const minPrice = companies.map((x) => x.price).sort((a, b) => a - b)[0]

    const colorGradient = new Gradient()
    colorGradient.setGradient('#52c41a', '#f5f783', '#f5222d')
    colorGradient.setMidpoint(100)

    const priceRange = colorGradient.getArray()

    companies
      .filter((x) => x.show)
      .forEach((company) => {
        if (company.price === 0) {
          company.show = false
        }
        company.color =
          priceRange[
            Math.floor(p5map(company.price, minPrice, maxPrice + 1, 0, 100))
          ]
      })
  }
  companies = companies.filter((x) => x.show)
  companies = companies.sort((a, b) => a.price - b.price)

  return companies
}
