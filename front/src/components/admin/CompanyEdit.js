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

const CompanyEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput style={{ width: '100px' }} source="image" />
        <TextInput source="rating" />
        <JsonInput
          source="factor"
          validate={[true]}
          jsonString={false} // Set to true if the value is a string, default: false
          reactJsonOptions={{
            // Props passed to react-json-view
            name: null,
            collapsed: true,
            enableClipboard: false,
            displayDataTypes: false,
          }}
        />

        <JsonInput
          source="services"
          validate={[true]}
          jsonString={false} // Set to true if the value is a string, default: false
          reactJsonOptions={{
            // Props passed to react-json-view
            name: null,
            collapsed: true,
            enableClipboard: false,
            displayDataTypes: false,
          }}
        />
        <ArrayInput source="cities">
          <SimpleFormIterator>
            <TextInput />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  )
}

export default CompanyEdit
