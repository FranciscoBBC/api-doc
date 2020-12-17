import React from 'react';
import ContentModel from '@models/components/ContentModel';

const Content: React.FC<ContentModel> = ({ data }: ContentModel) => {
  return (
    <div>
      <button type="button">[edit]</button>
      <div>{data}</div>
      <button type="button">[edit]</button>
    </div>
  );
};

export default Content;
