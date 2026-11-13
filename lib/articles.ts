export type ArticleSection = { heading?: string; paragraphs: string[]; points?: string[] };

export type Article = {
	id: string;
	number: string;
	title: string;
	dek: string;
	category: "Leadership" | "AI & Strategy" | "Healthcare" | "Economy" | "Career" | "Banking";
	date: string;
	readTime: string;
	featured?: boolean;
	quote?: string;
	sections: ArticleSection[];
	links?: { label: string; url: string }[];
};

export const articles: Article[] = [
	{
		id: "influencing-without-authority",
		number: "01",
		title: "Influencing Without Authority",
		dek: "What Florence Nightingale teaches us about clarity, evidence and moving a room when the title is not yours.",
		category: "Leadership",
		date: "2026",
		readTime: "4 min read",
		featured: true,
		quote: "Nightingale did not out-rank the colonel. She out-clarified him.",
		sections: [
			{ paragraphs: ["She had no title. No budget. No authority. Just a notebook, three coloured pens, and a hospital full of dying soldiers nobody would listen to her about.", "At a session with Prof. Rakesh Godhwani at IIM Bangalore, I learned the deeper story behind Florence Nightingale—not only the lady with the lamp, but a woman who used data visualisation to save lives."] },
			{ heading: "The evidence changed the conversation", paragraphs: ["In 1854, during the Crimean War, Nightingale arrived at a military hospital in Turkey with 25 nurses and almost no formal authority. Soldiers were dying less from battle wounds than from infections spreading through filthy, poorly managed wards. When her requests to improve sanitation were dismissed, she changed her method.", "She collected data for months: injuries, infections and deaths. Then she translated it into a hand-drawn polar-area chart—the form now associated with her famous rose diagrams. The visual made a complex pattern immediately legible. Evidence accomplished what repeated pleading could not."], points: ["Clarity of thought", "Clarity of expression", "Presence", "Connection"] },
			{ heading: "Position is not persuasion", paragraphs: ["Prof. Godhwani framed influence without authority through four pillars: clarity of thought, expression, presence and connection. Nightingale did not need a higher rank to move the system; she needed a clearer case.", "We often assume that an idea needs a title behind it before it can move a room. Nightingale had neither position nor budget, yet her work influenced hospital practice at a national scale. The lesson is simple: when authority is unavailable, make the problem impossible to misunderstand."] }
		],
		links: [{ label: "Prof. Rakesh Godhwani", url: "https://www.linkedin.com/in/rakeshgodhwani/" }]
	},
	{
		id: "digital-sovereignty-ai",
		number: "02",
		title: "Digital Sovereignty in the Age of AI",
		dek: "The invisible dependency that could define the next global power shift—and why resilience matters more than isolation.",
		category: "AI & Strategy",
		date: "16 July 2026",
		readTime: "13 min read",
		featured: true,
		quote: "The goal is not disconnection. It is avoiding total dependence on infrastructure you do not control and cannot replace.",
		sections: [
			{ heading: "The sovereignty we quietly traded away", paragraphs: ["Imagine a ministry unable to open documents, a public-sector bank unable to process transactions, or a hospital locked out of its scheduling system—not because of a cyberattack, but because a foreign provider changed the commercial or geopolitical terms of access. Dramatic? Yes. Impossible? Less so than it sounds.", "Over two decades, governments and businesses moved to global cloud platforms for good reasons: lower costs, faster innovation, strong security and continuous updates. The problem is that better gradually became irreplaceable. Microsoft, Salesforce, Google Workspace, AWS, Azure, GCP and WhatsApp now form part of the operating environment of modern economies." ] },
			{ heading: "Technology is geopolitics", paragraphs: ["Semiconductor export restrictions, GPU-allocation constraints and telecom-equipment bans show that technology supply chains can become foreign-policy instruments. The exposure exists even if an enterprise-software cutoff never occurs. Dependency itself is the vulnerability.", "The strategic question is not whether global platforms are good or bad. It is whether a country can continue governing, banking, treating patients and running businesses if access changes suddenly."] },
			{ heading: "The numbers are hard to ignore", paragraphs: ["Synergy Research Group estimated global cloud-infrastructure spending at roughly $129 billion in Q1 2026, with AWS, Azure and Google Cloud together accounting for about two-thirds of enterprise cloud spending. Gartner forecast Indian public-cloud spending at $17.5 billion in 2026, up 28.1% year on year, with infrastructure-as-a-service growing even faster.", "These figures describe extraordinary capability and equally extraordinary concentration. Most debate about AI sovereignty focuses on domestic language models, but sovereignty spans the full stack: semiconductors, GPUs, cloud, foundation models, enterprise software, identity, storage and cybersecurity. A domestic model running entirely on foreign infrastructure is still structurally dependent."] },
			{ heading: "India is building more than chatbots", paragraphs: ["Krutrim has moved toward cloud services and GPU infrastructure. Sarvam AI is building multilingual models, speech systems and enterprise deployments. Neysa is focusing on domestic AI-cloud infrastructure and GPU-as-a-service. Together they illustrate three different pieces of a sovereign stack: models, interfaces and compute.", "Several quieter players matter too. Yotta is building large domestic GPU clusters through Shakti Cloud. E2E Cloud offers India-resident compute with local pricing. QpiAI is working across quantum hardware and software. Fractal is building reasoning models under the IndiaAI Mission. Tattvam AI is tackling semiconductor physical-design automation. Gnani AI is lowering Indic-language inference costs, while NPCI's work around financial AI could prove strategically significant because it sits close to public payment rails."] },
			{ heading: "What sovereignty actually requires", paragraphs: ["Startups cannot solve this alone. National digital resilience requires coordinated investment across compute, open models, enterprise software, cloud platforms, cybersecurity and semiconductor capacity. This is a decade-long infrastructure project, not a startup sprint.", "The practical near-term goal is resilience: multi-cloud architectures, open-source frameworks, portable data, hybrid deployments and domestic alternatives for sensitive sectors. Global technology will remain essential. The aim is to keep choice, continuity and bargaining power."] },
			{ heading: "The bigger picture", paragraphs: ["Oil, manufacturing and military capacity defined much of 20th-century leverage. The 21st century adds control over the infrastructure through which governments govern, businesses operate and societies communicate.", "India's emerging AI companies are more than valuation stories. They are early chapters in a longer question: will the country build enough of its digital foundations to retain strategic agency, or permanently rent them from others?"] }
		],
		links: [
			{ label: "Gartner", url: "https://www.gartner.com/" },
			{ label: "Synergy Research Group", url: "https://www.srgresearch.com/" },
			{ label: "Sarvam AI", url: "https://www.sarvam.ai/" }
		]
	},
	{
		id: "healthcare-ai-governance",
		number: "03",
		title: "Healthcare AI: Build Fast, Scale Safely",
		dek: "Risk-based regulation, clinical co-creation and designing for the 99%—a field note on trustworthy healthcare AI.",
		category: "Healthcare",
		date: "2026",
		readTime: "8 min read",
		quote: "In healthcare, regulation should be the runway that lets innovation take off safely.",
		sections: [
			{ heading: "Scale requires trust", paragraphs: ["Healthcare is shifting from AI experimentation to deployment at scale. But scale requires trust, and trust requires governance. During a recent panel, Nico Schiettekatte—Counsellor for Health, Welfare and Sport at the Embassy of the Kingdom of the Netherlands in New Delhi—shared how the Netherlands and the European Union approach regulation without suffocating innovation.", "The core idea is proportionality. The EU AI Act categorises systems by risk rather than treating every algorithm as equally dangerous. Clear guardrails can help software-as-a-medical-device teams move faster because safety expectations are visible early, not discovered at the end."] },
			{ heading: "Design for low-resource settings", paragraphs: ["Healthcare AI should not become a collection of shiny objects built only for top-tier hospitals. Its deepest value may emerge in low-resource settings: screening, triage and simple decision support for frontline workers.", "A useful example is AI-assisted X-ray screening for tuberculosis across rural districts. The point is not to replace clinicians. It is to make scarce expertise travel farther and help trained professionals decide where attention is needed first."], points: ["Triage over autonomous treatment", "Simple decision support for frontline workers", "Supervised use by trained professionals", "Compatibility with digital public infrastructure"] },
			{ heading: "Co-create with clinicians", paragraphs: ["A technically brilliant model can fail if it does not fit clinical workflow. Ninety-percent accuracy may sound strong in a pitch deck, but in care delivery it can mean missing one in ten patients. Metrics must reflect real-world clinical consequences.", "Teams should unify useful signals across radiology, pathology and genomics without overwhelming doctors. The winning product is not the one with the most impressive isolated benchmark; it is the one clinicians can safely understand, challenge and use."] },
			{ heading: "The principle", paragraphs: ["Innovation and regulation are not natural enemies. Good governance protects patients, clarifies the path to market and creates the confidence required for adoption. The test is not whether a tool looks advanced—it is whether it works safely in the conditions where care is actually delivered."] }
		],
		links: [
			{ label: "Nico Schiettekatte", url: "https://www.linkedin.com/in/nico-schiettekatte-08b2427/" },
			{ label: "Mahajan Imaging & Labs", url: "https://www.linkedin.com/company/mahajan-imaging-pvt-ltd-/" }
		]
	},
	{
		id: "healthcare-ai-operations",
		number: "04",
		title: "Healthcare AI's First Revolution Is Time",
		dek: "Before robotic surgeons, the operational wins: faster discovery, less administration and more productive diagnostic infrastructure.",
		category: "Healthcare",
		date: "2026",
		readTime: "6 min read",
		quote: "The immediate impact of AI in healthcare will not be science fiction. It will be giving time back to care.",
		sections: [
			{ paragraphs: ["When we think of AI in medicine, we often picture robotic surgeons and futuristic diagnosis. But leaders at a recent healthcare panel focused on a more immediate frontier: operational low-hanging fruit.", "Drug-discovery systems may compress parts of a journey that often takes a decade. Administrative automation can return nurses—who deliver much of day-to-day patient care—to the bedside. Better reconstruction and scheduling can reduce radiation exposure and increase the daily throughput of expensive CT and MRI machines."] },
			{ heading: "Efficiency is a clinical outcome", paragraphs: ["Aman Sharma from the Department of Pharmaceuticals and Dr. Vishnu Panigrahi of Fortis Healthcare highlighted the same economic logic: when hospitals use scarce people, machines and time better, the cost of care can fall.", "Operational gains are not secondary to patient outcomes. A shorter queue, a nurse with more time and a scanner serving more patients are all meaningful improvements in access."] },
			{ heading: "From pilots to systems", paragraphs: ["The industry must also stop building in a vacuum. Hospitals will not adopt tools that create extra clicks, fragment data or fail under real clinical pressure. Developers and clinicians need to define the problem, workflow and safety checks together.", "India has a large economic opportunity in AI, but the more important challenge is execution: move from isolated demos to systems that are monitored, governed and embedded in care. Use AI for speed; keep trained people responsible for judgment."] },
			{ heading: "A question worth asking", paragraphs: ["Are we focusing enough on the operational side of AI—or are we still distracted by the clinical hype? The most transformative product may be the one that quietly gives every shift a little more time."] }
		],
		links: [{ label: "Fortis Healthcare", url: "https://www.linkedin.com/company/fortis-healthcare/" }, { label: "NITI Aayog", url: "https://www.linkedin.com/company/nitiaayog/" }]
	},
	{
		id: "free-ai-subscriptions",
		number: "05",
		title: "The Price of 'Free' AI",
		dek: "India's AI subsidy war is not charity. It is a contest for distribution, habit, data and the next interface layer.",
		category: "AI & Strategy",
		date: "2026",
		readTime: "7 min read",
		featured: true,
		quote: "You are not paying with money. You are paying with habit, context and switching cost.",
		sections: [
			{ heading: "The OS war of 2026", paragraphs: ["Indian users have received premium AI subscriptions bundled through telecom and platform offers: Jio with Gemini, Airtel with Perplexity, and lower-priced access from OpenAI. The strategy resembles the early days of consumer internet expansion—volume first, monetisation later.", "The prize is larger than a chatbot subscription. Whoever becomes the default assistant can sit between users and search, documents, cloud storage, work and eventually commerce. This is an operating-system contest disguised as a giveaway."] },
			{ heading: "The hidden exchange", paragraphs: ["India's code-mixed language and enormous diversity are a powerful product stress test. User feedback reveals where models fail across Hindi-English and regional-language contexts. Telecom bundles also reduce payment friction and give AI companies immediate distribution at national scale.", "Then comes lock-in. Once users store terabytes of files, build personal knowledge bases and embed an assistant into daily workflows, moving becomes costly. The free period acquires a long tail."] },
			{ heading: "Is it over for Indian startups?", paragraphs: ["No. Global firms are fighting for the horizontal consumer interface. Indian companies can win on a different field: domestic compute, voice-first interaction and vertical products designed around local regulation and workflows.", "Krutrim and Sarvam illustrate the opportunity. Sovereign compute can reduce external dependency. Voice interfaces can reach users who will never make typing in English their primary mode. Vertical AI can address legal, agricultural, healthcare and government problems that generic models routinely miss."] },
			{ heading: "The verdict", paragraphs: ["The subsidy war will eventually cool. The innovation war will not. The career question for users is equally important: are these tools only saving minutes, or are they helping us build judgment and durable skill? Convenience compounds—but so does capability."] }
		]
	},
	{
		id: "india-neutral-pole",
		number: "06",
		title: "The World Is Fracturing. India Is Building.",
		dek: "A data-led view of India as a potential neutral pole in a volatile global economy.",
		category: "Economy",
		date: "2026",
		readTime: "5 min read",
		quote: "India is not simply an outlier in the growth story. It is increasingly one of the engines.",
		sections: [
			{ paragraphs: ["Headlines in 2026 are dominated by geopolitical tension, rising defence expenditure, debt concerns and volatile asset markets. Yet a different story emerges when we look at India through growth, investment and strategic positioning.", "Forecast ranges from institutions such as the IMF and UN have placed India's growth well above the global average. Forecasts change and should be read with care, but the structural divergence deserves attention."] },
			{ heading: "Three drivers", paragraphs: ["First, strategic autonomy: India often avoids binary geopolitical alignment in favour of issue-based partnerships and domestic priorities. Second, an investment-led cycle: public capital expenditure in infrastructure can create capacity beyond a single consumption season. Third, resilience: diversified trade relationships across Europe, the Middle East and Asia can reduce dependence on any one market."], points: ["Strategic autonomy", "Investment-led growth", "Diversified economic relationships"] },
			{ heading: "My take", paragraphs: ["Global instability is not automatically good for India. It raises energy, trade and financial risks. But it can also cause capital and companies to search for scale with relative institutional continuity.", "The opportunity is not guaranteed. It depends on execution: jobs, logistics, manufacturing depth, human capital and policy consistency. If those foundations strengthen, India's role can shift from promising outlier to durable growth engine."] }
		]
	},
	{
		id: "deep-work-ai",
		number: "07",
		title: "AI Speeds Up the Surface. Depth Still Takes Work.",
		dek: "Expertise is not disappearing. Its value is moving from production speed to problem selection, context and judgment.",
		category: "Career",
		date: "2026",
		readTime: "7 min read",
		quote: "The skill is no longer only 'can you produce it?' It is 'do you understand what to automate and what to preserve?'",
		sections: [
			{ paragraphs: ["A question raised during Pushparanjan Malajure's session deserves serious attention: is AI making expertise cheap, or democratising access to knowledge? AI can generate code, presentations and strategy drafts quickly. What it cannot reliably supply is years of industry context compressed into judgment."] },
			{ heading: "Large problems are not superficial", paragraphs: ["Improving an engine, restoring soil health or discovering a medicine requires deep causal understanding. AI can accelerate secondary research and help specialists explore more possibilities. It cannot independently decide which observations matter, reconcile every local constraint or own the consequences of a decision.", "The winning formula combines deep industry understanding, AI-assisted research, human synthesis across disciplines and primary evidence from the field. AI shortens parts of the journey; it does not eliminate the need to travel it."] },
			{ heading: "The barrier to entry has fallen", paragraphs: ["The encouraging side is that capable newcomers can now build and learn faster. A person with a handful of serious projects, disciplined experiments and a working grasp of LLMs may demonstrate more ability than a candidate with a longer but passive résumé.", "Build one useful AI project. Document what failed and what changed. Stop waiting for permission to call yourself a practitioner. Expertise is earned through deliberate experimentation—not declared by tenure alone."] },
			{ heading: "Automate friction, preserve judgment", paragraphs: ["Founders can use AI to draft HR documentation, segment prospect lists and prototype product ideas. These are high-friction activities where a fast first draft is valuable. But outputs entering production still require review, testing and governance.", "Use AI for speed. Keep humans accountable for quality, context and decisions. The companies that understand this boundary will move quickly without turning today's convenience into tomorrow's technical debt."] }
		],
		links: [{ label: "Pushparanjan Malajure", url: "https://www.linkedin.com/in/ranjanm/" }, { label: "Marsh McLennan", url: "https://www.linkedin.com/company/marshmclennan/" }]
	},
	{
		id: "human-ingenuity",
		number: "08",
		title: "When Intelligence Becomes Abundant",
		dek: "Human ingenuity, the 3+1 framework and why adaptability may matter more than competing with machines.",
		category: "Leadership",
		date: "2026",
		readTime: "6 min read",
		quote: "Do not compete with AI on raw processing. Compete on adaptability, courage and care.",
		sections: [
			{ heading: "The commoditisation of intelligence", paragraphs: ["A session with Ambarish Kenghe, Group CEO of Angel One, reframed the fear around AI. When intelligence-like capabilities become cheap and accessible, uniquely human value does not vanish—it shifts.", "Humans remain unusually good at adapting to chaos, noticing a problem before it is formally defined and taking hopeful risks with incomplete information. Call it ingenuity or jugaad; it is the ability to create movement without perfect conditions."] },
			{ heading: "A 3+1 framework for satisfaction", paragraphs: ["Sustainable career satisfaction often sits at the intersection of three conditions: excitement about the problem, pride in the work, and enough economic freedom to remove constant financial anxiety. The plus one is recognition—an environment that actually sees your contribution."], points: ["Excitement", "Boasting rights—the healthy pride of meaningful work", "Economic freedom", "+1: Recognition"] },
			{ heading: "Learn—and unlearn", paragraphs: ["Old methods expire faster than they used to. The ability to unlearn can therefore matter as much as the ability to acquire a new skill. Ownership becomes more durable than title; impact becomes a better compass than status alone.", "A regret-minimisation lens helps: which bold, responsible step would your future self wish you had taken while you still had the time, energy and room to recover? Intelligence is becoming abundant. Courage and adaptation remain scarce."] }
		],
		links: [{ label: "Ambarish Kenghe", url: "https://www.linkedin.com/in/ambarish-kenghe/" }, { label: "Angel One", url: "https://www.linkedin.com/company/angelone/" }]
	},
	{
		id: "interview-culture-management",
		number: "09",
		title: "The Work Behind the Interview",
		dek: "Company research, culture fit, psychological safety and a more useful definition of management success.",
		category: "Career",
		date: "2026",
		readTime: "10 min read",
		quote: "A company is choosing you—and you are also choosing the company.",
		sections: [
			{ heading: "Research beyond the product", paragraphs: ["Kushendra Singh shared a revealing interview exercise: candidates who had consumed Coca-Cola products for years often knew very little about the company, its portfolio or its ownership of brands such as Costa Coffee. One candidate even named Mountain Dew—a PepsiCo product—as a favourite Coca-Cola brand.", "The point was not trivia. Strong candidates investigate how an organisation works, what it values and how it makes money. They speak with employees, understand the vision, study the business model and arrive ready to evaluate fit in both directions."] },
			{ heading: "Culture fit is a real constraint", paragraphs: ["Every organisation has a working DNA. Every person brings expectations, energy patterns and values. High pay and prestigious travel cannot permanently compensate for a system that makes someone miserable.", "Some people thrive in intense, long-hour environments; others do their best work with a different rhythm. Neither is inherently weak. The question is compatibility: can you flourish in this system without compromising what matters most to you?"] },
			{ heading: "Management is what happens when you leave the room", paragraphs: ["Promotion and visibility are poor measures of leadership. Better signals are whether a team meets goals, grows in capability and feels safe enough to contribute honestly. Inclusion does not mean forcing every introvert to perform extroversion. A quiet observer may be the team's highest-value contributor.", "Trust grows through consistency. Great managers create psychological safety across personality types, distribute credit and make it possible for people to do good work without pretending to be someone else."] },
			{ heading: "The check-out epidemic", paragraphs: ["Quiet quitting is often less about laziness than a culture that suppresses authenticity. Employees can appear present while mentally disengaging and searching for an exit. Gallup has estimated the global cost of low engagement in the trillions of dollars.", "Freedom with accountability, honest feedback and adult-to-adult trust can reduce that loss. People rarely leave a job description alone; they leave the lived experience created by managers and systems."] },
			{ heading: "Prepare like it matters", paragraphs: ["Practise answers until they sound natural, but do not stop there. Know the organisation well enough to ask intelligent questions about culture, strategy and operating reality. The interview is not only your chance to make a mark. It is your chance to decide whether this is a mark you want the organisation to make on you."] }
		],
		links: [{ label: "Kushendra Singh", url: "https://www.linkedin.com/in/kushendrasingh19/" }, { label: "The Coca-Cola Company", url: "https://www.linkedin.com/company/the-coca-cola-company/" }]
	},
	{
		id: "human-strength-vuca",
		number: "10",
		title: "AI's Weakness Is Humanity's Strength",
		dek: "Why adaptation, sense-making and seven leadership mindsets matter in a volatile world.",
		category: "Leadership",
		date: "2026",
		readTime: "9 min read",
		quote: "When the path is hidden by fog, make sure the next step is higher than the previous one.",
		sections: [
			{ heading: "Pattern matching meets an unpredictable world", paragraphs: ["A session with Prof. Apurva Sanaria challenged a common assumption: AI is powerful, but much of its power comes from patterns in the past. In a volatile, uncertain, complex and ambiguous world, yesterday's pattern is not always tomorrow's answer.", "AI can process financial data but may miss the human signals of manipulation. It can draft a polished email but cannot reliably read a tense room. It can optimise a workflow but cannot replace the care a teammate needs on the worst day of their life."] },
			{ heading: "Collaborate, do not compete", paragraphs: ["Use AI for a first draft, then apply human judgment to find what is wrong, missing or misleading. Our species adapted to smartphones, reinvented industries during the pandemic and is already learning to work with AI. Our superpower is not perfection; it is adaptation."] },
			{ heading: "Seven mindsets for VUCA leadership", paragraphs: ["Prof. Sanaria described a hierarchy: mindset shapes the knowledge we seek, and knowledge enables skill. Skills can be developed in parallel, but mindset determines whether we notice what the situation requires."], points: ["Sense-making: create direction when others see noise", "Agility: experiment, learn and pivot", "Systems thinking: see interdependence", "Growth: treat capability as developable", "Empathy: listen to understand", "Resilience: recover and continue", "Reflection: extract lessons from success and failure"] },
			{ heading: "The risk-return paradox", paragraphs: ["We want better careers, relationships and opportunities while becoming more risk-averse. But exceptional returns rarely arrive with zero exposure. In a VUCA world, refusing to move is itself a decision—and often a risky one.", "The useful version of 'when in doubt, do it' is not recklessness. It is responsible action under uncertainty: take the flight when the destination matters, preserve room to recover and keep choosing the next higher step."] }
		],
		links: [{ label: "Prof. Apurva Sanaria", url: "https://www.linkedin.com/in/apurva-sanaria/" }]
	},
	{
		id: "digital-bank-india",
		number: "11",
		title: "Can a Fully Digital Bank Disrupt India?",
		dek: "Why India's banking future is both/and: digital scale with human trust, public rails with private innovation.",
		category: "Banking",
		date: "2026",
		readTime: "9 min read",
		featured: true,
		quote: "The winners will master duality: digital and physical, efficiency and empathy, scale and trust.",
		sections: [
			{ paragraphs: ["A digital-only bank can disrupt particular niches in India. A universal, deposit-led digital-only bank is less likely under today's regulatory and market conditions. India has chosen a distinctive architecture: keep regulated banks central while allowing fintechs to create, compete and cooperate on common public infrastructure."] },
			{ heading: "The economics of the model", paragraphs: ["Digital acquisition is rising, but high-value deposits still skew toward customers who often expect relationship support alongside convenience. Payments function increasingly like a public good—excellent for citizens, structurally thin-margin for banks—so value moves toward credit, wealth and distribution.", "As incomes rise, sachet buyers become fuller-package consumers. Banks need to design for that migration before it arrives. Money may move into mutual funds and equities, but it still passes through bank accounts and financial distribution systems. Product mix and capture points matter."] },
			{ heading: "AI and employment", paragraphs: ["When I asked K.V.S. Manian, MD and CEO of Federal Bank, about AI and employment, his answer echoed earlier waves of automation: pressure reaches skill-defined mid-level tasks first, while total employment can still grow as roles evolve.", "The career response is not fear but leverage. Use AI to augment risk, operations and service while strengthening human trust where it matters most. Maintain a permanent learning mindset, develop storytelling and empathy alongside analytics, and practise enough humility to let experts lead from wherever they sit."] },
			{ heading: "Leadership without a promoter", paragraphs: ["Leading a widely held bank requires ownership without personal equity and accountability without a dominant shareholder's safety net. The leader must feel the weight of employees, families, customers, regulators and investors.", "Technology is table stakes, not strategy. Keep senior leaders close to branches and frontline relationship managers. Run listening tours. Over-communicate to reduce transmission loss. Consistency beats bursts of intensity."] },
			{ heading: "From mainframes to mobile banking", paragraphs: ["India's financial sector moved from paper ledgers and room-sized mainframes to instant public payment rails within a single career. Four lessons stand out from that journey: timing creates openings, learning keeps them open, adaptability lets experience travel, and culture turns distributed branches into accountable businesses.", "A powerful operating idea comes from Handelsbanken: treat every branch manager like the CEO of the outlet. P&L ownership at the grassroots creates alignment faster than another memo from headquarters."] }
		],
		links: [{ label: "K.V.S. Manian", url: "https://www.linkedin.com/in/manian-kvs-6798b5/" }, { label: "Federal Bank", url: "https://www.linkedin.com/company/federal-bank/" }]
	},
	{
		id: "leadership-meraki",
		number: "12",
		title: "Lead With Meraki",
		dek: "Five lessons on energy, discomfort, mentorship, feedback and leaving real footprints.",
		category: "Leadership",
		date: "2026",
		readTime: "6 min read",
		quote: "Success is not only what you achieve. It is how you achieve it, who you bring along and what you leave behind.",
		sections: [
			{ paragraphs: ["The VENIX programme at IIM Bangalore began with a session by Shyam Unnikrishnan, Managing Partner at Bain & Company India. His lessons were corporate in context but deeply human in application."] },
			{ heading: "1. Be an energy giver", paragraphs: ["Some people lift a room; others leave it tired. Energy comes from what we care about, how we show up and how we make others feel. Ask honestly whether your presence expands a team's capacity or drains it. That awareness is the start of influence."] },
			{ heading: "2. Use discomfort as a compass", paragraphs: ["Comfort rarely produces the fastest growth. New technology, uncertain assignments and unfamiliar responsibility all create friction. Do not waste a disruption. Use it to stretch, learn and lead."] },
			{ heading: "3. Collect mentors, not only titles", paragraphs: ["Promotions are visible; the people who sharpen our judgment are often more consequential. Seek mentors who are smart, kind and honest enough to offer uncomfortable truths. Mentorship is not a one-time request—it is a habit of staying teachable."] },
			{ heading: "4. Know the back of your T-shirt", paragraphs: ["Your achievements are printed on the front. Your real professional brand is what people say when you are not in the room. Collect genuine 360-degree feedback from peers, juniors and seniors. Blind spots only become tools after they become visible."] },
			{ heading: "5. Leave real footprints", paragraphs: ["Meraki is a Greek word associated with putting a piece of your soul into the work. Résumés fade; impact and feeling endure. Leave clients, colleagues and communities better than you found them. Dream big, stay uncomfortable, build a tribe of mentors and pursue the work with integrity and full presence."] }
		],
		links: [{ label: "Shyam Unnikrishnan", url: "https://www.linkedin.com/in/shyamunnikrishnan/" }, { label: "Bain & Company", url: "https://www.linkedin.com/company/bain-and-company/" }]
	},
	{
		id: "india-ai-opportunity",
		number: "13",
		title: "$1.4 Trillion: India's AI Imperative",
		dek: "Why India must create—not merely consume—the systems that may shape its next phase of growth.",
		category: "AI & Strategy",
		date: "2026",
		readTime: "5 min read",
		quote: "If we delay, the gap widens. If we act, we lead.",
		sections: [
			{ paragraphs: ["During a recent session, Dr. V.K. Paul of NITI Aayog framed AI not only as a technology shift but as part of India's development trajectory. Estimates cited in the discussion suggest AI could add about $1.4 trillion to the economy by 2035–36. Forecasts are not guarantees, but they make the scale of the opportunity visible."] },
			{ heading: "Adoption is not enough", paragraphs: ["India cannot remain only a large market for systems created elsewhere. It needs to participate in model development, compute infrastructure, applications, standards and safety. The market will not wait while institutions debate whether the shift is real.", "The opportunity spans research, public services, healthcare, agriculture, finance, education and manufacturing. It also demands workforce transition: domain experts who can use AI, builders who understand local constraints and leaders who can govern deployment responsibly."] },
			{ heading: "India can help define AI", paragraphs: ["The strongest version of the claim is reciprocal: AI will influence India's future, and India's scale, languages and public digital infrastructure can influence how AI develops. That is possible only if the country creates solutions, measures outcomes and shares what works.", "Move quickly, but not carelessly. Lead with ambition, invest in foundations and keep human accountability at the centre. The difference between an AI wave that widens gaps and one that expands capability will be the quality of our choices now."] }
		],
		links: [{ label: "NITI Aayog", url: "https://www.linkedin.com/company/nitiaayog/" }]
	}
];

export const categories = ["All", "AI & Strategy", "Leadership", "Healthcare", "Career", "Banking", "Economy"] as const;
