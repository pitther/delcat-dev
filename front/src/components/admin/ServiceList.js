import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { JsonField, JsonInput } from 'react-admin-json-view'

const ServiceList = (props) => {
  return (
    <List style={{ tableLayout: 'fixed' }} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <EditButton label="Edit" basePath="/services" />
        <DeleteButton label="Delete" basePath="/services" />
      </Datagrid>
    </List>
  )
}

export default ServiceList
