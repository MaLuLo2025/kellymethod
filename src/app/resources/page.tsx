import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";
import FadeIn from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "A curated short list of resources for POTS patients: advocacy organizations, specialist-finder tools, research, community, and accommodation.",
};

interface Resource {
  name: string;
  url: string;
  description: string;
}

function ResourceItem({ resource }: { resource: Resource }) {
  return (
    <div className="border-t border-ink/15 pt-6 pb-2">
      <h3 className="font-serif text-h3 text-ink font-medium mb-2 leading-tight">
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-forest transition-colors no-underline"
        >
          {resource.name}
          <span className="text-small text-ember ml-2 font-sans">↗</span>
        </a>
      </h3>
      <p className="text-body text-ink/75 leading-relaxed">
        {resource.description}
      </p>
    </div>
  );
}

const ADVOCACY: Resource[] = [
  {
    name: "Dysautonomia International",
    url: "https://www.dysautonomiainternational.org",
    description:
      "The largest and most established POTS patient advocacy organization in the United States. Publishes patient-facing educational material, funds research, maintains a directory of POTS-treating physicians, and organizes an annual medical conference. The first resource to recommend to most patients.",
  },
  {
    name: "Standing Up to POTS",
    url: "https://www.standinguptopots.org",
    description:
      "A patient-founded nonprofit focused on POTS awareness, research funding, and patient support. Publishes the POTScast, a long-running podcast interviewing clinicians and researchers, and maintains substantial education-focused content for patients.",
  },
  {
    name: "The Dysautonomia Project",
    url: "https://thedysautonomiaproject.org",
    description:
      "Focused on reducing diagnostic delay by educating both patients and physicians. Publishes a detailed clinician-facing handbook on POTS diagnosis and management that some patients bring to appointments.",
  },
  {
    name: "PoTS UK",
    url: "https://www.potsuk.org",
    description:
      "The primary UK patient organization for POTS. Publishes UK-specific guidance on accessing NHS care, lists consultants familiar with POTS, and maintains a patient support network for readers in the United Kingdom.",
  },
  {
    name: "Dysautonomia Support Network",
    url: "https://www.dysautonomiasupport.org",
    description:
      "Provides peer support, educational resources, and patient navigation assistance, with particular focus on helping patients connect with others in their region.",
  },
];

const SPECIALIST_FINDERS: Resource[] = [
  {
    name: "Dysautonomia International Physician List",
    url: "https://www.dysautonomiainternational.org/page.php?ID=14",
    description:
      "A patient-maintained registry of physicians in the U.S. and internationally who treat POTS and related autonomic disorders. Inclusion does not constitute an endorsement — it means the clinician has indicated they accept POTS patients — but this is the most widely used starting point for finding a specialist.",
  },
  {
    name: "American Autonomic Society",
    url: "https://americanautonomicsociety.org",
    description:
      "The professional society for clinicians and researchers who study autonomic disorders. Useful for identifying major academic autonomic clinics (Mayo, Vanderbilt, Johns Hopkins, Cleveland Clinic, Stanford, and others) and for patients looking to understand the specialty landscape.",
  },
  {
    name: "Mayo Clinic — Autonomic Disorders",
    url: "https://www.mayoclinic.org/departments-centers/autonomic-disorders-clinic",
    description:
      "One of the major U.S. academic centers for POTS evaluation and treatment. Long wait times, but a well-established program for patients willing to travel.",
  },
  {
    name: "Vanderbilt Autonomic Dysfunction Center",
    url: "https://www.vumc.org/autonomic-dysfunction-center",
    description:
      "Among the most prominent POTS research and clinical programs in the United States. Conducts significant research into POTS mechanisms and treatments in addition to providing clinical care.",
  },
];

