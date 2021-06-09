import React, { useEffect, useState } from 'react'
import { Collapse, Layout, Menu } from 'antd'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import serverDataProvider from '../services/dataProvider'
import buildGraphQLProvider from 'ra-data-graphql-simple'
import simpleRestProvider from 'ra-data-simple-rest'
import dataProvider from '../services/dataProvider'
import CompanyList from './admin/CompanyList'
import CompanyEdit from './admin/CompanyEdit'
import CompanyCreate from './admin/CompanyCreate'
import CityList from './admin/CityList'
import CityEdit from './admin/CitiyEdit'
import CityCreate from './admin/CityCreate'
import ServiceList from './admin/ServiceList'
import ServiceEdit from './admin/ServiceEdit'
import ServiceCreate from './admin/ServiceCreate'
import RegionList from './admin/RegionList'
import RegionEdit from './admin/RegionEdit'
import RegionCreate from './admin/RegionCreate'

const { Panel } = Collapse

const { Header, Content, Footer, Sider } = Layout

const Administration = () => {
  useEffect(() => {}, [])

  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="companies"
        list={CompanyList}
        edit={CompanyEdit}
        create={CompanyCreate}
      />

      <Resource
        name="services"
        list={ServiceList}
        edit={ServiceEdit}
        create={ServiceCreate}
      />

      <Resource
        name="regions"
        list={RegionList}
        edit={RegionEdit}
        create={RegionCreate}
      />

      <Resource
        name="cities"
        list={CityList}
        edit={CityEdit}
        create={CityCreate}
      />
    </Admin>
  )
}

export default Administration
