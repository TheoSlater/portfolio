import { Background } from "../layout/background";
import DarkVeil from "../layout/dark-veil";
import { Foreground } from "../layout/foreground";
import { HeroContent } from "./hero-content";

type HeroSectionProps = {
  onReady: () => void;
};

export function HeroSection({ onReady }: HeroSectionProps) {
  return (
    <Background>
      <DarkVeil onReadyAction={onReady} />
      <Foreground>
        <HeroContent />
      </Foreground>
    </Background>
  );
}
