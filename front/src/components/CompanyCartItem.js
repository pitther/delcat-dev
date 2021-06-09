import React from 'react'
import Button from 'antd-button-color'
import { Card, Layout, Rate, Typography, Space, Spin } from 'antd'
import { useHistory } from 'react-router-dom'
import { MailOutlined, CarOutlined, RightOutlined } from '@ant-design/icons'
const { Header, Content, Footer } = Layout
const { Meta } = Card
const { Text, Link } = Typography

const CompanyCartItem = ({
  id,
  loading,
  color,
  price,
  name,
  image,
  rating,
}) => {
  const history = useHistory()
  const onClickCompany = () => {
    history.push('/company/' + id)
  }

  return (
    <Card
      className="company-card"
      style={{ width: 250, height: 270 }}
      cover={
        <div
          style={{
            textAlign: 'center',
            height: '160px',
            width: '250px',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            style={{
              height: '100%',
              display: 'inline-block',
              verticalAlign: 'middle',
            }}
          >
            <img
              style={{
                width: '250px',
                maxHeight: '160px',
                objectFit: 'contain',
                verticalAlign: 'middle',
              }}
              src={image}
            />
          </div>
        </div>
      }
      actions={
        price
          ? [
              <div
                style={{
                  fontFamily: 'sans-serif',
                  backgroundColor: '',
                  color: color,
                  padding: '10px',
                  cursor: 'default',
                  fontSize: '18px',
                  whiteSpace: 'nowrap',
                }}
              >
                {price &&
                  price.toLocaleString('ua-UA', {
                    ...new Intl.NumberFormat('ua-UA', {
                      style: 'currency',
                      currency: 'UAH',
                    }).resolvedOptions(),
                    style: 'decimal',
                  }) + ' грн'}
                {/*{price.toFixed(2) ? `${price.toFixed(2)} грн` : ''}*/}
              </div>,
              <Button
                className="custom"
                style={{ height: '48px', fontSize: '18px' }}
                type="text"
                block
                size="large"
                onClick={() => {
                  history.push({
                    pathname: `/company/${id}`,
                    state: {
                      price: price,
                    },
                  })
                }}
              >
                <CarOutlined />
                <RightOutlined />
              </Button>,
            ]
          : ''
      }
    >
      <Meta
        title={[
          <Text onClick={onClickCompany} style={{ cursor: 'pointer' }}>
            {name}
          </Text>,
        ]}
        description={[
          <Rate character={<MailOutlined />} disabled defaultValue={rating} />,
        ]}
      />
    </Card>
  )
}

export default CompanyCartItem
