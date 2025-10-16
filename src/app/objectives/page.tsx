export default function ObjectivesPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4 fredericka-the-great-regular">Aims & Objectives</h1>
          <div className="h-1 w-32 brand-gradient rounded-full mx-auto" />
        </div>
        
        <p className="text-lg max-w-3xl mx-auto text-center mb-12">
          The Sikkimese Lepcha Cultural Association was established with the following core objectives 
          that guide all our activities and initiatives.
        </p>
      </section>
      
      {/* Main Objectives Section */}
      <section className="mb-16">
        <div className="lepcha-border mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-[var(--dark-green)] text-[var(--butter-yellow)] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Cultural Preservation</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-xl">•</span>
                <span>Preserve the Lepcha language, culture and traditions through workshops, seminars and exchanges with experts and scholars.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">•</span>
                <span>Study, cultivate and demonstrate the art of Lepcha music and dance; encourage preservation of culture and customs for community identity.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">•</span>
                <span>Preserve customary laws and usages of Lepcha communities.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl">•</span>
                <span>Preserve historical documents, places, institutions and other archives of the Lepcha community.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-[var(--brand-green)]">Community Engagement</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-xl text-[var(--brand-green)]">•</span>
                <span>Operate as a non-political, non-profit social organisation.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-[var(--brand-green)]">•</span>
                <span>Train and encourage youth in Lepcha dance, music, singing and plays; promote Sikkimese folk dance and music in coordination with the Culture Department.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-[var(--brand-green)]">•</span>
                <span>Encourage and support rich culture and heritage of the Lepcha community in Sikkim for preservation and conservation in a uniform manner.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-[var(--brand-green)]">•</span>
                <span>Promote mutual cooperation and understanding among members.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-xl text-[var(--brand-green)]">•</span>
                <span>Celebrate and perform religious ceremonies on auspicious occasions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Strategic Focus Areas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Strategic Focus Areas</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border-l-4 border-[var(--brand-green)] p-6 bg-gray-50 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Documentation</h3>
            <p>
              Systematically recording and archiving Lepcha language, oral traditions, customary practices, and historical knowledge through both traditional and digital means.
            </p>
          </div>
          
          <div className="rounded-lg border-l-4 border-[var(--brand-green)] p-6 bg-gray-50 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p>
              Creating learning opportunities for all age groups to engage with Lepcha cultural heritage, with special emphasis on youth programs and intergenerational knowledge transfer.
            </p>
          </div>
          
          <div className="rounded-lg border-l-4 border-[var(--brand-green)] p-6 bg-gray-50 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Celebration</h3>
            <p>
              Organizing cultural events, festivals, and ceremonies that showcase Lepcha traditions and create spaces for community gathering, sharing, and cultural expression.
            </p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-6">
            If you share our commitment to preserving and celebrating Lepcha cultural heritage, 
            we invite you to become part of our community and contribute to our ongoing initiatives.
          </p>
          <div className="inline-block rounded-md bg-[var(--brand-green)] text-white px-6 py-3 font-medium hover:opacity-95">
            <a href="/contact">Get Involved</a>
          </div>
        </div>
      </section>
    </div>
  );
}
