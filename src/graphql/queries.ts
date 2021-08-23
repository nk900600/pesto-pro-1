/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getData  = /* GraphQL */ `
  query GetData {
    getData {
      Id
      name
      location
    }
  }
`;
export const getDataById = (id:string)=>`
 query GetDataById($id: String!) {
    getDataById(id: ${id}) {
      Id
      name
      location
    }
  }
`;

