import React, { useContext, useEffect, useRef, useState } from 'react'
import { AutoComplete, Divider, Input, InputNumber, Switch } from 'antd'
import axios from 'axios'
import { Row, Col } from 'antd'
import {
  CheckOutlined,
  CloseOutlined,
  LoginOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { useInputCity } from '../hooks/useInputCity'
import { usePackageSettings } from '../hooks/usePackageSettings'
import { GlobalContext } from '../context/GlobalContext'
import { calculatePrice } from '../utils/utils'

const PackageForm = ({ minPrice }) => {
  const [services, setServices] = useState([])
  const { setCalculatedCompanies } = useContext(GlobalContext)
  const onChangeCity = (cityFrom, cityTo) => {
    localStorage.setItem(
      'address',
      JSON.stringify({
        from: cityFrom,
        to: cityTo,
      }),
    )

    setCalculatedCompanies(calculatePrice())
  }

  const onChangePackage = (pkg) => {}

  const { cityFrom, cityTo, cityList, onChangeFrom, onChangeTo } =
    useInputCity(onChangeCity)

  const {
    packageWidth,
    packageHeight,
    packageLength,
    packageMass,
    onChangePackageMass,
    onChangePackageLength,
    onChangePackageWidth,
    onChangePackageHeight,
  } = usePackageSettings(onChangePackage)

  const getServices = async () => {
    const response = await axios.get('/services')
    const data = response.data
    setServices(data)
  }

  useEffect(() => {
    getServices()
  }, [])

  const handleChangeService = (value, id) => {
    const currentServices = JSON.parse(
      localStorage.getItem('switchServices') || '[]',
    )

    const newServices = JSON.parse(JSON.stringify(currentServices))
    const index = newServices.findIndex((x) => x._id === id)
    if (index !== -1) {
      newServices[index].checked = value
    } else {
      newServices.push({
        checked: value,
        _id: id,
      })
    }
    localStorage.setItem('switchServices', JSON.stringify(newServices))
    setCalculatedCompanies(calculatePrice())
  }

  return (
    <div className={'site-layout-content-form'}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '25px' }}>Розрахунок вартості доставки</span>
      </div>
      <Divider orientation="center">Адреса*</Divider>

      <Row className={'form-row-flex'} style={{ textAlign: 'center' }}>
        <Col span={10} style={{ minWidth: '190px' }}>
          <div>
            <label style={{ display: 'block' }}>Звідки</label>
            <AutoComplete
              value={cityFrom?.name}
              options={cityList}
              style={{ minWidth: '180px', width: '150px' }}
              onChange={onChangeFrom}
              placeholder="Місто відправлення"
              notFoundContent="Місто не знайдено :("
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </div>
        </Col>
        <Col span={4} flex="auto">
          <div>&nbsp;</div>
          <div className="arrow right">&nbsp;</div>
        </Col>
        <Col span={10} style={{ minWidth: '190px' }}>
          <div style={{}}>
            <label style={{ display: 'block' }}>Куди</label>
            <AutoComplete
              value={cityTo?.name}
              options={cityList}
              style={{ minWidth: '180px' }}
              onChange={onChangeTo}
              placeholder="Місто доставки"
              notFoundContent="Місто не знайдено :("
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
                -1
              }
            />
          </div>
        </Col>
      </Row>

      <Divider orientation="center">Посилка*</Divider>
      <Col style={{ textAlign: 'center' }}>
        <Row style={{ minWidth: '190px' }}>
          <div style={{ textAlign: 'center', margin: 'auto' }}>
            <label style={{ display: 'block' }}>Вага</label>

            <InputNumber
              style={{
                minWidth: '180px',
                textAlign: 'center',
                maxWidth: '180px',
              }}
              placeholder="1 кг"
              value={packageMass}
              formatter={(value) => (value ? `${value} кг` : '')}
              step={0.5}
              min={0}
              onChange={onChangePackageMass}
            />
          </div>
        </Row>
        <br />
        <Row style={{ minWidth: '190px' }}>
          <div style={{ textAlign: 'center', margin: 'auto' }}>
            <label style={{ display: 'block' }}>Розмір</label>
            <Input.Group
              compact
              style={{ maxWidth: '500px', textAlign: 'center' }}
            >
              <InputNumber
                style={{ width: '33%' }}
                placeholder="Висота, м"
                value={packageHeight}
                formatter={(value) => (value ? `${value} м` : '')}
                step={0.5}
                min={0}
                onChange={onChangePackageHeight}
              />
              <InputNumber
                style={{ width: '33%' }}
                placeholder="Ширина, м"
                formatter={(value) => (value ? `${value} м` : '')}
                step={0.5}
                min={0}
                onChange={onChangePackageWidth}
                value={packageWidth}
              />
              <InputNumber
                style={{ width: '33%' }}
                placeholder="Довжина, м"
                formatter={(value) => (value ? `${value} м` : '')}
                step={0.5}
                min={0}
                onChange={onChangePackageLength}
                value={packageLength}
              />
            </Input.Group>
          </div>
        </Row>
      </Col>
      <Divider orientation="center">Додаткові послуги</Divider>
      <Row gutter={[16, 16]} style={{ textAlign: 'center' }}>
        {services.map(({ _id, name }) => (
          <Col key={_id} xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 8 }}>
            <div>{name}</div>
            <Switch
              defaultChecked={
                JSON.parse(localStorage.getItem('switchServices') || '[]').find(
                  (x) => x._id === _id,
                )?.checked
              }
              id={_id}
              onClick={(value) => {
                handleChangeService(value, _id)
              }}
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
            />
          </Col>
        ))}
      </Row>
      <Divider orientation="center">Приблизна ціна</Divider>
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '25px', color: '#52c41a' }}>
          {minPrice ? `${minPrice?.toFixed(2)} грн` : '-'}
        </span>
      </div>
    </div>
  )
}

export default PackageForm
