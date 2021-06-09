import React from 'react'
import {
  SimpleFormIterator,
  ArrayInput,
  Datagrid,
  Edit,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'
import { JsonField, JsonInput } from 'react-admin-json-view'

const ServiceEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <TextInput source="name" />
        <TextInput source="description" />
      </SimpleForm>
    </Edit>
  )
}

export default ServiceEdit
