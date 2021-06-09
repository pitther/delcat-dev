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

const ServiceCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <TextInput source="name" />
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  )
}

export default ServiceCreate
