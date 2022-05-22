import { examples, title, list, example, name, picture } from "./styles.module.scss";
import useExamples from "../../hooks/useExamples";
import {GatsbyImage, getImage } from "gatsby-plugin-image";

const Example = ({ title, link, image }) => {

  return <a className={example} target={"_blank"} href={link} rel={"noreferrer"} >
    <GatsbyImage className={picture} image={getImage(image)} alt={title} />
    <div className={name}>{title}</div>
  </a>

};

const Examples = () => {
  const data = useExamples();

  return (
    <div className={examples} id={"examples"}>
      <div className="container">
        <h2 className={title}>Examples</h2>

        <div className={list}>
          {data.map((example, i) => (
            <Example {...example} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Examples;
