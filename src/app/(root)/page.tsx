import NavBar from "@/components/NavBar";
import { Features } from "@/components/frontpage/Features";
import Intro from "@/components/frontpage/Intro";
import RequestFreeApp from "@/components/frontpage/RequestFreeApp";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-yellow-400 w-full md:pt-16 md:min-h-screen flex flex-col md:justify-center">
        <div className="container max-w-[1300px] mx-auto">
          <Intro />
        </div>
      </div>
      <div className="md:-mt-12 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#FACC15"
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
            fill="#FACC15"
            fillOpacity="1"
            d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,64C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>

      <Features />

      <div>
        <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
          <div className="mx-auto p-4 flex gap-4 items-center justify-around z-20">
            {[
              {
                title: "Parents",
                description:
                  "Kenroz is great for parents who can keep track of their children's progress, stay updated on attendance, and with in communication and more.",
              },
              {
                title: "Teacher",
                description: "Teachers can manage their classes, assignments, and communicate with parents and take attendance.",
              },
              {
                title: "Admin",
                description: "Admins can manage the entire school, manage users, fees, tasks and school events all from one unified place"
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-[#272928] text-white rounded-lg p-3 max-w-[250px] min-h-[400px]"
              >
                <h2 className="text-2xl font-bold ">{item.title}</h2>
                <p className="pt-10">{item.description}</p>
              </div>
            ))}
          </div>
          <BackgroundBeams className="z-10" />
        </div>
      </div>

      <div className="relative">
        <div className="relative rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FACC15"
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
              fill="#FACC15"
              fillOpacity="1"
              d="M0,128L60,122.7C120,117,240,107,360,85.3C480,64,600,32,720,64C840,96,960,192,1080,234.7C1200,277,1320,267,1380,261.3L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="bg-yellow-400">
          <RequestFreeApp />
        </div>
      </div>
    </>
  );
}