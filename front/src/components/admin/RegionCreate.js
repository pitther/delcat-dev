import React from 'react'
import {
  SimpleFormIterator,
  ArrayInput,
  Datagrid,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
  Create,
} from 'react-admin'
import { JsonField, JsonInput } from 'react-admin-json-view'

const RegionCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  )
}

export default RegionCreate
