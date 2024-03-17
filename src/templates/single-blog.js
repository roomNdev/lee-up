import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { format } from 'date-fns';
import { BiCategory } from 'react-icons/bi';
import { FiCalendar, FiUser } from 'react-icons/fi';
import PageSpace from '../components/PageSpace.tsx';
import ParagraphText from '../components/typography/ParagraphText.tsx';
import { Title } from '../components/typography/Title.tsx';
import { SingleBlogStyles } from '../styles/blog/SingleBlogStyles.ts';
import MyPortableText from '../components/MyPortableText.tsx';
import Seo from '../components/seo.tsx';
import Button from '../components/buttons/Button.tsx'


export const postQuery = graphql`
  query SingleBlogQuery($id: String!) {
    sanityBlog(id: { eq: $id }) {
      title
      publishedAt
      _rawBody
      coverImage {
        asset {
          gatsbyImageData
        }
        alt
      }
      categories {
        title
        slug {
          current
        }
      }
      author {
        name
        slug {
          current
        }
      }
    }
  }
`;

function SingleBlog({ data }) {
  const blog = data.sanityBlog;
  
  return (
    <SingleBlogStyles>
      <Seo title={blog.title} />
      <PageSpace top={80} bottom={100}>
        <div className="container">
          <div className="blog-header">
            <GatsbyImage
              image={blog.coverImage.asset.gatsbyImageData}
              alt={blog.coverImage.alt}
              className="blog-cover-image"
            />
            <ParagraphText className="publishedAt">
              <FiCalendar />
              {format(new Date(blog.publishedAt), 'p, MMMM dd, yyyy')}
            </ParagraphText>
            <ParagraphText className="categoriesText">
              <BiCategory />
              <span>
                {blog.categories.map((item, index) => (
                  <span key={item.slug.current}>
                    <Link to={`/categorias/${item.slug.current}`}>
                      {item.title}
                    </Link>
                    {index < blog.categories.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </span>
            </ParagraphText>
            <ParagraphText className="author">
              <FiUser />
              <Link to={`/miembros/${blog.author.slug.current}`}>
                {blog.author.name}
              </Link>
            </ParagraphText>
          </div>
          
          <Title className="title">{blog.title}</Title>
          <hr className="hr" />
          <div className="body">
            <MyPortableText value={blog._rawBody} />
          </div>
          <div className='button__wrapper'>
          <Link to='/'>
            <Button variant='more'>
              {'< Inicio'}
            </Button>
          </Link>
          </div>
        </div>
      </PageSpace>
    </SingleBlogStyles>
  );
}

export default SingleBlog;
