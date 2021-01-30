import React from 'react';
import { Link } from 'react-router-dom';

export const DemandeListRow = ({dem, onDelete}) => {
  return (
    <tr key={dem.id}>
      <td>{dem.id}</td>
      <td>{dem.tierLib}</td>
      <td>{dem.tierAdr}</td>
      <td>{dem.tierAdr}</td>
      <td>{dem.tierAdr}</td>
      <td>
        <div className="btn-toolbar pull-right">
          <Link to={`/execution/demande/${dem.id}`} className="btn btn-primary btn-xs mr-1"><i className="far fa-edit"></i> Modifier</Link>
          <Link to={`/execution/demande/${dem.id}`} className="btn btn-primary btn-xs  mr-1"><i className="far fa-share-square"></i> Traitement</Link>
          { <a onClick={onDelete.bind(this, dem)} className="btn btn-danger btn-xs"><i className="far fa-trash-alt"></i> Supprimer</a> }
        </div>
      </td>
    </tr>
  )
};