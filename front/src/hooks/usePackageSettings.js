import { useContext, useEffect, useState } from 'react'
import { calculatePrice } from '../utils/utils'
import { GlobalContext } from '../context/GlobalContext'

export const usePackageSettings = (onChangePackage) => {
  const [packageMass, setPackageMass] = useState()
  const [packageHeight, setPackageHeight] = useState()
  const [packageWidth, setPackageWidth] = useState()
  const [packageLength, setPackageLength] = useState()

  const { setCalculatedCompanies } = useContext(GlobalContext)

  useEffect(() => {
    if (
      packageMass !== undefined ||
      packageHeight !== undefined ||
      packageWidth !== undefined ||
      packageLength !== undefined
    ) {
      onChangePackage({
        mass: packageMass,
        height: packageHeight,
        width: packageWidth,
        length: packageLength,
      })
      localStorage.setItem(
        'package',
        JSON.stringify({
          mass: packageMass,
          height: packageHeight,
          width: packageWidth,
          length: packageLength,
        }),
      )
      setCalculatedCompanies(calculatePrice())
    }
  }, [packageMass, packageHeight, packageWidth, packageLength])

  const onChangePackageMass = (value) => {
    setPackageMass(value)
  }
  const onChangePackageHeight = (value) => {
    setPackageHeight(value)
  }
  const onChangePackageWidth = (value) => {
    setPackageWidth(value)
  }
  const onChangePackageLength = (value) => {
    setPackageLength(value)
  }

  useEffect(() => {
    const { mass, height, width, length } = JSON.parse(
      localStorage.getItem('package') || '{}',
    )
    setPackageMass(mass)
    setPackageWidth(width)
    setPackageHeight(height)
    setPackageLength(length)
  }, [])

  return {
    packageMass,
    packageHeight,
    packageWidth,
    packageLength,
    onChangePackageHeight,
    onChangePackageWidth,
    onChangePackageLength,
    onChangePackageMass,
  }
}
