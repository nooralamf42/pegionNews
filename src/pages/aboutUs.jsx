import NewsHeader from "../components/newsHeader";
import StarHeader from "../components/starHeader";

const AboutUs = () => {
    return (
      <section className="about-us-section news-cycle-regular mt-10">
        <div className="my-container mx-auto px-4 pb-4">
          <NewsHeader text="About Us" className="my-8" />
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-full lg:col-span-8">
              <h1 className="text-3xl mb-4 newsreader-700">Our Story</h1>
              <p className="text-gray-700 newsreader-500 mb-6">
                We are a dedicated team of journalists and tech enthusiasts committed to bringing you the latest and most accurate news in business, finance, and technology.
              </p>
              <h2 className="text-2xl mb-4 newsreader-700">Our Mission</h2>
              <p className="text-gray-700 newsreader-500 mb-6">
                Our mission is to provide our readers with timely, insightful, and unbiased news coverage, helping you stay informed in the fast-paced world of business and technology.
              </p>
              <h2 className="text-2xl mb-4 newsreader-700">Contact Us</h2>
              <p className="text-gray-700 newsreader-500">
                Have questions or feedback? We'd love to hear from you. Reach out to us at contact@ournewssite.com.
              </p>
            </div>
            <aside className="col-span-full lg:col-span-4">
              <StarHeader title="Our Team" className="mb-6" />
              <div className="space-y-6">
                {['John Doe', 'Jane Smith', 'Mike Johnson'].map((name) => (
                  <div key={name} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                    <div>
                      <h3 className="text-xl mb-2 newsreader-500">{name}</h3>
                      <p className="text-sm text-gray-500">Senior Editor</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;