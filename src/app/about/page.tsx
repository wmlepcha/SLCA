
export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4 fredericka-the-great-regular">About SLCA</h1>
          <div className="h-1 w-32 brand-gradient rounded-full mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              The Sikkimese Lepcha Cultural Association (SLCA) is a non-political,
              non-profit social organisation formed to preserve and promote the
              language, culture, traditions and customary laws of the Lepcha
              community in Sikkim.
            </p>
            <p>
              Lepcha people, who call ourselves <em>Róngkup</em>, are the
              indigenous inhabitants of Sikkim. Our language (Róng), music,
              textiles, and oral traditions are deeply tied to the land—mountains,
              rivers, forests and bamboo. SLCA works with elders, artisans and youth to
              sustain these living traditions.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img 
              src="/images/logo.png" 
              alt="SLCA Logo" 
              className="max-w-full h-auto"
              style={{ maxHeight: '300px' }}
            />
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our History</h2>
        <div className="lepcha-border mb-8"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Foundation</h3>
            <p className="mb-4">
              The SLCA was established in 2010 by a group of dedicated Lepcha elders and cultural enthusiasts concerned about the gradual erosion of traditional practices and language among younger generations.
            </p>
            <p>
              What began as informal gatherings evolved into a registered organization with a clear mission to document, preserve, and revitalize Lepcha cultural heritage.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Growth & Development</h3>
            <p className="mb-4">
              Over the years, SLCA has expanded its reach across Sikkim, establishing community centers in key Lepcha settlements and developing educational programs focused on language preservation and cultural practices.
            </p>
            <p>
              Through partnerships with academic institutions and government cultural bodies, we have been able to document oral histories, traditional knowledge, and artistic expressions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">Present Day</h3>
            <p className="mb-4">
              Today, SLCA stands as the primary cultural organization representing Lepcha interests in Sikkim, with hundreds of active members across different age groups.
            </p>
            <p>
              Our work has expanded to include digital archiving, publication of educational materials in the Lepcha language, and organizing annual cultural festivals that draw participants from across the Himalayan region.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="mb-4 text-lg">
              To preserve, promote, and revitalize Lepcha cultural heritage through documentation, education, and community engagement, ensuring that our unique traditions continue to thrive for generations to come.
            </p>
            <p>
              We aim to create spaces where Lepcha language, arts, and customs are not only preserved as historical artifacts but continue to evolve as living traditions relevant to contemporary life.
            </p>
          </div>
          
          <div className="bg-[var(--dark-green)] text-[var(--butter-yellow)] rounded-lg p-6">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Cultural Integrity:</strong> Maintaining authenticity in all representations of Lepcha traditions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Inclusivity:</strong> Welcoming all who wish to learn about and contribute to Lepcha cultural preservation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Intergenerational Exchange:</strong> Creating meaningful connections between elders and youth</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Innovation:</strong> Embracing new methods and technologies to preserve traditional knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><strong>Environmental Stewardship:</strong> Honoring the deep connection between Lepcha culture and the natural world</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Members Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Members</h2>
        <div className="lepcha-border mb-8"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-gray-500">RL</span>
            </div>
            <h3 className="text-xl font-semibold">Rinchen Lepcha</h3>
            <p className="text-[var(--brand-green)] font-medium">Senior Member</p>
            <p className="mt-2">Cultural historian and language preservationist with over 25 years of experience documenting Lepcha traditions.</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-gray-500">DL</span>
            </div>
            <h3 className="text-xl font-semibold">Doma Lepcha</h3>
            <p className="text-[var(--brand-green)] font-medium">Active Member</p>
            <p className="mt-2">Educator and community organizer focused on youth engagement and cultural education programs.</p>
          </div>
          
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl text-gray-500">TL</span>
            </div>
            <h3 className="text-xl font-semibold">Tenzing Lepcha</h3>
            <p className="text-[var(--brand-green)] font-medium">Community Member</p>
            <p className="mt-2">Financial advisor with expertise in sustainable funding for cultural preservation initiatives.</p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section>
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <span className="font-medium">Registered address:</span> Dzongu Passingdang, P.O Passingdang & P.S,
            Mangan, Mangan District, Sikkim.
          </p>
          <p className="mb-2">
            <span className="font-medium">Email:</span> info@slca-sikkim.org
          </p>
          <p>
            <span className="font-medium">Phone:</span> +91 98765 43210
          </p>
        </div>
      </section>
    </div>
  );
}
