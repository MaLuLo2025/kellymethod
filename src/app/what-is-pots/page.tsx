import type { Metadata } from "next";
import Link from "next/link";
import ContourDivider from "@/components/ContourDivider";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/motion/StaggerChildren";

export const metadata: Metadata = {
  title: "What Is POTS?",
  description:
    "Postural Orthostatic Tachycardia Syndrome explained: what it does to the body, the major subtypes, the full symptom picture, and what we still don't know.",
};

export default function WhatIsPotsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="container-editorial pt-16 md:pt-20 pb-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-8 tracking-widest">
              Understanding the condition
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-display text-ink font-medium mb-8 leading-tight tracking-tight">
              What is POTS?
            </h1>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="font-serif text-lead text-ink/80 italic leading-relaxed space-y-4">
              <p>
                Postural Orthostatic Tachycardia Syndrome is a chronic disorder of the autonomic nervous system. Its defining feature is that the heart rate accelerates abnormally when a person stands up, leading to lightheadedness, palpitations, fatigue, brain fog, and a long list of other symptoms.
              </p>
              <p>
                It affects an estimated one to three million Americans. Roughly 85% are women, and most experience symptom onset between adolescence and their mid-forties. Since 2020, the number of newly diagnosed cases has risen sharply, in large part because of post-viral POTS following COVID-19.
              </p>
              <p>
                The condition is real, measurable, and treatable. It is also genuinely complex — and worth understanding from the inside out.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== AUTONOMIC NERVOUS SYSTEM ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                The autonomic nervous system
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Start with the body&apos;s autopilot.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  Most of what your body does, you never think about. Your heart beats. Your pupils widen and narrow. You digest your lunch. Your temperature stays constant. Your blood pressure adjusts when you climb stairs. None of this requires your attention, and you couldn&apos;t override most of it if you tried.
                </p>
                <p>
                  This automatic control is the work of the autonomic nervous system. It runs in the background, constantly, balancing competing demands so that the conscious mind can focus on other things. When the autonomic system is working well, it is invisible.
                </p>
                <p>
                  When it doesn&apos;t work well, almost nothing in the body works quite right.
                </p>
                <p>
                  POTS is one of a family of conditions called dysautonomias — disorders in which the autonomic nervous system fails at one or more of its tasks. In POTS specifically, the failure shows up most clearly in how the body responds to changes in posture. But because the autonomic system regulates so much else — digestion, temperature, sleep, sweating, blood flow — the symptoms can extend far beyond heart rate.
                </p>
                <p>
                  Understanding POTS, in other words, requires understanding that it is not just a heart problem. The heart rate response is the most measurable feature, which is why it became the diagnostic criterion. But the underlying dysfunction is broader.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== WHAT POTS DOES TO THE BODY ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              What it does
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              What happens when a person with POTS stands up.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                In a healthy body, standing up triggers an immediate cascade of automatic adjustments. Gravity pulls about a half-liter of blood downward into the legs and abdomen. To compensate, the autonomic system constricts blood vessels in the lower body, modestly increases heart rate, and stiffens vessel tone enough that blood continues flowing efficiently to the brain. The whole process takes a few seconds and goes unnoticed.
              </p>
              <p>
                In a person with POTS, that compensatory response fails or compensates incorrectly. Blood pools in the lower body. Less blood returns to the heart. Less blood reaches the brain. The body senses this and responds by accelerating the heart dramatically — often by 30, 40, or 50 beats per minute or more — in an effort to maintain blood flow to the head.
              </p>
              <p>
                This compensatory tachycardia is the &ldquo;tachycardia&rdquo; in the name of the syndrome. It is what gets measured on the diagnostic stand test. But the heart rate spike is a symptom of the underlying problem, not the problem itself.
              </p>
              <p>
                The downstream effects of this disrupted blood flow are what make life with POTS difficult:
              </p>
              <ul>
                <li>
                  <strong>Lightheadedness and presyncope.</strong> The brain receives less blood than it needs in upright posture, particularly during the first few minutes of standing. Patients describe it as the room going gray or dim, a sense that they might pass out, or a wave of weakness when changing position. Actual fainting (syncope) does occur in some patients but is not universal.
                </li>
                <li>
                  <strong>Palpitations and chest discomfort.</strong> A heart racing at 130 beats per minute while standing in a checkout line is uncomfortable. Many patients describe a sense of pounding in the chest, sometimes with a sensation of air hunger or chest tightness.
                </li>
                <li>
                  <strong>Brain fog.</strong> Reduced cerebral blood flow has cognitive effects. Patients describe difficulty concentrating, word-finding problems, slowed processing, and a sense of mental fatigue that worsens with prolonged upright posture and improves with lying down.
                </li>
                <li>
                  <strong>Exercise intolerance.</strong> The cardiovascular response to exercise is built on the same autonomic systems that fail in POTS. Many patients find that moderate exertion triggers symptoms that linger for hours or days. This is not deconditioning, though deconditioning often follows when patients reduce activity to manage symptoms.
                </li>
                <li>
                  <strong>Fatigue.</strong> A nervous system constantly compensating for failed blood pressure regulation is an exhausted nervous system. POTS fatigue is often more profound than the symptom load alone would suggest.
                </li>
              </ul>
              <p>
                These are the symptoms most directly tied to the orthostatic stress response. There are many more, and they are covered in their own section below.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== SUBTYPES ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                The major subtypes
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                POTS is one diagnosis, several mechanisms.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  Researchers and clinicians generally describe three primary subtypes of POTS, distinguished by what is going wrong underneath the heart rate response. These categories are useful but imperfect — many patients have overlapping mechanisms, and most clinicians treat them as a spectrum rather than discrete diagnoses. Still, the distinctions matter, because different subtypes often respond to different treatment approaches.
                </p>

                <h3>Hyperadrenergic POTS</h3>
                <p>
                  In hyperadrenergic POTS, the autonomic nervous system overcompensates by releasing excessive amounts of norepinephrine — the body&apos;s primary adrenaline-like signal — when the patient stands. The heart rate response is driven not by failed vessel constriction but by sympathetic nervous system overdrive.
                </p>
                <p>
                  Patients with this subtype often describe surges that feel almost panic-like, with elevated blood pressure (rather than the more common stable or slightly low blood pressure), tremors, anxiety that follows physical symptoms rather than precedes them, and sometimes pronounced sweating. Standing norepinephrine levels above 600 pg/mL are a clinical marker. This subtype responds to medications that calm the sympathetic response.
                </p>

                <h3>Neuropathic POTS</h3>
                <p>
                  In neuropathic POTS, the underlying problem is damage to the small autonomic nerves that control blood vessel constriction in the lower body. The vessels fail to constrict adequately when the patient stands, blood pools, and the heart compensates by racing.
                </p>
                <p>
                  This subtype is associated with small fiber neuropathy and is more common in patients with autoimmune conditions, post-viral syndromes, and certain genetic conditions. Skin biopsy can sometimes confirm small fiber neuropathy. Treatment focuses on supporting blood return — through compression garments, salt and fluid loading, and medications that improve vessel tone.
                </p>

                <h3>Hypovolemic POTS</h3>
                <p>
                  In hypovolemic POTS, the underlying issue is reduced blood volume — the patient simply does not have enough circulating blood to maintain adequate flow to the brain when upright. The autonomic response to standing is appropriate; there isn&apos;t enough blood for the response to work with.
                </p>
                <p>
                  This subtype responds particularly well to volume-loading interventions: aggressive fluid intake, increased salt, IV fluids in some cases, and medications that promote fluid retention. Some patients with hypovolemic POTS have abnormalities in the renin-angiotensin-aldosterone system that prevent the kidneys from properly regulating blood volume.
                </p>

                <h3>The reality is messier than the categories</h3>
                <p>
                  Most POTS patients show features of more than one subtype. A patient may have hypovolemic features alongside hyperadrenergic surges. Neuropathic and hyperadrenergic POTS often coexist. Subtype boundaries shift over the course of the illness — a patient may start primarily neuropathic and develop hyperadrenergic features, or vice versa.
                </p>
                <p>
                  The subtypes are useful as a clinical framework for thinking about treatment. They are less useful as a way to assign each patient a single label. In practice, experienced POTS clinicians treat the patient in front of them — whatever combination of mechanisms shows up.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== FULL SYMPTOM PICTURE ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              The full symptom picture
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              POTS is more than what happens when you stand up.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                Because the autonomic nervous system regulates so many different bodily functions, POTS produces symptoms that extend well beyond cardiovascular ones. Patients are often surprised — and sometimes relieved — to find that seemingly unrelated symptoms they have been carrying for years are part of the same condition.
              </p>

              <h3>Cardiovascular</h3>
              <ul>
                <li>Tachycardia on standing, often persistent</li>
                <li>Palpitations and irregular heartbeat awareness</li>
                <li>Chest pain or pressure (typically not cardiac in origin)</li>
                <li>Lightheadedness, presyncope, occasional syncope</li>
                <li>Shortness of breath or air hunger</li>
                <li>Cold or discolored hands and feet (acrocyanosis)</li>
              </ul>

              <h3>Cognitive</h3>
              <ul>
                <li>Brain fog — difficulty concentrating, word finding, slowed processing</li>
                <li>Memory problems, particularly short-term</li>
                <li>Mental fatigue out of proportion to activity</li>
                <li>Difficulty multitasking</li>
              </ul>

              <h3>Gastrointestinal</h3>
              <ul>
                <li>Nausea, particularly upon waking or after meals</li>
                <li>Early satiety and reduced appetite</li>
                <li>Bloating, constipation, or alternating bowel patterns</li>
                <li>Gastroparesis (delayed stomach emptying) in some patients</li>
                <li>Abdominal pain</li>
              </ul>

              <h3>Temperature and skin</h3>
              <ul>
                <li>Heat intolerance — symptoms worsen significantly in warm weather, hot showers, or heated rooms</li>
                <li>Excessive sweating in some patients, reduced sweating in others</li>
                <li>Flushing</li>
                <li>Cold extremities</li>
              </ul>

              <h3>Sleep</h3>
              <ul>
                <li>Difficulty falling asleep despite exhaustion</li>
                <li>Non-restorative sleep — waking up feeling unrefreshed</li>
                <li>Vivid dreams or unusual sleep architecture</li>
                <li>Symptoms often improve after several hours of being recumbent overnight, then return on rising</li>
              </ul>

              <h3>Other</h3>
              <ul>
                <li>Headaches and migraines</li>
                <li>Tremor, particularly with prolonged standing</li>
                <li>Muscle pain and weakness</li>
                <li>Exercise intolerance, often with prolonged post-exertional symptom flares</li>
                <li>Menstrual cycle effects — many female patients report symptom worsening at specific points in their cycle</li>
                <li>Sensory sensitivities — to light, sound, or motion</li>
              </ul>

              <p>
                Few patients have all of these. Most have a recognizable cluster — typically the cardiovascular and cognitive symptoms with several others scattered across the categories. The pattern is what suggests POTS, not any single symptom.
              </p>
              <p>
                If a patient reads this list and finds half of it familiar, it is worth investigating. If they find most of it familiar, it is worth investigating with some urgency.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHO GETS POTS ===== */}
      <section className="bg-forest-50 py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
                Who gets POTS
              </p>
              <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
                Demographics and triggers.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="prose">
                <p>
                  POTS is not evenly distributed across the population. Several patterns recur in the research and in clinical experience.
                </p>

                <h3>Sex and age</h3>
                <p>
                  Approximately 85% of POTS patients are female. Symptom onset typically occurs between adolescence and the mid-forties, with the highest concentration in the 15-to-25 age range. Pediatric POTS exists and is increasingly recognized; onset after age 50 is less common but does occur, often following a major illness or surgery.
                </p>
                <p>
                  The sex disparity is not fully explained by current research. Hormonal influences, differences in autonomic regulation, and possibly differences in autoimmune susceptibility have all been proposed as contributing factors.
                </p>

                <h3>Common triggers</h3>
                <p>
                  In most patients, POTS develops following a recognizable triggering event. The most frequent triggers:
                </p>
                <ul>
                  <li>
                    <strong>Viral infections.</strong> Mononucleosis (Epstein-Barr virus), Lyme disease, influenza, and most prominently COVID-19 are well-documented triggers. Post-viral POTS is one of the most common presentations.
                  </li>
                  <li>
                    <strong>Concussion or head injury.</strong> A subset of patients develop POTS following traumatic brain injury, sometimes mild. The connection between brain injury and autonomic dysfunction is an active area of research.
                  </li>
                  <li>
                    <strong>Pregnancy and childbirth.</strong> Some patients develop POTS during pregnancy or postpartum, with symptoms persisting after recovery from the birth itself.
                  </li>
                  <li>
                    <strong>Major surgery.</strong> The combined stress of anesthesia, immobilization, and physical recovery sometimes triggers POTS in previously healthy patients.
                  </li>
                  <li>
                    <strong>Adolescent growth.</strong> Some patients first develop symptoms during the rapid physical changes of puberty and early adolescence, particularly tall, thin patients with hypermobile joints.
                  </li>
                </ul>
                <p>
                  In some patients, POTS develops gradually with no clear triggering event. This is sometimes called idiopathic POTS.
                </p>

                <h3>The Long COVID surge</h3>
                <p>
                  Since 2020, the number of newly diagnosed POTS cases has risen dramatically. Studies estimate that 2 to 14% of people who develop Long COVID meet diagnostic criteria for POTS, and a substantial fraction of newly-diagnosed POTS patients in 2024 and 2025 trace their symptom onset to a confirmed or suspected COVID-19 infection.
                </p>
                <p>
                  This is not a new condition driven by the pandemic — POTS existed before COVID-19 and was already underdiagnosed. But the pandemic has produced a large new population of patients and, perhaps as a side effect, has increased medical awareness of POTS faster than any prior period in the condition&apos;s history.
                </p>

                <h3>Genetic and family patterns</h3>
                <p>
                  POTS appears to have a familial component. Patients frequently report relatives with similar symptoms, often undiagnosed, and POTS commonly co-occurs with hypermobile Ehlers-Danlos syndrome, which has a clear genetic basis. Specific POTS-associated genes have not been firmly established, but the family pattern is recognizable enough that clinicians often ask about it.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DON'T KNOW ===== */}
      <section className="container-editorial py-section-sm">
        <div className="max-w-prose">
          <FadeIn>
            <p className="text-label uppercase text-ember font-sans font-semibold mb-4 tracking-widest">
              The edges of current understanding
            </p>
            <h2 className="font-serif text-h1 text-ink font-medium mb-8 leading-tight">
              What we don&apos;t yet know about POTS.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose">
              <p>
                Research on POTS has accelerated dramatically in the past several years, particularly since the pandemic. But significant questions remain unanswered. Naming them is part of being honest about the state of the science.
              </p>

              <h3>The root cause is still uncertain.</h3>
              <p>
                The diagnostic criteria describe what POTS does. They do not explain why it happens. Several mechanisms — autoimmune dysfunction, small fiber neuropathy, blood volume regulation problems, central nervous system involvement — appear to play roles in different patients. Researchers do not yet have a unified theory of what causes POTS or why some people develop it after a triggering event while most do not.
              </p>

              <h3>The autoimmune question.</h3>
              <p>
                A growing body of research suggests that many cases of POTS may have an autoimmune component, with antibodies that interfere with autonomic receptors. Several specific antibodies have been identified in subsets of POTS patients. Whether these antibodies cause the condition, contribute to it, or are a downstream effect remains an open question. If autoimmune mechanisms are confirmed in larger studies, immunotherapies currently under investigation may eventually become standard treatment.
              </p>

              <h3>The natural course is variable.</h3>
              <p>
                Some patients experience significant improvement over months or years, sometimes returning to near-baseline function. Others remain stable. Some worsen. The factors that predict which trajectory a given patient will follow are not well understood. There is no reliable biomarker for prognosis.
              </p>

              <h3>Treatment is still largely off-label.</h3>
              <p>
                There is no FDA-approved medication specifically for POTS. The medications most commonly prescribed — beta-blockers, midodrine, fludrocortisone, ivabradine, pyridostigmine, and others — are all approved for other conditions and used off-label in POTS. They work for many patients, but their use is based on clinical experience and smaller studies rather than the kind of large randomized trials that establish standards of care for more recognized conditions. Several POTS-specific drug trials are ongoing.
              </p>

              <h3>The mechanism of brain fog is not fully understood.</h3>
              <p>
                Reduced cerebral blood flow is part of the picture, but research increasingly suggests that POTS-related cognitive symptoms involve more than just blood flow — possibly inflammation, possibly small-vessel changes, possibly something else. This matters because addressing it requires understanding it.
              </p>

              <h3>The connection to other conditions is being mapped.</h3>
              <p>
                The relationships between POTS, Ehlers-Danlos syndrome, mast cell activation syndrome, ME/CFS, Long COVID, and small fiber neuropathy are clearly real but not fully explained. Whether these are separate conditions that frequently co-occur, manifestations of a shared underlying mechanism, or something in between is one of the most active questions in the field.
              </p>

              <p>
                The honest summary: POTS is real, common, measurable, treatable, and not yet fully understood. The science is moving quickly, but anyone who tells a POTS patient that there is a clear, complete explanation for what is happening to them is overstating what the research currently supports.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== WHERE TO GO NEXT ===== */}
      <section className="bg-forest text-offwhite py-section-sm">
        <div className="container-editorial">
          <div className="max-w-prose">
            <FadeIn>
              <ContourDivider variant="mark" />
              <h2 className="font-serif text-h1 text-offwhite font-medium mb-8 mt-4 leading-tight">
                Where to go from here.
              </h2>
              <div className="font-serif text-lead text-offwhite/85 italic leading-relaxed space-y-5">
                <p>
                  If a lot of this sounded familiar — if the symptom list described your last several years, or your child&apos;s, or someone you love — the next step is the diagnosis guide. It covers what the testing actually involves, how to ask for it, and what to do when the medical system pushes back.
                </p>
                <p>
                  If you came here as a clinician, a researcher, or simply a curious reader, the articles section publishes more focused writing on specific aspects of the condition: the diagnostic process, the comorbidities, the research, and what living with POTS actually looks like.
                </p>
                <p>
                  Either way, Rounds — the publication&apos;s newsletter — is the way to follow what we publish over time.
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
                  href="/articles"
                  className="inline-flex items-center gap-2 px-7 py-4 text-body text-offwhite font-sans font-medium tracking-tight border border-offwhite/40 hover:border-offwhite hover:bg-offwhite/5 rounded-sm transition-colors no-underline"
                >
                  Browse articles
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