const RESEARCH: Resource[] = [
  {
    name: "National Institute of Neurological Disorders and Stroke — POTS Information Page",
    url: "https://www.ninds.nih.gov/health-information/disorders/postural-tachycardia-syndrome",
    description:
      "The U.S. National Institutes of Health overview page for POTS. Concise, conservative, and useful as a reference for patients who want an official government source. Good to cite in conversations with skeptical clinicians or insurance representatives.",
  },
  {
    name: "Autonomic Disorders Consortium (Rare Diseases Clinical Research Network)",
    url: "https://www.rarediseasesnetwork.org/cms/adc",
    description:
      "A multi-institutional research consortium funded by the NIH that studies POTS and related autonomic disorders. Useful for patients interested in clinical trial participation and for following the research agenda in autonomic medicine.",
  },
  {
    name: "Journal of the American College of Cardiology — POTS Expert Consensus Statement",
    url: "https://www.jacc.org/doi/10.1016/j.jacc.2023.03.004",
    description:
      "A 2023 expert consensus statement from major cardiology organizations summarizing current understanding of POTS diagnosis and management. Dense, clinical, and the kind of source worth bringing to an appointment when a clinician needs to see peer-reviewed evidence.",
  },
  {
    name: "Bateman Horne Center",
    url: "https://batemanhornecenter.org",
    description:
      "A clinical and research center focused on ME/CFS, Long COVID, and related conditions including POTS. Publishes clinician-facing guidance on orthostatic intolerance and post-exertional malaise that is widely respected in the dysautonomia community.",
  },
];

const COMMUNITY: Resource[] = [
  {
    name: "r/POTS (Reddit)",
    url: "https://www.reddit.com/r/POTS",
    description:
      "The largest English-language POTS discussion community. Generally well-moderated, with shared patient experiences, questions about tests and appointments, and practical advice on living with the condition. Like any patient community, treatment suggestions you encounter should be discussed with your clinician before acting on them.",
  },
  {
    name: "r/dysautonomia (Reddit)",
    url: "https://www.reddit.com/r/dysautonomia",
    description:
      "A broader community covering POTS alongside other forms of dysautonomia. Useful for patients whose diagnosis is uncertain or who have overlapping autonomic conditions.",
  },
  {
    name: "Dysautonomia International on Facebook",
    url: "https://www.facebook.com/DysautonomiaInternational",
    description:
      "The official Facebook presence of Dysautonomia International. Curated updates, research news, and event announcements. More useful than most patient-run Facebook groups, which tend to vary widely in quality.",
  },
];

const COMORBIDITIES: Resource[] = [
  {
    name: "The Ehlers-Danlos Society",
    url: "https://www.ehlers-danlos.com",
    description:
      "The primary international nonprofit for Ehlers-Danlos syndromes, including hypermobile EDS (hEDS), which frequently co-occurs with POTS. Publishes diagnostic criteria, finds specialists, and runs an international research registry.",
  },
  {
    name: "The Mast Cell Disease Society",
    url: "https://tmsforacure.org",
    description:
      "Patient advocacy organization for mast cell disorders, including MCAS (mast cell activation syndrome), which is commonly diagnosed alongside POTS in a subset of patients. Publishes diagnostic criteria and specialist lists.",
  },
  {
    name: "ME Action",
    url: "https://www.meaction.net",
    description:
      "Advocacy and education organization for myalgic encephalomyelitis / chronic fatigue syndrome (ME/CFS), which overlaps significantly with POTS in both symptoms and patient population. Particularly useful for patients with substantial post-exertional malaise.",
  },
  {
    name: "Long COVID Physio",
    url: "https://longcovid.physio",
    description:
      "International group of physiotherapists and researchers focused on rehabilitation approaches for Long COVID, including post-COVID POTS. Publishes guidance on safe exercise, pacing, and autonomic rehabilitation for patients whose POTS followed a COVID-19 infection.",
  },
  {
    name: "The Foundation for Peripheral Neuropathy",
    url: "https://www.foundationforpn.org",
    description:
      "Focused on peripheral neuropathy including small fiber neuropathy, which affects a meaningful subset of POTS patients. Useful for patients pursuing skin biopsy or other neuropathy workup.",
  },
];

