import IntroSection from "./components/IntroSection";
import withSuspense from "./hooks/withSuspense";

function Home() {
  return (
    <div className="flex grow flex-row gap-8">
      <div className="flex grow">
        <IntroSection />
      </div>
      <div className="flex grow">Page Content</div>
    </div>
  );
}

export default withSuspense(Home, <p>Loading...</p>);
