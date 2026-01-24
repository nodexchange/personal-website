import { Header, Footer, Container } from "@/components/layout";
import { FadeIn } from "@/components/ui/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Stack | Marcin Wojtala",
  description:
    "Enterprise technologies for building high-performance, low-latency financial platforms at scale.",
};

const stackCategories = [
  {
    title: "Development Environment",
    description: "Where the code happens",
    items: [
      {
        name: "Cursor",
        description: "AI-first code editor built on VS Code. Essential for agentic development workflows.",
      },
      {
        name: "VS Code",
        description: "Still my go-to for specific tasks. Extensive extension ecosystem.",
      },
      {
        name: "Warp",
        description: "Modern terminal with AI assistance. Makes CLI work faster and more intuitive.",
      },
      {
        name: "GitHub Copilot",
        description: "AI pair programmer. Integral to my daily coding workflow.",
      },
    ],
  },
  {
    title: "Languages & Frameworks",
    description: "Building full-stack financial platforms",
    items: [
      {
        name: "Java / Spring / Maven",
        description: "Enterprise backend services with Spring Boot. High-throughput APIs and integration layers.",
      },
      {
        name: "TypeScript",
        description: "Type-safe frontend and Node.js services. Primary language for UI engineering.",
      },
      {
        name: "React / Next.js",
        description: "Modern trading UIs, dashboards, and portfolio management interfaces.",
      },
      {
        name: "Python",
        description: "Automation, data pipelines, and AI/ML experimentation with AWS Bedrock.",
      },
    ],
  },
  {
    title: "Distributed Systems & Caching",
    description: "Low-latency data access at scale",
    items: [
      {
        name: "GemFire Cache",
        description: "In-memory data grid for sub-millisecond access to portfolio and market data.",
      },
      {
        name: "Apache Ignite",
        description: "Distributed caching and compute for real-time analytics and hot data.",
      },
      {
        name: "Redis",
        description: "High-performance caching layer for session state and real-time feeds.",
      },
      {
        name: "Kafka",
        description: "Event streaming backbone for real-time data pipelines and system integration.",
      },
    ],
  },
  {
    title: "Architecture & APIs",
    description: "Patterns for scalable financial systems",
    items: [
      {
        name: "Microservices",
        description: "Stateless, independently deployable services. Led multiple monolith-to-microservices migrations.",
      },
      {
        name: "REST / GraphQL APIs",
        description: "Contract-first API design with OpenAPI specs and consumer-driven contracts.",
      },
      {
        name: "Event-Driven Architecture",
        description: "Async messaging, CQRS, and event sourcing for decoupled, resilient systems.",
      },
      {
        name: "Multi-Region Replication",
        description: "Database replication and active-active architectures for global low-latency access.",
      },
    ],
  },
  {
    title: "Testing & Quality",
    description: "Quality engineering toolkit",
    items: [
      {
        name: "PactFlow / Pact",
        description: "Contract testing for microservices. Consumer-driven contracts essential for distributed systems.",
      },
      {
        name: "Playwright",
        description: "End-to-end testing framework. Visual regression and cross-browser testing.",
      },
      {
        name: "BlazeMeter / k6",
        description: "Performance and load testing at scale. Validating throughput and latency SLAs.",
      },
      {
        name: "Chaos Monkey",
        description: "Chaos engineering for resilience testing. Breaking things on purpose.",
      },
    ],
  },
  {
    title: "Security & Code Quality",
    description: "Shift-left security in CI/CD pipelines",
    items: [
      {
        name: "Snyk",
        description: "Dependency scanning and vulnerability detection. Integrated into every pipeline.",
      },
      {
        name: "SonarQube",
        description: "Static code analysis, code smells, and security hotspots. Quality gates for PRs.",
      },
      {
        name: "Veracode",
        description: "Dynamic application security testing. Enterprise-grade DAST integrated into CI/CD.",
      },
      {
        name: "Trivy",
        description: "Container image scanning. Catching vulnerabilities before deployment.",
      },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description: "AWS-first, globally distributed",
    items: [
      {
        name: "AWS (EKS, Lambda, EC2, Lightsail, Beanstalk, Bedrock)",
        description: "Primary cloud platform. Full spectrum from Lightsail to EKS orchestration, Lambda serverless, and Bedrock for AI streaming.",
      },
      {
        name: "Kubernetes / Docker",
        description: "Container orchestration at enterprise scale. Stateless microservices deployment.",
      },
      {
        name: "Terraform",
        description: "Infrastructure as Code at the forefront. All applications provisioned declaratively with bespoke configs for multi-region scalability and resilience.",
      },
      {
        name: "Jenkins / GitHub Actions / GitLab CI",
        description: "CI/CD pipeline design and automation. Automated testing, security scanning, and deployment at scale.",
      },
    ],
  },
  {
    title: "AI & Productivity",
    description: "Force multipliers for engineering work",
    items: [
      {
        name: "Claude",
        description: "Primary AI assistant for complex reasoning, code review, and writing.",
      },
      {
        name: "ChatGPT",
        description: "Quick lookups, brainstorming, and alternative perspectives.",
      },
      {
        name: "Notion",
        description: "Knowledge management, documentation, and team wikis.",
      },
      {
        name: "Linear",
        description: "Issue tracking that doesn't get in the way. Clean and fast.",
      },
    ],
  },
  {
    title: "Hardware",
    description: "The physical setup",
    items: [
      {
        name: "MacBook Pro M3 Max",
        description: "Primary machine. Exceptional performance for development.",
      },
      {
        name: "Dell UltraSharp 32\" 4K",
        description: "High-resolution display for code and design work.",
      },
      {
        name: "Keychron Q1 Pro",
        description: "Mechanical keyboard. Great typing experience.",
      },
      {
        name: "Sony WH-1000XM5",
        description: "Noise-cancelling headphones for focus time.",
      },
    ],
  },
];

export default function StackPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 hero-gradient">
          <Container>
            <FadeIn>
              <p className="text-primary font-medium mb-4 tracking-wide">
                Stack
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="mb-6 max-w-3xl">
                Tools of the trade.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
                Enterprise technologies for building high-performance financial
                platforms &mdash; from distributed caching and event-driven
                architectures to cloud-native infrastructure at global scale.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* Stack Categories */}
        <section className="section-padding bg-background relative z-10">
          <Container>
            <div className="space-y-16">
              {stackCategories.map((category, categoryIndex) => (
                <div key={category.title}>
                  <FadeIn delay={categoryIndex * 0.05}>
                    <h2 className="text-2xl font-semibold mb-2">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      {category.description}
                    </p>
                  </FadeIn>

                  <div className="grid gap-4 md:grid-cols-2">
                    {category.items.map((item, itemIndex) => (
                      <FadeIn
                        key={item.name}
                        delay={categoryIndex * 0.05 + itemIndex * 0.05}
                      >
                        <Card className="border-border/50 h-full hover:border-border transition-colors">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base font-medium">
                              {item.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription>{item.description}</CardDescription>
                          </CardContent>
                        </Card>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-secondary/30">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <FadeIn>
                <h2 className="mb-6">Tool philosophy</h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <p className="text-muted-foreground mb-6">
                  I believe in using tools that get out of the way and let you
                  focus on the work. The best tool is the one you don&apos;t have to
                  think about.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-muted-foreground">
                  With the rise of AI-assisted development, my stack has evolved
                  to embrace agentic workflows. The tools listed here reflect
                  this shift toward AI as a collaborative partner in the
                  development process.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
