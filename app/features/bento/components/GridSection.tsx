import { Container } from "@mui/material";
import type { ElementType } from "react";
import { BentoGrid } from "../ui/bento-grid";

import { getGithubContributions } from "@/app/features/bento/server/github-contributions";
import TypingSpeedCard from "./typing-speed-card";
import FeaturedWorkCard from "./cards/featured-work-card";
import GitHubActivityCardSection from "./cards/github-activity-card-section";
import TechStackCard from "./cards/tech-stack-card";
import MapLocationCard from "./cards/map-location-card";

type GridSectionProps = {
  component?: ElementType;
};

export default async function GridSection({
  component = "section",
}: GridSectionProps) {
  const contributions = await getGithubContributions();

  return (
    <Container
      component={component}
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        py: { xs: 5, md: 8 },
      }}
    >
      <BentoGrid
        columns={4}
        gap={16}
        rowHeight={200}
        sx={{
          containerType: "inline-size",
          gap: { xs: "12px", sm: "16px", lg: "20px" },
          gridAutoRows: {
            xs: "minmax(180px, auto)",
            sm: "minmax(200px, auto)",
            md: "minmax(220px, auto)",
          },
        }}
      >
        <MapLocationCard />
        <FeaturedWorkCard />
        <TypingSpeedCard />
        <GitHubActivityCardSection contributions={contributions} />
        <TechStackCard />
      </BentoGrid>
    </Container>
  );
}
