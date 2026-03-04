import dynamic from "next/dynamic";
import GridSection from "./features/bento/components/GridSection";

export const revalidate = 86400;

const HomeClient = dynamic(
  () =>
    import("./components/HomeClient").then((mod) => ({
      default: mod.HomeClient,
    })),
  {
    loading: () => <div style={{ height: "100vh" }} />,
  },
);

const UnderConstruction = dynamic(() =>
  import("./components/UnderConstruction").then((mod) => ({
    default: mod.UnderConstruction,
  })),
);

export default function Home() {
  return (
    <>
      <HomeClient />
      <GridSection component="section" />
      <UnderConstruction />
    </>
  );
}
