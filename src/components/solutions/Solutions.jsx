import {
  solutions,
  product,
  picture,
  description,
  about,
  name,
} from "./styles.module.scss";
import {StaticImage} from "gatsby-plugin-image";

const Solutions = () => {

  const unityLink = "https://assetstore.unity.com/";

  return (
    <div className={solutions} id={"solutions"}>
      <div className={product}>
        <StaticImage quality={90} className={picture} src={"../../images/image.jpg"} alt={"3D Space Pathfinding"} />
        <div className={about}>
          <div className={name}>3D Space Pathfinding</div>
          <div className={description}>
            Perfect for AI in space or plane simulator.
            <br />
            <br />
            Since classic NavMesh works only with plain surfaces, it's not
            suitable for open 3D space. You can solve this problem using 3D
            Space Pathfinding, which provides you with drop-in solution for
            pathfinding in 3D space.
          </div>

          <a href={unityLink} target={"_blank"} rel={"noreferrer"}>Open in Unity Asset Store</a>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
