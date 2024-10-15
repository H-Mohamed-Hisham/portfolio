// Components
import { ThemeToggle, Logo } from "@/components/header";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/30 shadow-md dark:shadow-2xl backdrop-blur-sm">
      <nav
        className="container mx-auto flex items-center justify-between p-6"
        aria-label="Global"
      >
        <Logo />
        <ThemeToggle />
      </nav>
    </header>
  );
}
