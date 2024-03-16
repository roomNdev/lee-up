import * as React from "react"
import { graphql, useStaticQuery, type HeadFC, type PageProps } from "gatsby"
import Seo from "../../../components/seo";
import { SingleCategoryStyles } from "../../../styles/category/SingleCategoryStyles";
import PageHeader from "../../../components/PageHeader";
import ParagraphText from "../../../components/typography/ParagraphText";
import { GatsbyImage } from "gatsby-plugin-image";
import BlogGrid from "../../../components/blog/BlogGrid";
import PoemItem from "../../../components/poems/PoemItem";
import { Title } from "../../../components/typography/Title";
import AreaStyles from "../../../styles/AreaStyles";
import { PoemGridStyles } from "../../../styles/poem/PoemGridStyles";
import PageSpace from "../../../components/PageSpace";

const IndexPage: React.FC<PageProps>  = () => {
    const data = useStaticQuery(graphql`{
      allSanityPoem(filter: {}) {
        nodes {
          id
          title
          publishedAt
          coverImage {
            asset {
              gatsbyImageData
            }
          }
          genre {
            title
          }
          slug {
            current
          }
          author {
            name
            slug {
              current
            }
            profileImage {
              asset {
                gatsbyImageData
              }
            }
          }
          categories {
            title
            slug {
              current
            }
          }
          coverImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
      allSanityGenre(filter: {}) {
        nodes {
          _id
          slug {
            current
          }
          title
        }
      }
        sanityCategory(slug: {current: {eq: "escritura-creativa"} }) {
          title
          slug{
            current
          }
          coverImage {
            asset {
              gatsbyImageData
            }
          }
          _rawDescription
      }
    }
  `);

    const poems = data.allSanityPoem.nodes;
    const genres = data.allSanityGenre.nodes
    const category = data.sanityCategory
  return (
  <PageSpace top={40} bottom={100}>
    <Seo title={"Taller de escritura"}/>
    <div className="container">
    <SingleCategoryStyles>
        <div className="container">
          <Seo title={"Escritura creativa"} />
          <PageHeader title={"Escritura creativa"} className="pageHeader">
            <ParagraphText className="description">
              {category._rawDescription[0].children[0].text}
            </ParagraphText>
            <GatsbyImage
              image={category.coverImage.asset.gatsbyImageData}
              alt={category.coverImage.alt || ''}
              className="coverImage"
            />
          </PageHeader>
          <AreaStyles>
          {
            genres.map((genre) => {
                return(
                    <>
                        <Title tag={"h2"} className="title">{genre.title}</Title>
                        <hr className="hr" />
                        {
                            poems.map((item) => {
                                if (genre.title !== item.genre[0].title) { return }
                                return (
                                    <PoemGridStyles>
                                        <PoemItem
                                        key={item.id}
                                        path={item.slug}
                                        author={item.author}
                                        title={item.title}
                                        image={item}
                                        />
                                    </PoemGridStyles>
                                )
                            })
                        }
                    </>
                )      
            })
          }
          </AreaStyles>    
          
          {/* <PoemGrid poems={poems} /> */}
            
        </div>
      </SingleCategoryStyles>
    </div>
  </PageSpace>
)};

export default IndexPage;

export const Head: HeadFC = () => <title>Lee UP</title>