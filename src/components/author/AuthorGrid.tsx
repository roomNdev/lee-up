import React from 'react';
import { AuthorGridStyles } from '../../styles/author/AuthorGridStyles';
import AuthorItem from './AuthorItem';
import AreaStyles from '../../styles/AreaStyles';

function AuthorGrid({ authors, areas, principal }) {
  
  return (
    <>
      <AreaStyles>
        {/* <h2>{principal.name}</h2> */}
        <AuthorGridStyles>
          {authors.filter((item) => item.area[0].name === 'Principal')
            .map((item) => {
            return (
              <AuthorItem
                key={item.id}
                name={item.name}
                slug={item.slug}
                area={item.area[0].name}
                role={item.role}
                instagram={item.instagram}
                facebook={item.facebook}
                linkedin={item.linkedin}
                profileImage={item.profileImage}
                />
              )
            })
          }
        </AuthorGridStyles>
      </AreaStyles>
      {areas.map((area) => {
        if (area.name === 'Principal') {
        return
        }
        return(
          <AreaStyles key={area.name}>
            <h2 >{area.name}</h2>
            <AuthorGridStyles>
            {authors.map((item) => {
              if (area.name !== item.area[0].name || area.name === 'Principal') {
                return 
              }
              return (
              <AuthorItem
                key={item.id}
                name={item.name}
                slug={item.slug}
                area={item.area[0].name}
                role={item.role}
                instagram={item.instagram}
                facebook={item.facebook}
                linkedin={item.linkedin}
                profileImage={item.profileImage}
                />
                )
              })}
              </AuthorGridStyles>
          </AreaStyles>
        )}
      )}
    </>
  );
}

export default AuthorGrid;
