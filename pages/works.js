import WorkSectionAll from "../components/PageContent/WorkSectionAll";
import Head from "next/head";
import styles from "../styles/work.module.css";
function Work(props) {
  return (
    <div className="container">
            <Head>
        <title>Works</title>
        <meta name="description" content="Work page" />
      </Head>
      <WorkSectionAll />
    </div>
  );
}

export default Work;
