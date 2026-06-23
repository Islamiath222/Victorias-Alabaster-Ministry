import PageHero from '../components/common/PageHero'
import SectionHeading from '../components/common/SectionHeading'
import Reveal from '../components/common/Reveal'
import VisualPlaceholder from '../components/common/VisualPlaceholder'
import { ProfileCard } from '../components/common/Cards'
import { FaBullseye, FaEye } from 'react-icons/fa6'
import { team } from '../data/content'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A story rooted in compassion, built for lasting change"
        description="Learn about the journey, purpose, and people behind Victoria Alabaster International Women Ministry."
      />

      {/* Our Story */}
      <section className="section-pad bg-white">
        <div className="container-page grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-purple-900 mt-3 leading-tight">
              From one woman's conviction to a movement of restoration
            </h2>
            <div className="mt-5 space-y-4 text-ink/75 leading-relaxed">
              <p>
                Victoria Alabaster International Women Ministry began as a small, informal
                support circle for widows in Lagos, started by a handful of women who
                refused to look away from their neighbors' hardship. What began as shared
                meals and pooled resources grew, year by year, into a structured ministry
                with defined programs, trained staff, and accountable governance.
              </p>
              <p>
                The name "Alabaster" reflects our founding belief — that every person,
                however broken their circumstances, carries within them something precious
                and worth restoring. Our purpose is simple: to meet immediate needs with
                practical support, while building long-term pathways to independence and
                dignity for women, widows, single mothers, and youth.
              </p>
              <p>
                Today, our work spans education support, food assistance, shelter projects,
                and empowerment training — reaching families across Nigeria with a growing
                partner network in the United States.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-80 md:h-[420px]">
              <VisualPlaceholder variant="community" className="h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-beige">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Drives Us"
            title="Mission & Vision"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-white rounded-2xl p-9 shadow-card h-full">
                <div className="w-14 h-14 rounded-xl bg-purple-50 text-purple flex items-center justify-center mb-5">
                  <FaBullseye size={24} />
                </div>
                <h3 className="font-display font-semibold text-2xl text-purple-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-ink/75 leading-relaxed">
                  To empower women, widows, single mothers, and youth through education,
                  food assistance, shelter, and skills training — restoring dignity and
                  creating sustainable pathways out of poverty for vulnerable families.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl p-9 shadow-card h-full">
                <div className="w-14 h-14 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center mb-5">
                  <FaEye size={24} />
                </div>
                <h3 className="font-display font-semibold text-2xl text-purple-900 mb-3">
                  Our Vision
                </h3>
                <p className="text-ink/75 leading-relaxed">
                  A world where no woman is left behind because of circumstance — where
                  every widow, single mother, and young person has the resources, training,
                  and community support needed to thrive independently.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership - Founder */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Leadership" title="Founder & Director" />
          <div className="grid md:grid-cols-[300px,1fr] gap-10 items-start bg-purple-50/40 rounded-3xl p-7 md:p-10">
            <Reveal>
              <div className="h-72 md:h-80 rounded-2xl overflow-hidden">
                <VisualPlaceholder variant="founder" className="h-full" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display font-semibold text-2xl text-purple-900">
                {team.founder.name}
              </h3>
              <p className="text-gold-600 font-medium text-sm uppercase tracking-wide mt-1">
                {team.founder.role}
              </p>
              <p className="mt-5 text-ink/75 leading-relaxed">{team.founder.bio}</p>
              <blockquote className="mt-6 border-l-4 border-gold pl-5 italic text-purple-900/85 font-display text-lg leading-relaxed">
                {team.founder.message}
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Administrative Team */}
      <section className="section-pad bg-beige">
        <div className="container-page">
          <SectionHeading eyebrow="Our People" title="Administrative Team" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.admin.map((member, i) => (
              <ProfileCard key={member.name} {...member} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-pad bg-white">
        <div className="container-page">
          <SectionHeading eyebrow="Governance" title="Board Members" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.board.map((member, i) => (
              <ProfileCard key={member.name} {...member} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
