import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there! My name is <b>Abdul</b>. I'm currently interning as a
          Software Engineer at{" "}
          <a href="https://www.simplyseated.com.au/">Simply Seated</a> and love
          exploring and trying out new technologies! Feel free to connect with
          me on <a href="https://twitter.com/abduldoesramen">Twitter</a>.
        </p>
        <p>(This is a sample website from NextJS)</p>
      </section>
    </Layout>
  );
}
