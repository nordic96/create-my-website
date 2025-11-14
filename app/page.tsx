import IntroSection from "./components/IntroSection";

export default function Home() {
  return (
    <div className="flex grow flex-row gap-8">
      <div className="flex grow">
        <IntroSection />
      </div>
      <div className="flex grow">Page Content</div>
    </div>
  );
}
