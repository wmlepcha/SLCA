import Link from "next/link";


export default function Home() {
  return (
    <>
      {/* Full-screen hero section */}
      <section className="hero-fullscreen">
        <div className="hero-image-container">
          <img 
            src="/images/lepcha-bg.png" 
            alt="Lepcha cultural illustration" 
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title font-bold tracking-tight mb-3 text-[var(--foreground)] fredericka-the-great-regular">
            <div className="flex flex-col">
              <span className="mb-[-8px]">SIKKIMESE LEPCHA</span>
              <span>CULTURAL ASSOCIATION</span>
            </div>
          </h1>
          <p className="text-lg mb-8 text-black/80 hero-paragraph md:text-lg text-base">
            A non-political, non-profit organisation dedicated to preserving and
            promoting the language, culture, traditions and customary laws of the
            Lepcha community in Sikkim.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/about" className="rounded-md bg-[#2e7d32] text-white px-6 py-3 font-medium hover:opacity-95">
              Learn more
            </Link>
            <Link href="/objectives" className="hidden md:block rounded-md border border-[#2e7d32] text-[#2e7d32] px-6 py-3 font-medium hover:bg-[#2e7d3210]">
              Aims & Objectives
            </Link>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Cultural Initiatives</h2>
          
          <div className="grid sm:grid-cols-3 gap-8 mb-16 px-4 sm:px-0">
            <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Language (Róng)</h3>
              <p className="text-black/70 mb-4">Classes and storytelling sessions to sustain the Lepcha language and oral traditions. The Lepcha script, known as <em>Róng</em>, is one of the treasures we work to preserve through regular workshops.</p>
              <p className="text-sm text-[var(--brand-green)] font-medium">Weekly language classes</p>
            </div>
            <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Music & Dance</h3>
              <p className="text-black/70 mb-4">Training in traditional folk songs and dances, creating platforms for young performers. Our annual cultural showcase highlights both traditional and contemporary Lepcha performances.</p>
              <p className="text-sm text-[var(--brand-green)] font-medium">Monthly performances</p>
            </div>
            <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Crafts & Textiles</h3>
              <p className="text-black/70 mb-4">Workshops on traditional weaving, bamboo craft and attire like <em>dumvum</em> (women&apos;s dress) and <em>sumok thyaktuk</em> (men&apos;s garment), preserving techniques passed down through generations.</p>
              <p className="text-sm text-[var(--brand-green)] font-medium">Quarterly exhibitions</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 px-4 sm:px-0">
            <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Stewardship of Land</h3>
              <p className="text-black/70 mb-4">Community clean-ups and nature walks that honour mountains, rivers and forests central to Lepcha worldview. The Lepcha people have traditionally been stewards of Sikkim&apos;s pristine environment.</p>
              <p className="text-sm text-[var(--brand-green)] font-medium">Seasonal celebrations</p>
            </div>
            <div className="rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">Archives & Customary Law</h3>
              <p className="text-black/70 mb-4">Documenting histories, institutions and customary practices for future generations. Our digital archive project aims to preserve oral histories and traditional knowledge systems.</p>
              <p className="text-sm text-[var(--brand-green)] font-medium">Ongoing documentation</p>
            </div>
          </div>

          <div className="mt-16 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Lepcha Heritage & Culture</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center px-4 sm:px-0">
              <div className="order-2 md:order-1">
                <p className="mb-4 text-lg">
                  The Lepcha people, we call ourselves <em>Róng-kup</em> (children of the ravine), are the indigenous inhabitants of Sikkim. Our rich cultural heritage is deeply connected to the Himalayan landscape we call home.
                </p>
                <p className="mb-4">
                  We have a profound spiritual connection to nature, with our traditional belief system centered around mountain deities and nature spirits. Our language, <em>Róng-ring</em>, has its own script and rich oral traditions including folklore, myths, and songs that carry our ancestral wisdom.
                </p>
                <p>
                  Traditional Lepcha attire includes the <em>dumvum</em> (women&apos;s dress) and <em>thokro-dum</em> (men&apos;s garment), often adorned with intricate woven patterns as seen in the border above. These textiles showcase geometric designs passed down through generations, with each pattern carrying cultural significance.
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img 
                  src="/images/lepcha.png" 
                  alt="Traditional Lepcha couple illustration" 
                  className="max-w-full h-auto"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
          
          {/* New Section: Preserving Lepcha Traditions */}
          <div className="mt-20 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Preserving Lepcha Traditions</h2>
            <div className="bg-[color:var(--dark-green)] text-[color:var(--butter-yellow)] rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Language Preservation</h3>
                  <p>
                    We are actively documenting and teaching the Lepcha language (Róng-ring) to younger generations through immersive learning programs, digital resources, and community language circles.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Cultural Festivals</h3>
                  <p>
                    Our annual cultural festivals celebrate traditional music, dance, and rituals, providing a platform for artisans, performers, and knowledge keepers to share their skills and wisdom.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Sustainable Practices</h3>
                  <p>
                    We promote traditional sustainable practices in agriculture, weaving, and crafts that have been part of our heritage for centuries, adapted for contemporary relevance.
                  </p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="italic">
                  &ldquo;Our mission is to ensure that the wisdom, arts, and traditions of our ancestors continue to thrive and inspire future generations of Lepchas.&rdquo;
                </p>
              </div>
            </div>
          </div>
          
          {/* Upcoming Events Section */}
          <div className="mt-20 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-[var(--brand-green)] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[var(--brand-green)] text-white py-2 px-4 text-center">
                  <span className="font-bold">May 20, 2026</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3">Annual Lepcha Cultural Festival</h3>
                  <p className="text-black/70 mb-4">Join us for a day of traditional music, dance performances, and authentic Lepcha cuisine at our annual cultural celebration.</p>
                  <p className="text-sm font-medium">Gangtok, Sikkim • 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="border border-[var(--brand-green)] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[var(--brand-green)] text-white py-2 px-4 text-center">
                  <span className="font-bold">June 15, 2026</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3">Róng Language Workshop</h3>
                  <p className="text-black/70 mb-4">A beginner-friendly workshop on Lepcha language basics, focusing on everyday conversation and cultural expressions.</p>
                  <p className="text-sm font-medium">Dzongu Community Hall • 2:00 PM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="border border-[var(--brand-green)] rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-[var(--brand-green)] text-white py-2 px-4 text-center">
                  <span className="font-bold">July 8, 2026</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-3">Traditional Weaving Demonstration</h3>
                  <p className="text-black/70 mb-4">Learn about traditional Lepcha textile patterns and techniques from master weavers in this hands-on demonstration.</p>
                  <p className="text-sm font-medium">Passingdang Village • 11:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Community Involvement Call to Action */}
          <div className="mt-16 mb-16 bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you&apos;re a member of the Lepcha community or simply interested in learning more about our culture and traditions, we welcome your involvement and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="rounded-md bg-[var(--brand-green)] text-white px-6 py-3 font-medium hover:opacity-95">
                Contact Us
              </Link>
              <Link href="/about" className="rounded-md border border-[var(--brand-green)] text-[var(--brand-green)] px-6 py-3 font-medium hover:bg-[var(--brand-green)]/10">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
