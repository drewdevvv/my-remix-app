import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-6">Your Tech Agency</h1>
          <p className="text-xl mb-8">Empowering our community through accessible technology solutions</p>
          <Link 
            to="/consultation" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Request a Free Consultation
          </Link>
        </div>  
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Web & Mobile Apps</h3>
              <p className="text-gray-600">
                Custom software solutions tailored to your business needs. From concept to launch, 
                we deliver high-quality web and mobile applications.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-600">
                Leverage the power of the cloud for scalability, security and cost savings. 
                We help you adopt and optimize cloud technologies.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Data & Analytics</h3>
              <p className="text-gray-600">
                Unlock insights from your data to make informed decisions. Our data science 
                and analytics solutions enable you to capitalize on your data assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact Section continues */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Community Impact</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Accessible Innovation</h3>
              <p className="text-gray-600 mb-6">
                We believe technology should empower, not exclude. Our flexible pricing and 
                payment plans make enterprise-grade solutions accessible to businesses of all sizes.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent pricing with no hidden costs
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible payment plans for small businesses  
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Special programs for community organizations
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Local Partnership</h3>
              <p className="text-gray-600 mb-6">
                More than service providers, we're your neighbors. We understand the unique 
                challenges of local businesses and are committed to your success.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Multilingual support available
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Community-focused solutions
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Long-term growth support
                </li>
              </ul>
            </div>
          </div>  
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with technology 
            that makes a difference in our community.
          </p>
          <Link 
            to="/consultation" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Our Mission</h3>
              <p className="text-sm">
                Empowering our community through accessible technology solutions that  
                drive growth and foster innovation. From street vendors to first responders, 
                we're here to serve our neighbors.   
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">Ready to get started? Have questions?</p>
              <Link 
                to="/consultation" 
                className="text-blue-400 hover:text-blue-300 text-sm"
              >
                Schedule your free consultation →
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            <p>© {new Date().getFullYear()} Your Tech Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}