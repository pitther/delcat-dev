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

const RegionEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <TextInput source="name" />
      </SimpleForm>
    </Edit>
  )
}

export default RegionEdit
