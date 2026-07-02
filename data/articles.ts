export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  body: string;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "React Native 0.75 Brings New Architecture by Default",
    category: "Tech",
    author: "Sarah Chen",
    date: "June 15, 2025",
    summary:
      "The latest React Native release enables the New Architecture for all new projects, promising significant performance improvements.",
    body: "React Native 0.75 marks a major milestone for the framework. The New Architecture, which replaces the JavaScript bridge with a direct C++ interface called JSI, is now enabled by default.\n\nThe New Architecture brings synchronous communication between JavaScript and native code, eliminating the asynchronous serialization overhead of the old bridge. Early benchmarks show up to 40% faster startup times on complex screens.",
  },
  {
    id: "2",
    title: "Bangladesh Launches National AI Strategy for 2025-2030",
    category: "Policy",
    author: "Rashida Khanam",
    date: "June 10, 2025",
    summary:
      "The government has released a five-year roadmap for artificial intelligence adoption across education, healthcare, and public services.",
    body: "Bangladesh's ICT Division has published the National Artificial Intelligence Strategy 2025-2030, covering AI adoption in six key sectors: education, agriculture, healthcare, financial inclusion, public administration, and manufacturing.\n\nThe strategy includes a target to train 500,000 AI-skilled workers by 2028 through university curriculum reform. Funding of BDT 2,000 crore has been earmarked for a national AI research centre.",
  },
  {
    id: "3",
    title: "Expo Router 4.0 Introduces Server Components",
    category: "Tech",
    author: "James Watkins",
    date: "June 5, 2025",
    summary:
      "Expo Router's latest major release brings React Server Components to mobile, enabling server-side rendering for React Native apps.",
    body: "Expo Router 4.0 is the first mobile framework to bring React Server Components to native apps. Server components allow parts of a screen to be rendered on the server and streamed to the device, reducing bundle size.\n\nThe release also introduces API Routes — server-side endpoints defined inside the app/ folder — enabling full-stack React Native development without a separate backend server.",
  },
  {
    id: "4",
    title: "AIUB Research Team Publishes NLP Study on Bangla Text",
    category: "Research",
    author: "Dr. Fahmida Akter",
    date: "May 28, 2025",
    summary:
      "A team from AIUB's CS department has published a benchmark dataset and transformer model for low-resource Bangla NLP tasks.",
    body: "Researchers from AIUB have released BanglaBERT-v2, a fine-tuned transformer model trained on a 12-billion-token Bangla corpus. The model outperforms previous state-of-the-art results on sentiment analysis, NER, and question answering in Bangla.\n\nThe team also released BanglaGLUE — a benchmark containing 8 tasks with human-annotated data. The work was presented at ACL 2025 and has been cited by researchers at Google DeepMind.",
  },
];
