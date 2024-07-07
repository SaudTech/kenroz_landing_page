import Image from "next/image";
import React from "react";

const Para = ({ text }: { text: string }) => {
  return <p className="text-gray-800 max-w-96" dangerouslySetInnerHTML={{ __html: text }} />;
};

const About = () => {
  return (
    <div className="w-full px-8 py-5 my-[150px]">
      <div className="container max-w-[1300px] mx-auto">
        <div className="flex justify-around items-center mb-10 md:flex-row flex-col">
          <h2 className="font-bold text-5xl">What is Kenroz</h2>
          <div>
            <Para text="Kenroz is a school management solution designed to simplify administration for small and medium-sized schools. Moving away from manual data handling, Kenroz streamlines various processes, making school management more efficient and less time-consuming." />
          </div>
        </div>
        <Image
          src="/KENROZ.jpg"
          alt="hero"
          width={500}
          height={500}
          className="w-full max-h-[240px] rounded-lg mx-auto"
        />
        <div className="flex justify-between items-center mt-16 md:flex-row flex-col">
          <Para text="<strong>Teacher:</strong> Kenroz empowers teachers with tools to enhance their teaching experience. They can take attendance, communicate with colleagues and parents, assign and review homework, manage tasks, and organize class schedules, reducing administrative burdens." />
          <Para text="<strong>Parent:</strong> Kenroz offers parents a mobile app to stay connected with school activities. They receive absence notifications, view events, submit homework, and communicate with teachers and admins, ensuring they are always involved in their child's education." />
          <Para text="<strong>Administrator:</strong> Kenroz provides admins with tools to manage school operations efficiently. They can maintain attendance records, handle fees, manage user accounts, organize schedules and events, and communicate seamlessly with teachers and parents." />
        </div>
      </div>
    </div>
  );
};

export default About;
