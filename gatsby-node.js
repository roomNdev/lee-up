exports.createPages = async ({ graphql, actions }) => {
  const postsPerPage = Number(process.env.GATSBY_POST_PER_PAGE) || 10;
  // templates path
  const singlePoemTemplate = require.resolve('./src/templates/single-poem.js');
  const singleBlogTemplate = require.resolve('./src/templates/single-blog.js');
  const singleCategoryTemplate = require.resolve(
    './src/templates/single-category.js'
  );
  const poemListTemplate = require.resolve('./src/templates/poem-list.js');
  const blogListTemplate = require.resolve('./src/templates/blog-list.js');
  const categoryListTemplate = require.resolve(
    './src/templates/category-list.js'
  );
  const singleAuthorTemplate = require.resolve(
    './src/templates/single-author.js'
  );
  const authorListTemplate = require.resolve('./src/templates/author-list.js');
  const contactTemplate = require.resolve('./src/templates/contact.js');

    //contact page creation
    actions.createPage({
      path: "/contacto",
      component: contactTemplate,
      context: {},
    })


  // const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityBlog {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityPoem {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          id
          slug {
            current
          }
        }
      }
      allSanityAuthor {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  const blogs = result.data.allSanityBlog.nodes;
  const categories = result.data.allSanityCategory.nodes;
  const authors = result.data.allSanityAuthor.nodes;
  const poems = result.data.allSanityPoem.nodes;

  // single poem pages
  poems.forEach((poem) => {
    actions.createPage({
      path: `/escritura-creativa/${poem.slug.current}`,
      component: singlePoemTemplate,
      context: { id: poem.id },
    });
  });

  // single blogs pages

  blogs.forEach((blog) => {
    actions.createPage({
      path: `/posts/${blog.slug.current}`,
      component: singleBlogTemplate,
      context: { id: blog.id },
    });
  });

  // single category pages
  categories.forEach((category) => {
    actions.createPage({
      path: `/categorias/${category.slug.current}`,
      component: singleCategoryTemplate,
      context: { id: category.id },
    });
  });

  // single Author pages
  authors.forEach((author) => {
    actions.createPage({
      path: `/miembros/${author.slug.current}`,
      component: singleAuthorTemplate,
      context: { id: author.id },
    });
  });

  // poems paginated pages
  const totalPoemListPages = Math.ceil(poems.length / postsPerPage);
  Array.from({ length: totalPoemListPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/escritura-creativa` : `/escritura-creativa/${index + 1}`,
      component: poemListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalPoemListPages,
        currentPage: index + 1,
      },
    });
  });


  // blogs paginated pages
  const totalBlogListPages = Math.ceil(blogs.length / postsPerPage);
  Array.from({ length: totalBlogListPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/posts` : `/posts/${index + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalBlogListPages,
        currentPage: index + 1,
      },
    });
  });

  // category paginated pages
  const totalCategoryListPages = Math.ceil(categories.length / postsPerPage);
  Array.from({ length: totalCategoryListPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/categorias` : `/categorias/${index + 1}`,
      component: categoryListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalCategoryListPages,
        currentPage: index + 1,
      },
    });
  });

  // Author paginated pages
  const totalAuthorListPages = Math.ceil(authors.length / postsPerPage);
  Array.from({ length: totalAuthorListPages }).forEach((_, index) => {
    actions.createPage({
      path: index === 0 ? `/miembros` : `/miembros/${index + 1}`,
      component: authorListTemplate,
      context: {
        limit: postsPerPage,
        offset: index * postsPerPage,
        numberOfPages: totalAuthorListPages,
        currentPage: index + 1,
      },
    });
  });
};
