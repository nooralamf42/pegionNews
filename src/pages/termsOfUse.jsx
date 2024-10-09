import StarHeader from "../components/starHeader";
const TermsOfUse = () => {
  return (
    <section className="terms-of-use-section news-cycle-regular mt-10">
      <div className="my-container mx-auto px-4 pb-4">
        {/* <NewsHeader text="Terms of Use" className="my-8" /> */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-full lg:col-span-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 newsreader-700">The Pigeons News Terms of Use</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 newsreader-500 mb-8">
              Welcome to Pigeon News. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read these Terms of Use carefully before using our website.
            </p>
            
            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">1. Acceptance of Terms</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              By accessing or using The Pigeons News, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">2. Use of Content</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              All content provided on The Pigeons News is for informational purposes only. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">3. User Contributions</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              Any content you contribute to Pigeon News must be accurate, lawful, and not infringe on any third party's rights. We reserve the right to remove or edit user contributions at our discretion. By posting content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on our website.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">4. Intellectual Property</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              The Pigeon News name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of The Pigeons News or its affiliates. You must not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans on this website are the trademarks of their respective owners.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">5. Disclaimer of Warranties</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              The Pigeons News is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not warrant that our website will be uninterrupted or error-free, that defects will be corrected, or that our website or the server that makes it available are free of viruses or other harmful components.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">6. Limitation of Liability</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              The Pigeons News shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the website; (ii) any conduct or content of any third party on the website; (iii) any content obtained from the website; and (iv) unauthorized access, use or alteration of your transmissions or content.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">7. Indemnification</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              You agree to indemnify, defend, and hold harmless Pigeon News and its affiliates, officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms of Use or any activity related to your account.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">8. Governing Law and Jurisdiction</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              These Terms of Use and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without giving effect to any choice or conflict of law provision or rule. Any legal suit, action, or proceeding arising out of, or related to, these Terms of Use or the website shall be instituted exclusively in the federal courts of [Your Jurisdiction] or the courts of the State of [Your State], although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms of Use in your country of residence or any other relevant country.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">9. Changes to Terms</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We reserve the right to modify or replace these Terms of Use at any time at our sole discretion. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our website after any revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">10. Termination</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              We may terminate or suspend your access to all or part of the website, without notice, for any conduct that we, in our sole discretion, believe is in violation of any applicable law or is harmful to the interests of another user, a third-party provider, a service provider, or us.
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-4 newsreader-700">11. Contact Information</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500 mb-6">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 newsreader-500">
              The Pigeons News<br />
              Email: privacy@pigeonnews.com<br />
            </p>
          </div>
          <aside className="col-span-full lg:col-span-4">
            <StarHeader title="Key Points" className="mb-6" />
            <div className="space-y-6">
              {['Acceptance', 'Content Use', 'User Contributions', 'Intellectual Property', 'Warranties', 'Liability', 'Indemnification', 'Governing Law', 'Changes', 'Termination', 'Contact'].map((point) => (
                <div key={point} className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📜</span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl mb-2 newsreader-500">{point}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Important information about {point.toLowerCase()}.</p>
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

export default TermsOfUse;