const ACCOMMODATIONS: Resource[] = [
  {
    name: "U.S. Social Security Administration — Applying for Disability",
    url: "https://www.ssa.gov/benefits/disability",
    description:
      "The official SSA portal for Social Security Disability Insurance (SSDI) and Supplemental Security Income (SSI) applications. POTS is not automatically qualifying, but patients whose condition substantially limits their ability to work may qualify. Documentation — including tilt table results and specialist records — is central to a successful application.",
  },
  {
    name: "Job Accommodation Network (JAN)",
    url: "https://askjan.org",
    description:
      "A free service funded by the U.S. Department of Labor that provides guidance on workplace accommodations for employees with disabilities, including chronic conditions like POTS. Offers searchable accommodation examples by condition and can provide individualized consultation to patients and employers.",
  },
  {
    name: "ADA National Network",
    url: "https://adata.org",
    description:
      "Information and technical assistance on the Americans with Disabilities Act, including reasonable workplace and educational accommodations. Useful for patients negotiating accommodations at work or school.",
  },
  {
    name: "Understood.org — 504 Plans and IEPs",
    url: "https://www.understood.org/en/articles/the-difference-between-ieps-and-504-plans",
    description:
      "Parent-focused guide to 504 Plans and Individualized Education Programs (IEPs) in U.S. public schools. POTS qualifies for accommodations under Section 504 in most cases. A useful starting point for parents navigating school accommodations for children with POTS.",
  },
  {
    name: "Dysautonomia International — School and Workplace Resources",
    url: "https://www.dysautonomiainternational.org/page.php?ID=36",
    description:
      "POTS-specific accommodation guidance, including sample letters to employers and schools, lists of common accommodations, and patient-tested approaches to advocating for workplace and educational needs.",
  },
];

