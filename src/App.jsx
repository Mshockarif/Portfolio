import "./App.css";

const App = () => {
  return (
    <div>
      {/*header*/}
      <header className="bg-[rgba(223,157,100,0.67)] fixed top-0 left-0 w-full h-10 flex justify-between items-center px-6 z-50 mb-0">
        <h1 className="text-2xl font-bold">Arif Demir</h1>
        <nav>
          <ul className="flex space-x-4">
              <a href="#about" className="hover:underline">About Me</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#certifications" className="hover:underline">Certifications</a>
              <a href="#contact" className="hover:underline">Contact</a>
          </ul>
        </nav>
      </header>
    
      <main className="m-0">
        {/*about me*/}
        <section id="about" className="mb-10 text-center p-10">
          <h2 className="text-3xl font-semibold mb-2 typing-effect">Hey Universe, I'm Arif!</h2>
          <hr className="mx-auto mb-10 w-1/5 border-2 border-[rgba(223,157,100,0.67)]" />
          <img src="https://i.postimg.cc/NMZZNGfx/IMG-5463.jpg" alt="Arif Demir" className="shadow-lg rounded-full w-80 h-79 mx-auto mb-20" />
          <p className="text-lg">
            Hello! I'm Arif, a passionate Computer Science student at Swansea University, excited about exploring the transformative power of data and technology. 
            Currently, I am gaining hands-on experience as an Data Engineering Intern at Volkswagen Financial Services (UK), 
            where I focus on leveraging data to drive insights and decision-making. My role includes working with large datasets, supporting the implementation of monitoring, maintaining and optimising applications across VWFS. <br></br><br></br>In my spare time I love too delve into different
            kinds of programming to gain new foundational skills, which influenced me to make this portfolio, as well as influencing me to get started on project with lower-level programming languages.
          </p>
        </section>

        <section>
        <ul className="p-10 flex justify-center items-center space-x-4 w-full h-0">
            <li>
              <a href="https://www.youtube.com/@demirkat" className="hover:scale-125 transition-transform duration-200 ease-in-out flex justify-center items-center w-10 h-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#df9d64" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg></a>
            </li>

            <li>
              <a href="https://www.instagram.com/arif.demir20/" className="hover:scale-125 transition-transform duration-200 ease-in-out flex justify-center items-center w-10 h-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#df9d64" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
            </li>

            <li>
              <a href="https://github.com/Mshockarif" className="hover:scale-125 transition-transform duration-200 ease-in-out flex justify-center items-center w-10 h-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#df9d64" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/arifalidemir/" className="hover:scale-125 transition-transform duration-200 ease-in-out flex justify-center items-center w-10 h-10"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#df9d64" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
            </li>
        </ul>
        </section>

        {/*projects*/}
        <section id="projects" className="p-40">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <hr className="mx-auto mb-10 w-20 border-2 border-[rgba(223,157,100,0.67)]" />
        
        <h3 className="underline font-semibold mb-10">Software Projects</h3>
        
        <div className="w-60 hover:scale-125 transition-transform duration-200 ease-in-out shadow-lg flex flex-col items-center">
          <h2 className="text-center text-l font-semibold ">Your Video Title</h2>
          <iframe 
            className="mb-10" 
            width="200" 
            height="215" 
            src="https://www.youtube.com/embed/videoseries?list=PL2OZcmnCOaEbuF-GAbj9JpyGhfFNoCJc3" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          <p className="text-center text-sm text-gray-600">This is your video description, explaining more about the content shown in the video above.</p>
        </div>
        </section>

        
        {/*certifications*/}
        <section id="certifications" className="mb-15 p-40">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <p className="text-lg">
            I have achieved several certifications, including Splunk Power , 
          </p>
        </section>

        {/*contact info*/}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-lg">
            Feel free to reach out to me at: <a href="mailto:arif@example.com" className="text-blue-500 underline">arif@example.com</a>
          </p>
        </section>
      </main>

      {/*footer*/}
      <footer className="bg-[rgba(223,157,100,0.67)] text-white py-4 text-center">
        <p>Created By Arif Demir</p>
      </footer>
    </div>
  );
};

export default App;