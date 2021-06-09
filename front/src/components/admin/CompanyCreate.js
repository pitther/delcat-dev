import React from 'react'
import {
  ArrayInput,
  Create,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from 'react-admin'
import { JsonInput } from 'react-admin-json-view'

const CompanyCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput style={{ width: '100px' }} source="image" />
        <TextInput source="rating" />
        <JsonInput
          defaultValue={{ city: 0, region: 0, country: 0 }}
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
          defaultValue={[]}
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
    </Create>
  )
}

export default CompanyCreate
