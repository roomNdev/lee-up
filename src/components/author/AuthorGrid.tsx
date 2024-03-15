import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import AreaStyles from '../../styles/AreaStyles';
import ParagraphText from '../typography/ParagraphText';
import { graphql, useStaticQuery } from 'gatsby';

function AuthorGrid({}) {
  const data = useStaticQuery(
  graphql`
  {
      allSanityAreas(filter: {}){
        nodes{
          name
        }
      }
      allSanityAuthor(filter: {member: {eq: true}}) {
        nodes {
          id
          name
          role
          member
          area {
            name
          }
          directive
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
  `
  )
  

  const authors = data.allSanityAuthor.nodes;
  const areas = data.allSanityAreas.nodes;
  // const members = authors.filter((item)=> item.member === true)
  const areasName = authors.map((item) => item.area[0].name)
  return (
    <>
      {areas.map((area) => {
        if (area.name === 'Directiva') {
        return
        }
        return(
          <AreaStyles key={area.name}>
            <h2 >{area.name}</h2>
            <AuthorGridStyles>
            {
              !areasName.includes(area.name) && 
              <ParagraphText className="no__members">
                No hay miembros disponibles
              </ParagraphText>
            }
            {authors.map((item) => {
              if (area.name !== item.area[0].name || !item.member) {
                 return 
                }
              return (<AuthorItem
                    key={item.id}
                    name={item.name}
                    slug={item.slug}
                    area={item.area[0].name}
                    role={item.role}
                    profileImage={item.profileImage}
                    />)
              })}
              </AuthorGridStyles>
          </AreaStyles>
        )}
      )}
    </>
  );
}

export default AuthorGrid;
