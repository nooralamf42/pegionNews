
import StarHeader from "../components/starHeader";


const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy-section news-cycle-regular mt-10">
      <div className="my-container mx-auto px-4 pb-4">
        {/* <NewsHeader text="Privacy Policy" className="my-8 text-center w-full" /> */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 newsreader-700">Pigeon News Privacy Policy</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 newsreader-500 mb-8">
              At Pigeon News, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">1. Information We Collect</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              <li>Your name and email address</li>
              <li>Contact information, including phone number and mailing address</li>
              <li>User preferences and settings</li>
              <li>Content you submit, such as comments or feedback</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We also automatically collect certain information when you use our website, including:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              <li>IP address and device identifiers</li>
              <li>Browser type and operating system</li>
              <li>Pages you view and links you click</li>
              <li>Time spent on our website and other usage statistics</li>
            </ul>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We use your information for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              <li>Providing and improving our services</li>
              <li>Personalizing your experience on our website</li>
              <li>Communicating with you about our services, updates, and promotions</li>
              <li>Analyzing usage patterns to enhance our website's functionality</li>
              <li>Preventing fraud and ensuring the security of our platform</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We do not sell your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our website and conducting our business.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">3. Data Security</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection and privacy practices</li>
              <li>Access controls and authentication mechanisms</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">4. Your Rights and Choices</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              You have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Object to the processing of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              To exercise these rights or if you have any questions about our privacy practices, please contact us at privacy@pigeonnews.com.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">5. Cookies and Tracking Technologies</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We use cookies and similar tracking technologies to collect information about your browsing activities. You can manage your cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">6. Changes to This Privacy Policy</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">7. Contact Us</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mt-2">
              Pigeon News<br />
              123 News Street, Cityville, State 12345<br />
              Email: privacy@pigeonnews.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
          <aside className="col-span-full lg:col-span-4">
            <StarHeader title="Key Points" className="mb-6" />
            <div className="space-y-6">
              {['Information Collection', 'Data Usage', 'Security Measures', 'Your Rights', 'Cookies', 'Policy Updates', 'Contact Information'].map((point) => (
                <div key={point} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 newsreader-500">{point}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Learn more about our {point.toLowerCase()} policies.</p>
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

export default PrivacyPolicy;