import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";
import StatVisual from "@/components/StatVisual";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";
import CountUp from "@/components/motion/CountUp";
import { DIAGNOSIS_STATISTICS } from "@/lib/statistics";

export const metadata: Metadata = {
  title: "Diagnosis",
  description:
    "Why POTS takes years to diagnose, how the testing actually works, and what patients can do to be heard. A complete guide.",
};

const STAT_VISUALS = ["years", "doctors", "arc-large", "arc-small"] as const;

export default function DiagnosisPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="container-editorial pt-16 md:pt-20 pb-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-8 tracking-widest">
              The diagnosis guide
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              You waited years for this page to exist.
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="font-serif text-lead text-ink/80 italic leading-relaxed space-y-4">
              <p>
                If you are here, you probably already know the words. Tachycardia. Orthostatic. Dysautonomia. You probably typed them into a search bar at 2 a.m. after a doctor told you it was anxiety. You probably wondered whether it really was anxiety.
              </p>
              <p>
                It almost certainly wasn&apos;t.
              </p>
              <p>
                POTS is a real, measurable, treatable condition. It is also one of the most consistently missed diagnoses in medicine. This page exists so you don&apos;t have to figure that out alone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== STATS: THE DIAGNOSIS GAP ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <FadeIn>
            <div className="max-w-prose mb-12">
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                The numbers
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-6">
                What the research says about how POTS gets diagnosed.
              </h2>
              <p className="text-lead text-ink/75 leading-relaxed">
                These figures come from patient surveys conducted by Dysautonomia International and peer-reviewed studies of the POTS patient population. They describe a system that, on average, takes years to recognize a condition that can be measured at the bedside in ten minutes.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8" staggerDelay={0.15}>
            {DIAGNOSIS_STATISTICS.map((stat, i) => (
              <StaggerItem key={stat.label} className="border-t-2 border-ember pt-6">
                <p className="font-serif text-display-lg text-forest font-medium leading-none mb-2">
                  <CountUp value={stat.value} duration={1.4} />
                </p>
                <StatVisual kind={STAT_VISUALS[i]} />
                <p className="text-body text-ink font-medium mb-3">{stat.label}</p>
                {stat.detail && (
                  <p className="text-small text-ink/70 mb-3 leading-relaxed">{stat.detail}</p>
                )}
                <p className="text-micro text-stone italic">Source: {stat.source}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ===== WHY POTS GETS MISSED ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              Why it gets missed
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              POTS is hard to diagnose — but not for the reasons doctors usually give.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                The medical system fails POTS patients in a recognizable pattern. It is worth naming the pattern, because understanding it is the first step to working around it.
              </p>
              <h3>The symptoms mimic anxiety.</h3>
              <p>
                Racing heart. Shortness of breath. Lightheadedness. Trembling. Chest tightness. Nausea. Brain fog. These are also classic symptoms of a panic attack. A physician encountering them in a young woman — and most POTS patients are young women — will frequently reach for the anxiety diagnosis first. Often without running any tests.
              </p>
              <p>
                The tell is that POTS symptoms are triggered by standing, not by emotional stress. But that distinction requires a doctor to think to ask about it, and many don&apos;t.
              </p>
              <h3>The diagnostic test is simple but underused.</h3>
              <p>
                POTS can be diagnosed by measuring heart rate and blood pressure while the patient lies down, then again while standing. If the heart rate increases by 30 beats per minute (40 in adolescents) within ten minutes of standing — without a corresponding drop in blood pressure — that is the core diagnostic criterion.
              </p>
              <p>
                This test, called the active stand test, takes roughly ten minutes and costs nothing. Most primary care physicians do not perform it. Many have not been trained to recognize POTS as a distinct condition in the first place.
              </p>
              <h3>Routine tests come back normal.</h3>
              <p>
                Standard workups — EKG, bloodwork, basic cardiac evaluation — are usually normal in POTS patients. A physician looking for a structural heart problem, a thyroid disorder, or an obvious metabolic cause will find none. In the absence of a clear explanation, many default to psychiatric ones.
              </p>
              <p>
                What the standard tests miss is the dysfunction of the autonomic nervous system itself — the system that regulates heart rate, blood pressure, digestion, and temperature. Testing that specifically requires ordering specialist evaluation.
              </p>
              <h3>Most doctors have never heard of it.</h3>
              <p>
                A published survey found that only about 28% of primary care physicians could correctly identify POTS as a clinical entity. Most medical schools devote little or no curriculum time to dysautonomia. For a condition affecting an estimated one to three million Americans, that gap in clinical education is remarkable — and it is the reason most patients bounce through specialists for years before someone knows what to look for.
              </p>
              <h3>Gender and age play a role.</h3>
              <p>
                Approximately 85% of POTS patients are female, and most experience symptom onset between ages 15 and 50. A well-documented pattern in medical research shows that younger female patients with complex, non-specific symptoms are more likely to be dismissed, more likely to be told their symptoms are psychological, and more likely to wait longer for a correct diagnosis than male patients with comparable presentations.
              </p>
              <p>
                This is not an accusation. It is a documented pattern. Naming it is part of getting around it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== DIAGNOSTIC CRITERIA ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                The clinical criteria
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                What a POTS diagnosis actually requires.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  POTS is not diagnosed by how a patient feels. It is diagnosed by what their heart rate does when they stand up, measured against a specific set of clinical criteria.
                </p>
                <p>The established diagnostic criteria require all of the following:</p>
                <ul>
                  <li>
                    <strong>Sustained heart rate increase of 30 beats per minute</strong> (40 bpm for patients aged 12–19) within ten minutes of moving from supine to upright.
                  </li>
                  <li>
                    <strong>No significant drop in blood pressure</strong> (this distinguishes POTS from orthostatic hypotension, a different condition).
                  </li>
                  <li>
                    <strong>Chronic symptoms lasting at least three months</strong> — POTS is not diagnosed from a single episode. The heart rate response must be reproducible.
                  </li>
                  <li>
                    <strong>Absence of other conditions</strong> that would explain the heart rate response — such as dehydration, acute illness, anemia, hyperthyroidism, or medications that affect heart rate.
                  </li>
                </ul>
                <p>
                  The criteria are specific. A patient who meets them has POTS. A patient who does not is very likely to have something else, which matters for treatment.
                </p>
                <p>
                  The criteria are also measurable. Any clinician willing to spend ten minutes performing an active stand test with a blood pressure cuff and a heart rate monitor can determine whether a patient meets them.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== THE TWO TESTS ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              The tests
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              How POTS is actually measured.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose mb-12">
              <p>
                Two tests are used to confirm POTS. Both are widely available. Neither is expensive. Most clinicians who evaluate POTS use one or both.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border-l-2 border-ember pl-6 md:pl-8 mb-12">
              <h3 className="font-serif text-h2 text-ink font-medium mb-4">
                The active stand test
              </h3>
              <div className="prose">
                <p>
                  Also called the 10-minute stand test or NASA lean test. This is the simplest way to measure the POTS heart rate response, and it can be done in a primary care office.
                </p>
                <p>
                  <strong>How it works.</strong> The patient lies supine for 5 to 10 minutes while heart rate and blood pressure are measured at rest. The patient then stands upright, not leaning against a wall, while heart rate and blood pressure are measured at 1, 3, 5, and 10 minutes.
                </p>
                <p>
                  <strong>What it measures.</strong> The change in heart rate from lying to standing. If the heart rate sustains an increase of 30 bpm or more (40 bpm in adolescents) within the first ten minutes, and blood pressure does not drop significantly, the test is consistent with POTS.
                </p>
                <p>
                  <strong>What it feels like.</strong> For patients with POTS, it usually feels like a milder version of what triggered them to seek care in the first place — racing heart, lightheadedness, sometimes tremor or nausea. The test is not dangerous, but it is uncomfortable, and the discomfort is itself diagnostic information.
                </p>
                <p>
                  <strong>Where it can be done.</strong> Any clinic with a blood pressure cuff and a heart rate monitor. Primary care, urgent care, a cardiologist&apos;s office, a neurologist&apos;s office. Ten minutes of time and willingness on the clinician&apos;s part.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="border-l-2 border-ember pl-6 md:pl-8">
              <h3 className="font-serif text-h2 text-ink font-medium mb-4">
                The tilt table test
              </h3>
              <div className="prose">
                <p>
                  The gold standard for diagnosing orthostatic disorders. More controlled than the active stand test, and usually performed by a cardiologist or autonomic specialist.
                </p>
                <p>
                  <strong>How it works.</strong> The patient is strapped to a motorized table that tilts from horizontal to roughly 60 or 70 degrees upright. Heart rate and blood pressure are monitored continuously. The patient remains in the tilted position for up to 45 minutes.
                </p>
                <p>
                  <strong>What it measures.</strong> The same heart rate and blood pressure response as the active stand test, but under more controlled conditions. The tilt table removes the muscle activity of standing, which isolates the autonomic response more cleanly. It can also reveal other conditions — vasovagal syncope, neurally mediated hypotension, orthostatic hypotension — that can overlap with or mimic POTS.
                </p>
                <p>
                  <strong>What it feels like.</strong> Worse than the active stand test, for most patients. Because the tilt table doesn&apos;t allow muscle activity to help pump blood back to the heart, symptoms can become more pronounced. Some patients briefly lose consciousness during a tilt table test. This is expected, monitored closely, and not dangerous in a clinical setting.
                </p>
                <p>
                  <strong>Where it can be done.</strong> Hospital cardiology departments, autonomic specialty clinics, and some neurology practices. A referral is typically required.
                </p>
                <p>
                  <strong>Which test should you ask for?</strong> If a clinician suggests the active stand test and you meet the criteria, that may be enough for a diagnosis. If the active stand test is inconclusive, or if a specialist wants to rule out related conditions, the tilt table test is the next step. Some patients have both.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ADVOCATING IN THE APPOINTMENT ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                In the appointment
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                How to be heard by a doctor who may not know POTS.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  The goal of the visit is not to get your doctor to diagnose POTS themselves. Most primary care physicians can&apos;t, and shouldn&apos;t. The goal is to get an active stand test performed and, if warranted, a referral to someone who can confirm the diagnosis.
                </p>
                <p>
                  That goal is achievable in most visits, if you come prepared.
                </p>

                <h3>What to bring</h3>
                <ul>
                  <li>
                    A symptom log. At minimum, two weeks of notes on when symptoms occur (lying down, sitting, standing, walking), how long episodes last, and any triggers. Pulse readings at rest and standing, if you can take them, are particularly valuable.
                  </li>
                  <li>
                    A list of the exclusions your symptoms don&apos;t fit — such as thyroid tests you&apos;ve had, cardiac workups that were normal, or treatments for anxiety that did not improve the physical symptoms.
                  </li>
                  <li>
                    A one-page summary of your history. Doctors read faster than they listen.
                  </li>
                  <li>
                    A trusted person with you, if possible. A witness reduces the likelihood of dismissal, and they can take notes while you focus on the conversation.
                  </li>
                </ul>

                <h3>What to say</h3>
                <p>
                  The single most useful phrase is specific and clinical: <em>&ldquo;My symptoms are triggered by standing. Can we do a ten-minute stand test to check my heart rate response?&rdquo;</em>
                </p>
                <p>
                  That sentence does several things at once. It names the trigger (standing). It proposes a specific test by name. It asks for ten minutes. It puts the doctor in the position of either agreeing, declining, or justifying the decline.
                </p>
                <p>
                  If the doctor is unfamiliar with the test, you can offer: <em>&ldquo;It&apos;s the standard test for POTS — postural orthostatic tachycardia syndrome. I&apos;d like to rule it out or in.&rdquo;</em>
                </p>

                <h3>What to push back on</h3>
                <p>
                  The most common dismissals and what to say in response:
                </p>
                <ul>
                  <li>
                    <strong>&ldquo;This sounds like anxiety.&rdquo;</strong> — <em>&ldquo;I understand anxiety is common, but my symptoms are triggered by standing, not emotional stress. I&apos;d like to rule out POTS before we treat this as anxiety.&rdquo;</em>
                  </li>
                  <li>
                    <strong>&ldquo;Your tests came back normal.&rdquo;</strong> — <em>&ldquo;The standard cardiac workup is usually normal in POTS. POTS is diagnosed by a stand test, not by EKG or echocardiogram.&rdquo;</em>
                  </li>
                  <li>
                    <strong>&ldquo;Let&apos;s try an SSRI and see if that helps.&rdquo;</strong> — <em>&ldquo;I&apos;m willing to consider that, but I&apos;d like to rule out POTS first. Could we do the stand test today?&rdquo;</em>
                  </li>
                  <li>
                    <strong>&ldquo;POTS is very rare.&rdquo;</strong> — <em>&ldquo;Recent estimates put it at one to three million Americans. It&apos;s more common than multiple sclerosis. I&apos;d like to rule it out.&rdquo;</em>
                  </li>
                </ul>

                <h3>What to ask for in writing</h3>
                <p>
                  Ask that the results of any stand test be documented in your chart, including the specific numbers — heart rate lying down, heart rate at each standing interval, and blood pressure readings. If the clinician declines to perform the test, ask them to document that as well. Documentation matters if you need to see another provider, appeal insurance coverage, or establish a timeline for diagnosis.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== FINDING A CLINICIAN ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              Finding the right clinician
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              Who actually diagnoses and treats POTS.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                POTS sits at the intersection of several specialties, and there is no single &ldquo;POTS doctor&rdquo; category. Different clinicians approach the condition from different angles, and patients often end up working with more than one.
              </p>

              <h3>The specialists most likely to diagnose POTS</h3>

              <p>
                <strong>Autonomic neurologists.</strong> The smallest but most specialized group. Autonomic neurology is a subspecialty focused specifically on disorders of the autonomic nervous system, which is the system POTS affects. Fewest in number, most directly trained for this condition. Major academic medical centers — Mayo Clinic, Vanderbilt, Johns Hopkins, Cleveland Clinic, Stanford — have autonomic specialty clinics. Wait times can be long.
              </p>

              <p>
                <strong>Cardiologists, particularly electrophysiologists.</strong> Cardiologists treat heart rhythm problems, and many have become de facto POTS specialists because the core diagnostic criterion is a heart rate response. Electrophysiologists — cardiologists who subspecialize in electrical signaling of the heart — are especially common POTS providers. More widely available than autonomic neurologists, and tilt table testing is typically done in a cardiology department.
              </p>

              <p>
                <strong>General neurologists.</strong> Some general neurologists treat POTS, particularly those with an interest in dysautonomia or chronic neurological conditions. Comfort with POTS varies widely from neurologist to neurologist. Worth asking specifically whether they treat POTS before booking.
              </p>

              <p>
                <strong>Rehabilitation and exercise physiology specialists.</strong> Once POTS is diagnosed, structured exercise rehabilitation — particularly recumbent exercise protocols — is one of the best-evidenced treatments. Physical therapists and exercise physiologists trained in POTS rehabilitation play a significant role in ongoing care, though usually after diagnosis has been confirmed by another specialist.
              </p>

              <h3>How to find one</h3>

              <p>
                The most useful single resource is <strong>Dysautonomia International&apos;s physician list</strong>, a patient-maintained registry of clinicians who treat POTS and related autonomic disorders. It is not an endorsement directory — inclusion means only that the clinician has indicated they treat POTS patients — but it is the starting point most patients use.
              </p>

              <p>
                Beyond that directory: patient communities, particularly on Reddit and Facebook, are a practical source of recommendations by geography. Academic medical centers&apos; patient services departments can usually identify which of their faculty treat POTS. Autonomic and electrophysiology clinics at large hospitals often have their own websites with the information.
              </p>

              <p>
                Telehealth has meaningfully expanded access. A number of clinicians now see POTS patients virtually across state lines, which matters when the nearest autonomic specialty clinic is several hours away.
              </p>

              <h3>What if you can&apos;t get a specialist appointment</h3>

              <p>
                Wait times at major autonomic centers can run six to twelve months. In the meantime:
              </p>

              <ul>
                <li>
                  A primary care physician or local cardiologist can often perform or order the diagnostic testing that confirms POTS. A specialist is not required for the diagnosis itself — only for the more complex clinical decisions that come after.
                </li>
                <li>
                  If a local clinician is willing to perform the active stand test and the results meet criteria, that documentation is often enough for another clinician to take over ongoing care.
                </li>
                <li>
                  Some non-specialist clinicians will treat POTS with guidance from a specialist&apos;s consultation notes, even if the specialist is not the primary provider.
                </li>
              </ul>

              <p>
                The diagnosis itself does not require a specialist. The treatment plan often benefits from one.
              </p>
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
                What commonly comes with it
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                POTS rarely travels alone.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  One reason POTS is missed is that it often appears alongside other conditions that share symptoms or biological mechanisms. A patient with multiple overlapping issues is easy to dismiss as &ldquo;complicated.&rdquo; Recognizing the pattern of common comorbidities is part of understanding the full picture.
                </p>

                <h3>The trifecta</h3>
                <p>
                  A large subset of POTS patients also meet criteria for two other conditions: hypermobile Ehlers-Danlos syndrome (hEDS, a connective tissue disorder) and mast cell activation syndrome (MCAS, a mast cell disorder). The three together are common enough that clinicians who treat dysautonomia often screen for all three.
                </p>
                <ul>
                  <li>
                    <strong>hEDS</strong> presents with joint hypermobility, chronic joint pain, skin that bruises easily, and subluxations. Studies suggest that roughly a third of POTS patients meet criteria for hEDS, a rate far higher than the general population.
                  </li>
                  <li>
                    <strong>MCAS</strong> presents with flushing, unexplained allergic-type reactions, GI symptoms, and responses to histamine-rich foods or environmental triggers. The prevalence in POTS patients is not fully established but appears substantial.
                  </li>
                </ul>

                <h3>Long COVID</h3>
                <p>
                  Since 2020, an increasing fraction of new POTS cases have followed a confirmed or suspected COVID-19 infection. POTS is now recognized as one of the most common post-viral sequelae of COVID-19. Patients who developed their symptoms following COVID-19 are not outliers — they represent a substantial and growing share of the POTS population.
                </p>

                <h3>ME/CFS</h3>
                <p>
                  Myalgic encephalomyelitis / chronic fatigue syndrome (ME/CFS) and POTS share significant symptom overlap, and many patients meet criteria for both. The core ME/CFS feature — post-exertional malaise, or severe symptom exacerbation after minor activity — is also common in POTS, particularly in more severely affected patients.
                </p>

                <h3>Other common comorbidities</h3>
                <ul>
                  <li>Small fiber neuropathy</li>
                  <li>Gastroparesis and other autonomic GI dysfunction</li>
                  <li>Migraine and chronic headache disorders</li>
                  <li>Fibromyalgia</li>
                  <li>Autoimmune conditions including Hashimoto&apos;s thyroiditis, Sjögren&apos;s syndrome, and celiac disease</li>
                  <li>Anxiety and depression — genuinely common, but frequently secondary to the physical condition rather than primary</li>
                </ul>

                <p>
                  None of these are universal. Many POTS patients have none of them. But if you have two or three of the above alongside the heart rate response, the clinical picture becomes much clearer — and it becomes much harder for a clinician to dismiss the constellation as psychiatric.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== WHAT TO DO IF STILL NOT BEING HEARD ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              If you&apos;re still not being heard
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              What to do when the system keeps saying no.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                Some patients do everything above and still get dismissed. It happens. When it does, the path forward is usually procedural, not confrontational.
              </p>

              <h3>Switch clinicians.</h3>
              <p>
                A clinician who has dismissed your symptoms once will usually continue to dismiss them. You are not obligated to keep working with a doctor who does not take your condition seriously. Finding a new primary care physician or specialist is often the single highest-leverage move a patient can make.
              </p>

              <h3>Document everything.</h3>
              <p>
                Request copies of every visit note, test result, and referral decline. Patient portals typically provide these. Having a written record of what was said, what was tested, and what was declined creates a paper trail that helps future providers take you more seriously and that can be essential for insurance appeals.
              </p>

              <h3>Consider telehealth.</h3>
              <p>
                Several specialty clinics see POTS patients virtually across state lines. When the nearest autonomic specialist is a year away, a virtual consultation with a clinician familiar with POTS can confirm the diagnosis, produce documentation, and guide local care.
              </p>

              <h3>Escalate when warranted.</h3>
              <p>
                In a clinical setting, asking for a second opinion is a right, not a courtesy. Most insurance plans will cover one. Patient-advocate services exist in most major health systems. If a clinician has documented dismissive language in your chart, a patient-advocate appeal can sometimes have it corrected.
              </p>

              <h3>Know that a diagnosis changes things.</h3>
              <p>
                Once you have a confirmed POTS diagnosis in writing, the experience of being a patient typically shifts. Clinicians who previously dismissed symptoms now take them seriously. Insurance coverage becomes easier to obtain. Employers and schools have frameworks for accommodation. The diagnosis is the door through which a lot of other things become possible.
              </p>

              <p>
                Getting to that diagnosis is usually the hardest part.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CLOSING ===== */}
      <section className="bg-forest text-offwhite py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <ContourDivider variant="mark" />
              <h2 className="font-serif text-h1 text-offwhite font-medium mb-8 mt-4 leading-tight">
                One last thing.
              </h2>
              <div className="font-serif text-lead text-offwhite/85 italic leading-relaxed space-y-5">
                <p>
                  If you have been waiting years for someone to tell you that what is happening to you is real, here it is: what is happening to you is real.
                </p>
                <p>
                  POTS is measurable. The tests exist. The specialists exist. The research is accelerating. Treatment is imperfect but real, and most patients — the research suggests a strong majority — see meaningful improvement with proper care.
                </p>
                <p>
                  You are not imagining this. You are not exaggerating. You are not anxious about nothing. You have a condition, and the condition has a name, and people know how to measure it.
                </p>
                <p className="text-offwhite not-italic font-normal">
                  That is the start of getting better.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-16 flex flex-wrap gap-4">
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-ember text-offwhite text-body font-sans font-medium tracking-tight rounded-sm hover:bg-ember-700 transition-colors no-underline shadow-sm"
                >
                  Subscribe to Rounds
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/what-is-pots"
                  className="inline-flex items-center gap-2 px-7 py-4 text-body text-offwhite font-sans font-medium tracking-tight border border-offwhite/40 hover:border-offwhite hover:bg-offwhite/5 rounded-sm transition-colors no-underline"
                >
                  Learn more about POTS
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
