import Link from "next/link";
import { Header, Footer, Container } from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-8xl font-bold text-primary mb-4">404</p>
            <h1 className="text-3xl font-semibold mb-4">Page not found</h1>
            <p className="text-muted-foreground mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/">Back to home</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/agentic-playbook">Read the Playbook</Link>
              </Button>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
