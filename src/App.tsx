import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookOpenText,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Rocket,
  Sparkles,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  ButtonLink,
  Card,
  ExternalLinkCard,
  InlineLink,
  PageShell,
  SectionHeader,
  StatusChip,
  TagList,
  itemMotion,
  listMotion,
} from './components';
import {
  type NavItem,
  type PageId,
  handbookGroups,
  homelabDomains,
  homelabHardware,
  navItems,
  pageTitles,
  projects,
  roadmapGroups,
  skillGroups,
  thinkingPrinciples,
  writingPosts,
} from './data';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#5f9df7' },
    secondary: { main: '#d6a84f' },
    background: {
      default: '#080d18',
      paper: 'rgba(255,255,255,0.045)',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b8c2d2',
    },
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 6,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          borderColor: 'rgba(214, 168, 79, 0.32)',
          color: '#d9e4f5',
        },
      },
    },
  },
});

const pageMotion = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
};

function getPageFromHash(): PageId {
  const raw = window.location.hash.replace('#/', '').replace('#', '') || 'home';
  return navItems.some((item) => item.page === raw) ? (raw as PageId) : 'home';
}

function App() {
  const [page, setPage] = useState<PageId>(getPageFromHash);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sageOpen, setSageOpen] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      const nextPage = getPageFromHash();
      setPage(nextPage);
      setMobileOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = pageTitles[page];
  }, [page]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-site text-slate-100">
        <Header page={page} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <motion.div key={page} {...pageMotion}>
              {page === 'home' && <HomePage />}
              {page === 'start' && <StartHerePage />}
              {page === 'about' && <AboutPage />}
              {page === 'experience' && <ExperiencePage />}
              {page === 'engineering' && <EngineeringPage />}
              {page === 'homelab' && <HomelabPage />}
              {page === 'projects' && <ProjectsPage />}
              {page === 'roadmap' && <RoadmapPage />}
              {page === 'writing' && <WritingPage />}
              {page === 'thinking' && <ThinkingPage />}
              {page === 'resume' && <ResumePage />}
              {page === 'contact' && <ContactPage />}
            </motion.div>
          </AnimatePresence>
        </main>
        <FloatingSage open={sageOpen} setOpen={setSageOpen} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function Header({
  page,
  mobileOpen,
  setMobileOpen,
}: {
  page: PageId;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080d18]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#/home" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-gold text-sm font-black text-[#080d18]">
            TD
          </span>
          <span>
            <span className="block text-sm font-semibold leading-4 text-white">TattooedDevv</span>
            <span className="block text-xs text-slate-400">Jasmine Meade</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 2xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.page} item={item} active={page === item.page} />
          ))}
        </div>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white 2xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {mobileOpen ? (
        <div className="border-t border-white/10 bg-[#080d18] px-5 py-4 2xl:hidden">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {navItems.map((item) => (
              <NavLink key={item.page} item={item} active={page === item.page} mobile />
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function NavLink({ item, active, mobile = false }: { item: NavItem; active: boolean; mobile?: boolean }) {
  return (
    <a
      href={`#/${item.page}`}
      className={`focus-ring rounded-md px-3 py-2 text-sm transition ${
        active ? 'bg-gold text-[#080d18]' : 'text-slate-300 hover:bg-white/[0.07] hover:text-white'
      } ${mobile ? 'block py-3' : ''}`}
    >
      {item.label}
    </a>
  );
}

function HomePage() {
  return (
    <>
      <section className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">TattooedDevv / Jasmine Meade</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Platform engineer building a long-term engineering documentation ecosystem.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            This site is the curated front door to my resume, projects, homelab, handbooks,
            certification roadmap, technical writing, and engineering story.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#/start" variant="primary" icon={Rocket}>
              Start Here
            </ButtonLink>
            <ButtonLink href="#/engineering" variant="secondary" icon={BookOpenText}>
              Engineering Ecosystem
            </ButtonLink>
            {/* TODO: Replace /resume.pdf with Jasmine's real resume file in public/resume.pdf. */}
            <ButtonLink href="/resume.pdf" variant="ghost" icon={Download}>
              Download Resume
            </ButtonLink>
          </div>
        </div>
        <Card className="p-6 lg:p-8">
          <p className="text-sm text-slate-400">Current direction</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Platform Engineer / SRE / DevOps</h2>
          <div className="mt-6 grid gap-4">
            <Signal label="Experience" value="Marine Corps, Amazon SWE experience, government contractor work" />
            <Signal label="Education" value="Penn State BS Software Engineering" />
            <Signal label="Focus" value="Kubernetes, AWS, Azure, Linux, networking, security, system design" />
            <Signal label="Clearance" value="DOE L / DOE Q pending" />
          </div>
        </Card>
      </section>

      <section className="section-shell border-t border-white/10">
        <SectionHeader
          kicker="Skills"
          title="Technical areas visitors can scan quickly."
          intro="Recruiters get the quick signal. Engineers can go deeper through handbooks, projects, and homelab notes."
        />
        <SkillsShowcase />
      </section>

      <section className="section-shell border-t border-white/10">
        <SectionHeader
          kicker="Ecosystem"
          title="The portfolio connects the proof, not every note."
          intro="GitHub is the library, the portfolio is the curated front door, LinkedIn is the distribution channel, and the homelab is the public engineering playground."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <ExternalLinkCard title="Start Here" description="A fast path for visitors with only a few minutes." href="#/start" />
          <ExternalLinkCard title="Engineering" description="Handbooks and documentation ecosystem." href="#/engineering" />
          <ExternalLinkCard title="Homelab" description="Enterprise-inspired lab and experiments." href="#/homelab" />
          <ExternalLinkCard title="How I Think" description="Engineering mindset and learning philosophy." href="#/thinking" />
        </div>
      </section>
    </>
  );
}

function StartHerePage() {
  return (
    <PageShell
      kicker="Start Here"
      title="A fast path through the portfolio."
      intro="For visitors with only a few minutes: current direction, top technical focus areas, projects, roadmap, resume, and contact."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-7">
          <h2 className="text-2xl font-semibold text-white">Jasmine Meade</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Software engineer building deeper into platform engineering, cloud-native systems,
            Kubernetes, DevOps, DevSecOps, SRE, Linux, networking, security, and system design.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#/projects" variant="primary" icon={Rocket}>
              Top Projects
            </ButtonLink>
            <ButtonLink href="#/roadmap" variant="secondary" icon={GraduationCap}>
              Roadmap
            </ButtonLink>
            <ButtonLink href="#/contact" variant="ghost" icon={Mail}>
              Contact
            </ButtonLink>
          </div>
        </Card>
        <motion.div className="grid gap-4 sm:grid-cols-2" variants={listMotion} initial="hidden" animate="visible">
          {[
            ['Technical focus', 'Kubernetes, AWS, Azure, Linux, networking, DevSecOps, system design'],
            ['Top private project', 'Sell Street, referenced at a high level only'],
            ['Public proof direction', 'Handbooks, homelab notes, labs, troubleshooting, ADRs'],
            ['Certification path', 'Golden Kubestronaut / CNCF as a major long-term goal'],
          ].map(([title, copy]) => (
            <Card key={title} className="p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{copy}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell
      kicker="About"
      title="Service background, software experience, and a platform engineering trajectory."
      intro="The short version: I learn deliberately, document deeply, and use projects and labs to turn knowledge into engineering judgment."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-7">
          <BriefcaseBusiness className="h-8 w-8 text-gold" />
          <h2 className="mt-5 text-2xl font-semibold text-white">TattooedDevv is the engineering home base.</h2>
          <p className="mt-4 leading-8 text-slate-300">
            My portfolio is not meant to be a static resume. It is the front door to my projects,
            learning roadmap, homelab, technical documentation, field notes, and professional brand.
          </p>
        </Card>
        <motion.div className="grid gap-4" variants={listMotion} initial="hidden" animate="visible">
          {[
            ['Marine Corps background', 'Operational discipline, ownership, and mission-focused execution.'],
            ['Amazon software engineering experience', 'Exposure to production engineering expectations and software delivery.'],
            ['Government contractor experience', 'Security-aware, structured environments with DOE L / DOE Q pending.'],
            ['Education path', 'Penn State BS Software Engineering with a future CMU MS Software Engineering goal.'],
          ].map(([title, copy]) => (
            <Card key={title} className="p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 leading-7 text-slate-400">{copy}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </PageShell>
  );
}

function ExperiencePage() {
  return (
    <PageShell
      kicker="Experience"
      title="A practical path toward platform and cloud-native engineering."
      intro="This page keeps experience at the right level for public portfolio use while leaving room for resume-level detail."
    >
      <motion.div className="grid gap-5 lg:grid-cols-3" variants={listMotion} initial="hidden" animate="visible">
        {[
          ['Amazon software engineering experience', 'Software delivery, production expectations, engineering collaboration, and operational awareness.'],
          ['Government contractor experience', 'Structured environments, security-conscious work, documentation, and clearance-aligned professionalism.'],
          ['Marine Corps background', 'Ownership, discipline, adaptability, reliability, and execution under pressure.'],
        ].map(([title, copy]) => (
          <Card key={title} className="p-6" hover>
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            <p className="mt-4 leading-7 text-slate-400">{copy}</p>
          </Card>
        ))}
      </motion.div>
    </PageShell>
  );
}

function EngineeringPage() {
  return (
    <PageShell
      kicker="Engineering"
      title="Engineering documentation ecosystem."
      intro="These repositories are planned as long-term engineering handbooks, not certification notes or exam dumps. They are meant to show why technologies exist, what problems they solve, how they work, trade-offs, labs, mistakes, troubleshooting, and how understanding evolves over time."
    >
      <motion.div className="grid gap-5 lg:grid-cols-2" variants={listMotion} initial="hidden" animate="visible">
        {handbookGroups.map((group) => (
          <Card key={group.area} className="p-6" hover>
            <h2 className="text-2xl font-semibold text-white">{group.area}</h2>
            <p className="mt-3 leading-7 text-slate-400">{group.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.handbooks.map((handbook) => (
                <span key={handbook} className="rounded-md border border-white/10 px-3 py-1.5 text-sm text-slate-300">
                  {handbook}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>
    </PageShell>
  );
}

function HomelabPage() {
  return (
    <PageShell
      kicker="Homelab"
      title="An enterprise-inspired engineering playground."
      intro="The homelab is where networking, Linux, storage, Kubernetes, automation, GitOps, observability, security, disaster recovery, and platform engineering experiments become real practice."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-7">
          <h2 className="text-2xl font-semibold text-white">Current lab foundation</h2>
          <p className="mt-4 leading-8 text-slate-300">
            This is not just a hardware inventory. The equipment supports repeatable practice,
            failure testing, documentation, and real operational learning.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-slate-300">
            {homelabHardware.map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="p-7">
          <h2 className="text-2xl font-semibold text-white">Documentation tracks</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {homelabDomains.map((domain) => (
              <span key={domain} className="rounded-md border border-gold/25 bg-gold/[0.07] px-3 py-1.5 text-sm text-slate-200">
                {domain}
              </span>
            ))}
          </div>
          <div className="mt-7">
            <InlineLink href="#/engineering">Connect homelab notes to engineering handbooks</InlineLink>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

function ProjectsPage() {
  return (
    <PageShell
      kicker="Projects"
      title="Project work with appropriate visibility boundaries."
      intro="Public projects can link to GitHub and documentation. Private projects are described carefully at a high level without exposing proprietary details."
    >
      <motion.div className="grid gap-6" variants={listMotion} initial="hidden" animate="visible">
        {projects.map((project) => (
          <Card key={project.name} className="p-6" hover>
            <div className="lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">
              <div>
                <div className="flex items-center gap-3">
                  <StatusChip status={project.visibility} />
                  <p className="text-sm font-semibold text-blue">{project.focus}</p>
                </div>
                <h2 className="mt-3 text-2xl font-semibold text-white">{project.name}</h2>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
              </div>
              <div className="mt-6 lg:mt-0">
                <TagList tags={project.tags} />
                {project.links ? (
                  <div className="mt-6 grid gap-3">
                    {project.links.map((link) => (
                      <ExternalLinkCard key={link.label} title={link.label} description="Placeholder link to deeper documentation." href={link.href} />
                    ))}
                  </div>
                ) : (
                  <p className="mt-6 text-sm leading-6 text-slate-500">
                    More public documentation can be linked here when it is ready.
                  </p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </PageShell>
  );
}

function RoadmapPage() {
  return (
    <PageShell
      kicker="Learning Roadmap"
      title="Certifications are structured paths, not the destination."
      intro="The roadmap feeds the engineering handbooks, homelab labs, troubleshooting notes, and project work. Golden Kubestronaut / CNCF is treated as a major long-term goal."
    >
      <motion.div className="grid gap-5 lg:grid-cols-2" variants={listMotion} initial="hidden" animate="visible">
        {roadmapGroups.map((group) => (
          <Card key={group.area} className="p-6" hover>
            <h2 className="text-2xl font-semibold text-white">{group.area}</h2>
            <p className="mt-3 leading-7 text-slate-400">{group.description}</p>
            <div className="mt-6 grid gap-3">
              {group.milestones.map((milestone) => (
                <div key={milestone.name} className="flex items-center justify-between gap-4 rounded-md bg-white/[0.04] p-3">
                  <span className="text-sm text-slate-200">{milestone.name}</span>
                  <StatusChip status={milestone.status} />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </motion.div>
    </PageShell>
  );
}

function WritingPage() {
  return (
    <PageShell
      kicker="Blog / Writing"
      title="Polished context here, deeper proof in GitHub."
      intro="The content flow is LinkedIn post to portfolio article or project summary to GitHub documentation or handbook to deeper technical proof."
    >
      <motion.div className="grid gap-5 lg:grid-cols-2" variants={listMotion} initial="hidden" animate="visible">
        {writingPosts.map((post, index) => (
          <Card key={post} className="p-6" hover>
            <BookOpenText className="h-6 w-6 text-gold" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Draft {String(index + 1).padStart(2, '0')}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{post}</h2>
            <p className="mt-4 leading-7 text-slate-400">
              Placeholder for a short portfolio article that can link to deeper handbook notes, ADRs, lab notes, or GitHub documentation.
            </p>
          </Card>
        ))}
      </motion.div>
    </PageShell>
  );
}

function ThinkingPage() {
  return (
    <PageShell
      kicker="How I Think"
      title="Engineering mindset and learning philosophy."
      intro="This page makes the portfolio more memorable by showing how I approach engineering, not just which tools I have touched."
    >
      <motion.div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" variants={listMotion} initial="hidden" animate="visible">
        {thinkingPrinciples.map((principle) => (
          <Card key={principle} className="p-5" hover>
            <Sparkles className="h-5 w-5 text-gold" />
            <h2 className="mt-4 text-lg font-semibold text-white">{principle}</h2>
          </Card>
        ))}
      </motion.div>
    </PageShell>
  );
}

function ResumePage() {
  return (
    <PageShell
      kicker="Resume"
      title="A direct handoff for recruiters and hiring teams."
      intro="Keep this page lean: download the PDF, review the role fit, then contact Jasmine."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card className="p-7">
          <h2 className="text-2xl font-semibold text-white">Platform Engineer | SRE | DevOps | Software Engineer</h2>
          <p className="mt-4 leading-8 text-slate-300">
            Resume placeholder for Jasmine Meade. Add the final PDF to the public folder, then keep
            this page focused on the roles, strengths, and contact paths visitors need.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {/* TODO: Place Jasmine's PDF at public/resume.pdf or update this href to the final resume URL. */}
            <ButtonLink href="/resume.pdf" variant="primary" icon={Download}>
              Download PDF
            </ButtonLink>
            <ButtonLink href="#/contact" variant="secondary" icon={Mail}>
              Contact Jasmine
            </ButtonLink>
          </div>
        </Card>
        <Card className="p-7">
          <h3 className="font-semibold text-white">Resume should connect to</h3>
          <ul className="mt-5 grid gap-3 text-slate-300">
            {['Experience', 'Engineering ecosystem', 'Homelab', 'Projects', 'Roadmap', 'Writing'].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell
      kicker="Contact"
      title="For platform, SRE, DevOps, DevSecOps, and cloud engineering conversations."
      intro="Replace the placeholder links when your real public profiles and portfolio email are ready."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {/* TODO: Replace with Jasmine's real LinkedIn URL. */}
        <ExternalLinkCard title="LinkedIn" description="Distribution channel for engineering lessons and career updates." href="https://www.linkedin.com/in/your-linkedin/" />
        {/* TODO: Replace with Jasmine's real GitHub URL. */}
        <ExternalLinkCard title="GitHub" description="The full library for repositories, handbooks, labs, and documentation." href="https://github.com/your-github" />
        {/* TODO: Replace with Jasmine's real portfolio email. */}
        <ExternalLinkCard title="Email" description="Direct contact for hiring and engineering conversations." href="mailto:hello@tattooeddevv.io" />
      </div>
    </PageShell>
  );
}

function SkillsShowcase() {
  return (
    <motion.div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3" variants={listMotion} initial="hidden" animate="visible">
      {skillGroups.map((group) => (
        <Card key={group.name} className="p-6" hover>
          <h2 className="text-xl font-semibold text-white">{group.name}</h2>
          <p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{group.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.name} className="flex min-h-14 items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
                  <Icon className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-slate-100">{item.name}</span>
                </div>
              );
            })}
          </div>
        </Card>
      ))}
    </motion.div>
  );
}

function Signal({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-white/[0.08] pb-4 last:border-b-0 last:pb-0">
      <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{label}</span>
      <span className="font-medium leading-6 text-slate-100">{value}</span>
    </div>
  );
}

function FloatingSage({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mb-3 w-[min(calc(100vw-2.5rem),22rem)] rounded-md border border-gold/30 bg-[#101a2d]/96 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold text-white">Sage</p>
                <p className="mt-1 text-sm text-slate-400">Portfolio assistant coming soon.</p>
              </div>
              <button
                type="button"
                className="focus-ring rounded-md p-1 text-slate-400 hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close Sage placeholder"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 rounded-md bg-white/[0.05] p-3 text-sm leading-6 text-slate-300">
              When live, Sage will answer questions about projects, experience, skills, roadmap, and documentation links.
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <motion.button
        type="button"
        className="focus-ring flex items-center gap-3 rounded-md border border-gold/40 bg-[#101a2d]/95 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur transition hover:border-gold"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -3 }}
        onClick={() => setOpen(!open)}
        aria-label="Talk to Sage assistant placeholder"
      >
        <span className="grid h-9 w-9 place-items-center rounded-md bg-gold text-[#080d18]">
          <Bot className="h-5 w-5" />
        </span>
        <span className="hidden text-left sm:block">
          <span className="block leading-4">Sage</span>
          <span className="text-xs font-normal text-slate-400">Assistant coming soon</span>
        </span>
        <MessageCircle className="h-4 w-4 text-gold sm:hidden" />
      </motion.button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>© {new Date().getFullYear()} TattooedDevv. Built for tattooeddevv.io.</p>
        <div className="flex items-center gap-4">
          <a className="focus-ring rounded-md hover:text-white" href="#/home" aria-label="Home">
            <Home className="h-4 w-4" />
          </a>
          <a className="focus-ring rounded-md hover:text-white" href="#/projects" aria-label="Projects">
            <Rocket className="h-4 w-4" />
          </a>
          <a className="focus-ring rounded-md hover:text-white" href="#/homelab" aria-label="Homelab">
            <Network className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;
