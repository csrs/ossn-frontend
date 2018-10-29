/*
  Contains graphQL query for training resources.
  Contains TrainingResource and TrainingResourceList components.
  Appears at /contribute and /leaders-corber.
*/

import React from 'react';
import {graphql} from 'gatsby';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Layout2Col from './../../layouts/layout-2col/layout-2col';
import ShadowBox from './../shadow-box/shadow-box';

// styles
import './../teaser-box/teaser-box';

// A single training resource.
const TrainingResource = (props) => {
  const title = props.resource.title;
  const url = props.resource.link;
  const icon = props.resource.imageUrl;

  const classes=`${props.className}`;
  return  (
    <div className={classes}>
      <ShadowBox className="teaser-box teaser-box--large">
        <a href={url} className="teaser-box__wrapper-link">
          <div className="teaser-box__image-wrapper">
            <img src={icon} alt={title} className="teaser-box__image"/>
          </div>
          <div className="teaser-box__text">
            <h3 className="teaser-box__title"> {title} </h3>
            <p className="teaser-box__description">
              Got 15 minutes and want to learn Git? Git allows groups of people to work on the same documents at the same time, and without stepping on each other's toes.
            </p>
          </div>
        </a>
      </ShadowBox>
    </div>
  );
};

// A wrpaper for all training resources.
export default (props) => {

  const resources = props.resources.edges.map((resourceNode, i)=>{
    const resource = resourceNode.node;
    return <TrainingResource resource={resource} key={i} />
  });

  return (
    <div>
      <LayoutContained>
        <h2> Training & various resources </h2>
        <div className="teaser-box--large__list">
          <Layout2Col horizontalGutters verticalGutters>
            {resources}
          </Layout2Col>
        </div>
      </LayoutContained>
    </div>
  );
};

export const query = graphql`
  fragment TrainingResources on TrainingResourcesJson {
    title
    description
    imageUrl
    link
  }
`;
