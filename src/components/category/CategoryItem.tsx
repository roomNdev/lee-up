import React from 'react';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import { buttonTypes } from '../../constants/buttonTypes';
import { CategoryItemStyles } from '../../styles/category/CategoryItemStyles';
import { Title } from '../typography/Title';

function CategoryItem({ title, description, slug }: {title: any, description: any, slug: any}) {
  return (
    <CategoryItemStyles>
      <Title tag={"h2"} className="title">{title}</Title>
      <div className="text">
        <MyPortableText value={description} />
        {/* {description} */}
      </div>
      <Button to={`/categorias/${slug.current}`} variant={buttonTypes.more}>
        Explorar Categoria
      </Button>
    </CategoryItemStyles>
  );
}

export default CategoryItem;
