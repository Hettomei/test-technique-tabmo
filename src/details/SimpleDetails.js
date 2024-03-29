import React, { Fragment } from "react";

export function SimpleDetails({ pokemon: { basicInformation, species } }) {
  return (
    <Fragment>
      <h2>Types</h2>
      <p>
        {basicInformation.types
          .map(({ type: { name } }) => name)
          .sort()
          .join(", ")}
      </p>

      <h2>Details</h2>
      <ul>
        <li>Order : {basicInformation.order}</li>
        <li>Base Experience : {basicInformation.base_experience} xp</li>
        <li>Height : {basicInformation.height} m</li>
        <li>Weight : {basicInformation.weight} kg</li>
        <li>Color : {species.color.name}</li>
      </ul>
    </Fragment>
  );
}
