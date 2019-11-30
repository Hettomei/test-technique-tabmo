import React, { Fragment } from "react";
import { Table } from "reactstrap";

export function Stats({ pokemon: { basicInformation } }) {
  return (
    <Fragment>
        <h2>Stats</h2>
        <Table>
          <thead>
            <tr>
              <th>name</th>
              <th>base state</th>
            </tr>
          </thead>
          <tbody>
            {basicInformation.stats
              .slice()
              .sort((a, b) => a.stat.name.localeCompare(b.stat.name))
              .map(({ base_stat, stat: { name } }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{base_stat}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Fragment>
  );
}
