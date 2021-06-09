import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from 'react-admin'
import { JsonField, JsonInput } from 'react-admin-json-view'

const CompanyList = (props) => {
  return (
    <List style={{ tableLayout: 'fixed' }} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField style={{ width: '100px' }} source="image" />
        <TextField source="rating" />
        <JsonField
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
        <JsonField
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
        <TextField source="cities" />
        <EditButton label="Edit" basePath="/companies" />
        <DeleteButton label="Delete" basePath="/companies" />
      </Datagrid>
    </List>
  )
}

export default CompanyList
