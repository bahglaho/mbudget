import React from 'react';
import { DemandeListRow } from './DemandeListRow';

export const DemandeList = ({dems, onDelete}) => {
  return (
    <table className="table table-hover">
      <thead>
      <tr>
        <th>N°DEMANDE</th>
        <th>OBJET</th>
        <th>DESTINATION</th>
        <th>NATURE</th>
        <th>MONTANT</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
       {dems.map((dem) => DemandeListRow({dem, onDelete}))} 
      </tbody>
    </table>
  )
};