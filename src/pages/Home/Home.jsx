import Banner from "./Banner";
import HotJobs from "./HotJobs";

function Home() {
  return (
    <div className="space-y-">
      <section>
        <Banner />
      </section>
      <section className="max-w-7xl mx-auto">
        <HotJobs />
      </section>
    </div>
  );
}

export default Home;
