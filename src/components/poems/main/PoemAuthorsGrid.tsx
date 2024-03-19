import React from 'react';
// import { AuthorGridStyles } from '..../../styles/author/AuthorGridStyles';
import PoemAuthorItem from './PoemAuthorItem';
import ParagraphText from '../../typography/ParagraphText';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { PoemAuthorGridStyles } from '../../../styles/poem/PoemAuthorGridStyles';
import CiclePoemStyles from '../../../styles/poem/CiclePoemStyles';
import Button from '../../buttons/Button';

function PoemAuthorsGrid({}) {
  const data = useStaticQuery(graphql`
  {
    allSanityPoem(filter: {}) {
      distinct(field: {
        author: {
          id: SELECT
        }
      }
    )
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
  let ids = data.allSanityPoem.distinct

  return (
    <>      
    <CiclePoemStyles >
      <h2>Algunos de los autores del taller</h2>
          <div>
            <PoemAuthorGridStyles>
            {ids.map((id) => {
              const item = poem.filter((poem) => poem.author.id === id)
              console.log(item);
            return (<PoemAuthorItem
                  key={item[0].author.id}
                  // title={item.author.title}
                  name={item[0].author.name}
                  cicle={item[0].author.cicle[0].cicle}
                  slug={item[0].author.slug}
                  profileImage={item[0].author.profileImage}
                  />)
            })}
            </PoemAuthorGridStyles>
            </div>
            {/* <Link to="/categorias/escritura-creativa" className='more'>
              <Button variant='more' >
                Ver todos los escritos
              </Button>
            </Link> */}
      </CiclePoemStyles>
    </>
  );
}

export default PoemAuthorsGrid;
