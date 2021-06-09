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

const CityEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <TextInput source="name" />
        <TextInput source="regionID" />
      </SimpleForm>
    </Edit>
  )
}

export default CityEdit
