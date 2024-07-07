import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Abilities from "@/components/frontpage/Abilities";
import About from "@/components/frontpage/About";
import { Features } from "@/components/frontpage/Features";
import Intro from "@/components/frontpage/Intro";
import RequestFreeApp from "@/components/frontpage/RequestFreeApp";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-primary w-full md:pt-16 md:min-h-screen flex flex-col md:justify-center">
        <div className="container max-w-[1300px] mx-auto">
          <Intro />
        </div>
      </div>
      <div className="md:-mt-12 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-primary"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,64C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="top-5 left-0 absolute opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className="fill-primary"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,64C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <Features />

      <About />

      <Abilities />

      <div className="relative">
        <div className="relative rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="fill-primary-500"
              fillOpacity="1"
              d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,64C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
          <svg
            className="top-5 left-0 absolute opacity-30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              className="fill-primary-500"
              fillOpacity="1"
              d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,64C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="bg-primary-500 pb-4">
          <RequestFreeApp />
        </div>
      </div>


      <Footer />
    </>
  );
}
