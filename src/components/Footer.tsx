export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--dark-green)] text-[var(--butter-yellow)] md:block hidden">
      <div className="lepcha-border" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <p>
          © {year} Sikkimese Lepcha Cultural Association
        </p>
        <p className="text-sm opacity-80">
          Site designed and maintained by Dhungkar Technology
        </p>
      </div>
    </footer>
  );
}
