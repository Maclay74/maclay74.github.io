import "normalize.css";
import "../styles/global.module.scss";
import { Helmet } from "react-helmet"
import Header from "../components/header/Header";
import Solutions from "../components/solutions/Solutions";
import Examples from "../components/examples/Examples";
import Contacts from "../components/contacts/Contacts";

const IndexPage = () => {
  return <>
    <Helmet htmlAttributes={{lang: "en"}}>
      <meta charSet="utf-8" />
      <title>Maclay74</title>
      <meta name={"description"} content={"Custom solutions for Unity"} />
      <meta name="viewport" content="width=850, initial-scale=1"/>
    </Helmet>
    <Header />
    <Solutions />
    <Examples />
    <Contacts />
    </>;
};

export default IndexPage;
