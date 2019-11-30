import React, { Fragment } from "react";

export function Sprites({ sprites, name }) {
  return (
    <Fragment>
      {Object.entries(sprites)
        .filter(([key, url]) => url && !key.match('shiny'))
        .reverse()
        .map(([key, url]) => (
          <img
            key={key}
            src={url}
            alt={`${key.replace("_", " ")} of ${name}`}
          />
        ))}
    </Fragment>
  );
}
