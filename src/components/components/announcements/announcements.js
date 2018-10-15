import React from 'react';
import {graphql} from 'gatsby';
import { ExternalResourceList } from './../external-resource-teaser/external-resource-teaser';

export default (props) => {
  const items = [];

  return (
    <div>
      <ExternalResourceList items={items} />
    </div>
  );
}

export const query = graphql`
  fragment announcements on OSSNAPI {
    announcements {
      description
      sortDescription
      url
      updatedAt
    }
  }
`;
