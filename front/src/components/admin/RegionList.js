import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { JsonField, JsonInput } from 'react-admin-json-view'

const RegionList = (props) => {
  return (
    <List style={{ tableLayout: 'fixed' }} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <EditButton label="Edit" basePath="/regions" />
        <DeleteButton label="Delete" basePath="/regions" />
      </Datagrid>
    </List>
  )
}

export default RegionList
