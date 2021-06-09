import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { JsonField, JsonInput } from 'react-admin-json-view'

const CityList = (props) => {
  return (
    <List style={{ tableLayout: 'fixed' }} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="regionID" />
        <EditButton label="Edit" basePath="/cities" />
        <DeleteButton label="Delete" basePath="/cities" />
      </Datagrid>
    </List>
  )
}

export default CityList
