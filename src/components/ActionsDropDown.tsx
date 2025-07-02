import { Models } from 'node-appwrite';
import React from 'react';

const ActionsDropDown = ({ file }: { file: Models.Document }) => {
  return (
    <div>
      <p>{file.name}</p>
    </div>
  );
};

export default ActionsDropDown;
