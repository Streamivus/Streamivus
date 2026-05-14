/* eslint-disable linebreak-style */

export const BlogPosts = [
  {
    slug: 'building-production-ai-agents',
    title: 'Building production AI agents: lessons from 12 deployments',
    excerpt:
      'We\'ve shipped a dozen AI agents over the past year. Here\'s what actually breaks in production — and how to design for it from day one.',
    author: 'Bhavin Ondhiya',
    publishedOn: 'May 8, 2026',
    readTime: '8 min read',
    category: 'AI & Engineering',
    tags: ['AI', 'GenAI', 'Production', 'Engineering'],
    coverEmoji: '🤖',
    content: [
      {
        type: 'paragraph',
        text:
          'AI agent demos look magical. AI agents in production look very, very different. After shipping 12 of them across customer support, sales outreach, and back-office automation, we have a clearer view of where they break — and how to design for it from day one.',
      },
      {
        type: 'heading',
        text: '1. Cost is the first thing that bites',
      },
      {
        type: 'paragraph',
        text:
          'A clever multi-step agent can rack up $0.20–$1.00 per conversation. Multiply that by 10K conversations a day and you\'re burning cash. Cache aggressively, route easy queries to small models, and instrument every step.',
      },
      {
        type: 'heading',
        text: '2. Latency compounds — fast',
      },
      {
        type: 'paragraph',
        text:
          'Six sequential LLM calls at 2 seconds each is a 12-second user wait. Parallelize where possible, stream tokens to the user, and pre-fetch tool calls speculatively when you can predict the next step.',
      },
      {
        type: 'heading',
        text: '3. Evals are the new tests',
      },
      {
        type: 'paragraph',
        text:
          'Unit tests don\'t catch hallucinations. Build a curated eval set with hand-graded outputs and run it on every prompt change. CI for prompts is no longer optional.',
      },
      {
        type: 'heading',
        text: '4. Observability changes shape',
      },
      {
        type: 'paragraph',
        text:
          'You don\'t just need request logs — you need full traces of prompts, tool calls, and outputs. Tools like Langfuse, LangSmith, or your own OTEL-based pipeline pay for themselves the first time a model regresses.',
      },
      {
        type: 'paragraph',
        text:
          'AI is shipping software, not magic. Treat it that way — instrument, evaluate, and budget — and you\'ll be on the small list of teams whose agents survive contact with real customers.',
      },
    ],
  },
  {
    slug: 'why-we-choose-react-native-in-2026',
    title: 'Why we still choose React Native in 2026',
    excerpt:
      'Every year, "native is back" makes the rounds. Here\'s why React Native is still our default for most mobile work — and the few cases where it isn\'t.',
    author: 'Prachi Kathiria',
    publishedOn: 'April 28, 2026',
    readTime: '6 min read',
    category: 'Engineering',
    tags: ['Mobile', 'React Native', 'Cross-platform'],
    coverEmoji: '📱',
    content: [
      {
        type: 'paragraph',
        text:
          'Every year, someone announces native is back. Every year, we look at our shipping data and choose React Native anyway for ~80% of new mobile projects. Here\'s why — and the 20% where we don\'t.',
      },
      {
        type: 'heading',
        text: 'Why React Native wins for most projects',
      },
      {
        type: 'paragraph',
        text:
          'One team, two stores. The new architecture (Fabric + TurboModules) closed most of the perf gap. Hiring is easier — every React engineer is a near-native React Native engineer. And the ecosystem of vetted libraries is mature.',
      },
      {
        type: 'heading',
        text: 'Where we still go native',
      },
      {
        type: 'paragraph',
        text:
          'Heavy custom video pipelines, AR, low-level Bluetooth, or extreme battery-sensitive contexts. For those, we either go native end-to-end or write a thin native module under a React Native UI.',
      },
      {
        type: 'paragraph',
        text:
          'The decision shouldn\'t be "trend says X" — it should come from a clear-eyed look at your specific app, team, and roadmap.',
      },
    ],
  },
  {
    slug: 'pricing-a-saas-from-scratch',
    title: 'Pricing a SaaS from scratch: the playbook we use',
    excerpt:
      'Pricing is the highest-leverage thing most early SaaS founders ignore. Here\'s the lightweight playbook we use with clients to land a defensible v1 pricing page.',
    author: 'Bhavin Ondhiya',
    publishedOn: 'April 14, 2026',
    readTime: '7 min read',
    category: 'Strategy',
    tags: ['SaaS', 'Pricing', 'Founders'],
    coverEmoji: '💸',
    content: [
      {
        type: 'paragraph',
        text:
          'Most early-stage SaaS pricing pages are some version of "Starter / Pro / Enterprise" with whatever numbers felt right on a Tuesday afternoon. We can do better — without spending three months on it.',
      },
      {
        type: 'heading',
        text: 'Step 1: identify the value metric',
      },
      {
        type: 'paragraph',
        text:
          'What scales with your customer\'s success? Seats? Documents processed? GB stored? Revenue tracked? The right value metric grows naturally as your customer grows — and quietly aligns your interests with theirs.',
      },
      {
        type: 'heading',
        text: 'Step 2: study competitors, then ignore them',
      },
      {
        type: 'paragraph',
        text:
          'Read every competitor\'s pricing page. Then close the tabs. Your pricing should reflect your value, not theirs. You\'re only competing with their pricing if your product is identical (it shouldn\'t be).',
      },
      {
        type: 'heading',
        text: 'Step 3: charge more than feels comfortable',
      },
      {
        type: 'paragraph',
        text:
          'If nobody pushes back on price, you\'re too cheap. We\'ve seen founders 10x their pricing with almost no churn — because the customers were happily underpaying. Test it.',
      },
      {
        type: 'paragraph',
        text:
          'Pricing is a knob you can re-tune every quarter. Ship a defensible v1, watch the data, and iterate. Don\'t let it be the thing that blocks launch.',
      },
    ],
  },
];

export const BlogCategories = ['All', 'Engineering', 'AI & Engineering', 'Strategy', 'Design'];
