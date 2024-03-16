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
         cicle {
          cicle
         }
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
      <h2>Algunos de los autores del taller</h2>
          <div>
            <PoemAuthorGridStyles>
            {poem.map((item) => {
            return (<PoemAuthorItem
                  key={item.author.id}
                  title={item.author.title}
                  name={item.author.name}
                  cicle={item.author.cicle[0].cicle}
                  slug={item.author.slug}
                  profileImage={item.author.profileImage}
                  />)
            })}
            </PoemAuthorGridStyles>
            </div>
      </CiclePoemStyles>
    </>
  );
}

export default PoemAuthorsGrid;
