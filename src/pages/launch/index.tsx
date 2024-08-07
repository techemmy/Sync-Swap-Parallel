import Footer from "@/components/Footer";

export default function Launch() {
  return (
    <>
      <main className="relative overflow-hidden pt-10 max-w-screen-lg mx-auto h-[90vh] space-y-14 p-4">
        <div className="absolute opacity-15 w-full top-[40%] left-[25%]">
          <img
            className="w-[600px]"
            src="/images/launch.svg"
            alt="Launch Illustration"
          />
        </div>
        <article className="space-y-3">
          <h2 className="font-Public text-primary-foreground text-4xl font-semibold">
            SyncSwap Launch
          </h2>
          <p className="font-Public text-card-foreground text-2xl font-semibold">
            Participate in the launch and growth of ecosystem projects.
          </p>
        </article>

        <article className="space-y-4">
          <p className="font-Public text-primary-foreground text-xl font-medium">
            Upcoming Projects
          </p>
          <h1 className="tracking-wider text-[15px] font-semibold text-primary relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-page after:absolute after:inset-0 after:w-[0.125em] after:ml-1 after:animate-caret after:bg-primary">
            NO UPCOMING PROJECTS - STAY TUNED
          </h1>
        </article>
      </main>
      <Footer></Footer>
    </>
  );
}
