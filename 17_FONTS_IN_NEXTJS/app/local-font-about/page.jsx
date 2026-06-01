import localFont from "next/font/local";

// Initialize the font with the subsets you need
const fontLc = localFont({ src: "./fonts/PlaywriteGBSGuides-Italic.ttf" });

const AboutPage = () => {
  return (
    // Apply the font's className to the wrapper div
    <div className={fontLc.className}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <p className="leading-relaxed text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, corrupti velit. Sed asperiores, quas praesentium ipsa
              suscipit reiciendis perferendis optio neque. Assumenda molestias
              porro nesciunt iure. Consequuntur, in libero. Dolorum?
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
