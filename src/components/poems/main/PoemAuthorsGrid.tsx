import React from 'react';
// import { AuthorGridStyles } from '..../../styles/author/AuthorGridStyles';
import PoemAuthorItem from './PoemAuthorItem';
import ParagraphText from '../../typography/ParagraphText';
import { graphql, useStaticQuery } from 'gatsby';
import { PoemAuthorGridStyles } from '../../../styles/poem/PoemAuthorGridStyles';
import CiclePoemStyles from '../../../styles/poem/CiclePoemStyles';

function PoemAuthorsGrid({}) {
  const data = useStaticQuery(graphql`
  {
    allSanityPoem(filter: {}) {
      nodes{
       title
       author{
         id
         name
         slug {
           current
         }
         profileImage{
           asset {
             gatsbyImageData
           }
         }
       }
     }
   }
   allSanityCiclo(filter: {}) {
    nodes {
      cicle
      slug {
        current
      }
    }
  }
 }
 `
)

  const poem = data.allSanityPoem.nodes
  const cicles = data.allSanityCiclo.nodes

  return (
    <>      
    <CiclePoemStyles >
      <h2>Autores de los poemas</h2>
      {cicles.map((cicle) => {
        return(
          <details key={cicle.cicle}>
            <summary>{cicle.cicle}</summary>
            <PoemAuthorGridStyles>
            {poem.map((item) => {
            if (cicle.cicle === item.author.cicle) {
               return 
              }
            return (<PoemAuthorItem
                  key={item.author.id}
                  title={item.author.title}
                  name={item.author.name}
                  slug={item.author.slug}
                  profileImage={item.author.profileImage}
                  />)
            })}
            </PoemAuthorGridStyles>
          </details>
      )}
      )}
      </CiclePoemStyles>
    </>
  );
}

export default PoemAuthorsGrid;