const CRISIS: Resource[] = [
  {
    name: "988 Suicide and Crisis Lifeline (U.S.)",
    url: "https://988lifeline.org",
    description:
      "If you are in mental health crisis or having thoughts of self-harm, call or text 988. Living with chronic illness — particularly one that took years to get taken seriously — is genuinely hard. Mental health support is part of comprehensive care, not separate from it.",
  },
  {
    name: "Crisis Text Line",
    url: "https://www.crisistextline.org",
    description:
      "Text HOME to 741741 (U.S. and Canada) or SHOUT to 85258 (UK) to connect with a trained crisis counselor via text. An alternative for patients who prefer text to phone contact.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="container-editorial pt-16 md:pt-20 pb-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-8 tracking-widest">
              Resources
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              A short list of resources that help.
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="font-serif text-lead text-ink/80 italic leading-relaxed space-y-4">
              <p>
                We are not the only resource for POTS patients, and we don&apos;t intend to be. The organizations, directories, and references below have been doing valuable work in this space for longer than we have — and for most of what patients actually need, they are the first place to look.
              </p>
              <p>
                This list is curated rather than exhaustive. Every entry here is a resource we would send to a patient or clinician ourselves. Inclusion is not an endorsement of every position or product associated with the organization, but a judgment that the resource is useful on balance and worth consulting.
              </p>
              <p>
                The list is reviewed periodically. If a resource here is broken, misleading, or no longer worth recommending, write to{" "}
                <a href="mailto:hello@kellymethod.com" className="text-ember not-italic font-normal">
                  hello@kellymethod.com
                </a>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ADVOCACY ORGANIZATIONS ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Patient advocacy and education
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Organizations doing the work.
              </h2>
              <p className="text-lead text-ink/75 mb-10 leading-relaxed">
                Patient-founded and patient-led nonprofits focused on awareness, research funding, and education. Most patients find it useful to be familiar with at least one.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                {ADVOCACY.map((resource) => (
                  <ResourceItem key={resource.url} resource={resource} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SPECIALIST FINDERS ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              Finding a specialist
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              Directories and major clinical programs.
            </h2>
            <p className="text-lead text-ink/75 mb-10 leading-relaxed">
              The specialist landscape for POTS is uneven, and finding the right clinician often takes some work. These directories and programs are the standard starting points.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              {SPECIALIST_FINDERS.map((resource) => (
                <ResourceItem key={resource.url} resource={resource} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== RESEARCH AND CLINICAL REFERENCE ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Research and clinical reference
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Official and peer-reviewed sources.
              </h2>
              <p className="text-lead text-ink/75 mb-10 leading-relaxed">
                For patients, clinicians, and readers who want authoritative documentation — including the kind of source you can cite in a clinical conversation or an insurance appeal.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                {RESEARCH.map((resource) => (
                  <ResourceItem key={resource.url} resource={resource} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY AND PEER SUPPORT ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              Community and peer support
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              Where patients talk to patients.
            </h2>
            <p className="text-lead text-ink/75 mb-8 leading-relaxed">
              Patient communities are one of the real benefits of the internet for chronic illness. They are also uneven in quality, occasionally home to unproven treatments or alarmist rhetoric, and no substitute for a clinician.
            </p>
            <p className="text-body text-ink/75 mb-10 leading-relaxed">
              The communities below are reasonably well-moderated and generally reflect responsible patient discussion. Treatment suggestions or diagnostic speculation you encounter in any community — including these — should be discussed with your own clinician before acting on them.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              {COMMUNITY.map((resource) => (
                <ResourceItem key={resource.url} resource={resource} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== COMORBIDITIES ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Common comorbidities
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Resources for conditions that often accompany POTS.
              </h2>
              <p className="text-lead text-ink/75 mb-10 leading-relaxed">
                POTS frequently co-occurs with other conditions — hypermobile Ehlers-Danlos syndrome, mast cell activation syndrome, ME/CFS, Long COVID, and small fiber neuropathy, among others. Each of these has its own advocacy and research infrastructure, and patients often benefit from consulting them directly.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                {COMORBIDITIES.map((resource) => (
                  <ResourceItem key={resource.url} resource={resource} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== ACCOMMODATIONS AND LEGAL ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              Accommodations, work, and school
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              Practical resources for navigating daily life.
            </h2>
            <p className="text-lead text-ink/75 mb-10 leading-relaxed">
              POTS is recognized as a disability under U.S. law when it substantially limits major life activities, which means patients are entitled to reasonable accommodations at work and school. These resources help navigate that framework.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              {ACCOMMODATIONS.map((resource) => (
                <ResourceItem key={resource.url} resource={resource} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CRISIS SUPPORT ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                If you are in crisis
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Mental health support.
              </h2>
              <p className="text-lead text-ink/75 mb-10 leading-relaxed">
                Chronic illness, medical dismissal, and the waiting that comes with both take a real toll. If you are struggling, please reach out.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                {CRISIS.map((resource) => (
                  <ResourceItem key={resource.url} resource={resource} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="bg-forest text-offwhite py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <ContourDivider variant="mark" />
              <h2 className="font-serif text-h1 text-offwhite font-medium mb-8 mt-4 leading-tight">
                Know a resource we should add?
              </h2>
              <div className="font-serif text-lead text-offwhite/85 italic leading-relaxed space-y-5">
                <p>
                  This page is curated rather than exhaustive, and the POTS resource landscape continues to grow. If you know of an organization, tool, community, or reference that belongs here — particularly one serving patient populations or geographies we have missed — we want to hear about it.
                </p>
                <p>
                  Write to{" "}
                  <a
                    href="mailto:hello@kellymethod.com"
                    className="text-offwhite underline decoration-offwhite/50 hover:decoration-offwhite not-italic font-normal"
                  >
                    hello@kellymethod.com
                  </a>
                  . Please include a link and a brief note on why the resource has been useful.
                </p>
                <p>
                  We review the full list periodically and update it as the field evolves.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-16 flex flex-wrap gap-4">
                <Link
                  href="/diagnosis"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-ember text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-ember-700 transition-colors no-underline shadow-sm"
                >
                  Read the diagnosis guide
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 px-7 py-4 text-body text-offwhite font-sans font-medium tracking-tight border border-offwhite/40 hover:border-offwhite hover:bg-offwhite/5 rounded-sm transition-colors no-underline"
                >
                  Subscribe to Rounds
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
