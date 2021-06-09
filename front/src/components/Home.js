import React, { useContext, useEffect, useState } from 'react'
import {
  Col,
  Row,
  Layout,
  Avatar,
  Menu,
  Breadcrumb,
  Space,
  Card,
  Rate,
  Skeleton,
} from 'antd'
import Button from 'antd-button-color'
import { MailOutlined } from '@ant-design/icons'
import Gradient from 'javascript-color-gradient'
import CompanyCartItem from './CompanyCartItem'
import CompanyCartItemSkeleton from './CompanyCardItemSkeleton'
import PackageForm from './PackageForm'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { calculatePrice } from '../utils/utils'
const { Header, Content, Footer } = Layout
const { Meta } = Card
const Home = () => {
  const { setCalculatedCompanies, calculatedCompanies } =
    useContext(GlobalContext)

  const minPrice = calculatedCompanies
    .map((x) => x.price)
    .sort((a, b) => a - b)[0]
  const getCompanies = async () => {
    const response = await axios.get('/companies')
    let data = response.data
    localStorage.setItem('companies', JSON.stringify(data))
    setCalculatedCompanies(calculatePrice())
  }

  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <>
      <Content style={{ padding: '30px 50px 0px' }}>
        <Layout>
          <div className={'site-layout-content'}>
            <PackageForm minPrice={minPrice} />
          </div>
          <br />

          <Space style={{ justifyContent: 'center' }} size={[15, 15]} wrap>
            {calculatedCompanies
              .filter((x) => x.show)
              .map(({ _id, name, color, image, price, rating }) => (
                <CompanyCartItem
                  id={_id}
                  key={_id}
                  rating={rating}
                  name={name}
                  image={image}
                  price={price}
                  color={color}
                />
              ))}
          </Space>
        </Layout>
        <br />
      </Content>
    </>
  )
}

export default Home
