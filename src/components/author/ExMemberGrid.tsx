import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import AreaStyles from '../../styles/AreaStyles';
import ParagraphText from '../typography/ParagraphText';
import { graphql, useStaticQuery } from 'gatsby';
import { Title } from '../typography/Title';
import { PoemAuthorGridStyles } from '../../styles/poem/PoemAuthorGridStyles';
import PoemAuthorItem from '../poems/main/PoemAuthorItem';
import ExMemberSectionStyle from '../../styles/author/ExMemberSectionStyle';
import ExMemberItem from './ExMemberItem';

function ExMemberGrid({}) {
  const data = useStaticQuery(
  graphql`
  {allSanityAuthor(filter: {exmember: {eq: true}}) {
    nodes {
      id
      name
      role
      member
      area {
        name
      }
      cicle {
        cicle
      }
      directive
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
  allSanityCiclo(filter: {}) {
    nodes {
      cicle
      slug {
        current
      }
    }
  }
}`
  )
  

  const authors = data.allSanityAuthor.nodes;
  const cicles = data.allSanityCiclo.nodes
  
  return (
    <>
          <AreaStyles >
          <Title tag={"h2"} > Ex Miembros</Title>
            <ExMemberSectionStyle>
            {cicles.map((cicle) => {
                    return(
                        <details key={cicle.cicle}>
                            <summary>{cicle.cicle}</summary>
                            <PoemAuthorGridStyles>
                            {authors.map((item) => {
                            if (cicle.cicle !== item.cicle[0].cicle) {
                            return 
                            }
                            return (
                            <ExMemberItem
                                key={item.id}
                                name={item.name}
                                slug={item.slug}
                                role={item.role}
                                profileImage={item.profileImage}
                                />)
                            })}
                            </PoemAuthorGridStyles>
                        </details>
                    )}
                    )}
              </ExMemberSectionStyle>
          </AreaStyles>
    </>
  );
}

export default ExMemberGrid;
