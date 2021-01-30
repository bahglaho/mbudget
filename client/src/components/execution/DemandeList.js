import React from 'react';
import { DemandeListRow } from './DemandeListRow';

export const DemandeList = ({dems, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Adresse</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {dems.map(dem => DemandeListRow({dem}))}
      </tbody>
    </table>
  )
};