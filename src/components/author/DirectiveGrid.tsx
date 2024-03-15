import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import { graphql, useStaticQuery } from 'gatsby';

function DirectiveGrid() {
    const data = useStaticQuery(graphql`
    {
        allSanityAuthor(filter: {directive: {eq: true}}) {
            nodes {
              id
              name
              role
              area {
                name
              }
              instagram
              facebook
              linkedin
              slug {
                current
              }
              profileImage {
                asset {
                  gatsbyImageData
                }
              }
            }
          }
    }
  `);

  const authors = data.allSanityAuthor.nodes
  return (
    <>
        <AuthorGridStyles>
            {authors.map((item) => (
              <AuthorItem
                key={item.id}
                name={item.name}
                slug={item.slug}
                area={item.area[0].name}
                role={item.area[0].name}
                instagram={item.instagram}
                facebook={item.facebook}
                linkedin={item.linkedin}
                profileImage={item.profileImage}
                />
                ))
            }
        </AuthorGridStyles>
    </>
  );
}

export default DirectiveGrid;
