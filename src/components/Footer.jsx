export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-inner border-t border-border">
      <div className="px-6 sm:px-10 py-3 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} MediLedger. All rights reserved.
      </div>
    </footer>
  );
}