import React, { useContext, useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import {
  Typography,
  Button,
  Layout,
  PageHeader,
  Space,
  Tag,
  Row,
  Statistic,
  Divider,
  List,
  Image,
  Col,
} from 'antd'
import { GlobalContext } from '../context/GlobalContext'
import { useData } from '../hooks/useData'

const { Header, Content, Footer } = Layout
const { Title } = Typography

const Company = ({ preview = false }) => {
  const { id } = useParams()
  const location = useLocation()
  const price = location?.state?.price
  if (!price) {
    preview = true
  }
  const { companies, cities, services } = useData()
  const [company, setCompany] = useState(null)
  const { width, height, length, mass } = JSON.parse(
    localStorage.getItem('package') || '{}',
  )
  const { from, to } = JSON.parse(localStorage.getItem('address') || '{}')
  let orderedServices
  const getSwitchServices = JSON.parse(
    localStorage.getItem('switchServices') || '{}',
  )

  if (getSwitchServices.length > 0) {
    const switchServices = getSwitchServices
      .filter((x) => x.checked)
      .map((x) => x._id.toString())
    orderedServices = services
      .filter((x) => switchServices.includes(x._id))
      .map((x) => ({
        ...x,
        title: x.name,
      }))
  } else {
    orderedServices = []
  }

  useEffect(() => {
    setCompany(companies.find((x) => x._id === id))
  }, [companies])

  useEffect(() => {}, [company])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Content style={{ padding: '30px 50px 0px' }}>
      <Layout>
        <div className={'site-layout-content'}>
          <PageHeader
            tags={
              <Tag color="rgba(245,34,45,0.66)">
                {preview ? 'Перегляд компанії' : 'Створення замовлення'}
              </Tag>
            }
            className="site-page-header"
            onBack={() => window.history.back()}
            title={company?.name}
            extra={
              preview
                ? ''
                : [
                    <Button key="1" type="primary">
                      Підтвердити доставку
                    </Button>,
                  ]
            }
          />
          {!preview && (
            <>
              <Divider orientation="center">Ваше замовлення</Divider>
              <Row>
                <Statistic
                  title="Пункт відправлення"
                  prefix=""
                  value={from?.name}
                  style={{
                    marginRight: '32px',
                  }}
                />
                <Statistic
                  title="Пункт призначення"
                  prefix=""
                  value={to?.name}
                  style={{
                    marginRight: '32px',
                  }}
                />
                <Statistic
                  title="Ціна"
                  value={new Intl.NumberFormat('ua-UA', {
                    currencyDisplay: 'narrowSymbol',
                    style: 'currency',
                    currency: 'UAH',
                  }).format(price)}
                  style={{
                    marginRight: '32px',
                  }}
                />
              </Row>
              <br />
              <Row>
                <Statistic
                  title="Вага"
                  value={`${mass.toFixed(2)} кг`}
                  style={{
                    marginRight: '32px',
                  }}
                />
                <Statistic
                  title="Об'єм"
                  prefix=""
                  value={`${(height * width * length).toFixed(2)} м3`}
                  style={{
                    marginRight: '32px',
                  }}
                />
              </Row>

              {orderedServices?.length > 0 && (
                <>
                  <div style={{ width: '40%' }}>
                    <Divider orientation="center" />
                  </div>
                  <List
                    style={{ width: '40%' }}
                    itemLayout="horizontal"
                    dataSource={orderedServices}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div
                              style={{
                                borderRadius: '50%',
                                backgroundColor: 'rgba(245,34,45,0.66)',
                                width: '10px',
                                height: '10px',
                              }}
                            />
                          }
                          title={item.title}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                </>
              )}
            </>
          )}
          <Divider orientation="center">Про компанію</Divider>
          <Row>
            <Col style={{ padding: '10px' }} flex="0 0 300px">
              <Image style={{ width: '100%' }} src={company?.image} />
            </Col>
            <Col style={{ padding: '10px' }} flex="1 1 200px">
              <Title level={4}>{company?.name}</Title>
              <Title
                level={5}
                style={{ color: 'rgba(0, 0, 0, 0.45)', fontFamily: '' }}
              >
                {company?.description}
              </Title>
            </Col>
          </Row>
          <div style={{ width: '40%' }}>
            <Divider orientation="center">Послуги компанії</Divider>
          </div>
          <List
            style={{ width: '40%' }}
            itemLayout="horizontal"
            dataSource={company?.services.map((x) => {
              const service = services?.find((y) => y._id == x.id)
              return {
                title: service?.name,
                description: service?.description,
              }
            })}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <div
                      style={{
                        borderRadius: '50%',
                        backgroundColor: 'rgba(110,110,110,0.66)',
                        width: '10px',
                        height: '10px',
                      }}
                    />
                  }
                  title={item.title}
                  description={item.description}
                />
              </List.Item>
            )}
          />
          <div style={{ width: '40%' }}>
            <Divider orientation="center">Міста</Divider>
          </div>
          <List
            style={{ width: '40%' }}
            itemLayout="horizontal"
            dataSource={company?.cities.map((id) => ({
              title: cities?.find((x) => x._id.toString() === id)?.name,
            }))}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <div
                      style={{
                        borderRadius: '50%',
                        backgroundColor: 'rgba(110,110,110,0.66)',
                        width: '10px',
                        height: '10px',
                      }}
                    />
                  }
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </div>
      </Layout>
      <br />
    </Content>
  )
}

export default Company
