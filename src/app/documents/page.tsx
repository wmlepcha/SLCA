export default function DocumentsPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4 fredericka-the-great-regular">Documents</h1>
          <div className="h-1 w-32 brand-gradient rounded-full mx-auto" />
        </div>
        
        <p className="text-lg max-w-3xl mx-auto text-center mb-12">
          Access official documents and publications related to the Sikkimese Lepcha Cultural Association.
        </p>
      </section>
      
      {/* Official Documents Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Official Documents</h2>
        <div className="lepcha-border mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[var(--dark-green)] text-[var(--butter-yellow)] p-4">
              <h3 className="text-xl font-semibold">Memorandum & Constitution</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-48 bg-gray-50 mb-4 rounded">
                <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="mb-4">The official constitution document outlining the organization&apos;s structure, governance, and operational guidelines.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">PDF Document</span>
                <button className="px-4 py-2 bg-[var(--brand-green)] text-white rounded hover:opacity-90 disabled:opacity-50" disabled>
                  Download
                </button>
              </div>
              <p className="text-xs mt-4 text-gray-500">Place file at <code className="px-1 py-0.5 rounded bg-gray-100">public/docs/constitution.pdf</code></p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[var(--dark-green)] text-[var(--butter-yellow)] p-4">
              <h3 className="text-xl font-semibold">Certificate of Registration</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-center h-48 bg-gray-50 mb-4 rounded">
                <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="mb-4">Official registration certificate issued by the Government of Sikkim recognizing SLCA as a registered cultural organization.</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">PDF Document</span>
                <button className="px-4 py-2 bg-[var(--brand-green)] text-white rounded hover:opacity-90 disabled:opacity-50" disabled>
                  Download
                </button>
              </div>
              <p className="text-xs mt-4 text-gray-500">Place file at <code className="px-1 py-0.5 rounded bg-gray-100">public/docs/registration.pdf</code></p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Publications</h2>
        <div className="lepcha-border mb-8"></div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Annual Report 2025</h3>
              <p className="text-sm text-gray-600 mb-4">Summary of activities, achievements, and financial information for the year 2025.</p>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-sm bg-[var(--brand-green)] text-white rounded hover:opacity-90 disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Lepcha Language Guide</h3>
              <p className="text-sm text-gray-600 mb-4">Introductory guide to the Lepcha language with basic vocabulary and phrases.</p>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-sm bg-[var(--brand-green)] text-white rounded hover:opacity-90 disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Cultural Heritage Booklet</h3>
              <p className="text-sm text-gray-600 mb-4">Illustrated guide to Lepcha cultural traditions, festivals, and practices.</p>
              <div className="flex justify-end">
                <button className="px-3 py-1 text-sm bg-[var(--brand-green)] text-white rounded hover:opacity-90 disabled:opacity-50" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Document Request Section */}
      <section>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Additional Documents?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            If you require access to other official documents or publications not listed here, 
            please contact our administrative office with your specific request.
          </p>
          <div className="inline-block rounded-md bg-[var(--brand-green)] text-white px-6 py-3 font-medium hover:opacity-95">
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
