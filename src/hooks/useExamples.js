import { graphql, useStaticQuery } from "gatsby";

const useExamples = () => {
  const {
    allExamplesJson: { nodes: data = [] },
  } = useStaticQuery(graphql`
    {
      allExamplesJson {
        nodes {
          id
          title
          link
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 80)
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useExamples;
