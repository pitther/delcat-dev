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

const CityCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="_id" />
        <TextInput source="name" />
        <TextInput source="regionID" />
      </SimpleForm>
    </Create>
  )
}

export default CityCreate
