import { Layout } from "../components/Layout";
import { Content } from "../components/Content";
import { Navbar } from "../components/Navbar";
import { Intro } from "../components/Intro";
import { Work } from "../components/Work";
import { Stack } from "../components/Stack";
import { ProjectList } from "../components/ProjectList";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Intro />
        <Work />
        <Stack />
        <ProjectList />
        <Footer />
      </Content>
    </Layout>
  );
}
