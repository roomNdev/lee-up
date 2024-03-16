import React from 'react';
import { PoemGridStyles } from '../../styles/poem/PoemGridStyles';
import PoemItem from './PoemItem';

function PoemGrid({ poems }) {
  return (
    <PoemGridStyles>
      {poems &&
        poems.map((poem) => (
          <PoemItem
            key={poem.id}
            genre={poem.genre}
            path={poem.slug.current}
            title={poem.title}
            author={poem.author}
            image={{
              imageData: poem.coverImage,
            }}
            publishedAt={poem.publishedAt}
          />
        ))}
    </PoemGridStyles>
  );
}

export default PoemGrid;
