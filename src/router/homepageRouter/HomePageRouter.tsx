import React, { useState } from 'react';

const getPretyDate = (modified: any) => {
  let date = new Date(modified);

  return `${date.toLocaleDateString()}`
}

export function HomePageRouter() {


  return (
    <>
      <h1>HomePageRouter</h1>
    </>
  );
}
