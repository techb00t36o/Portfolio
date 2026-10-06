// Type definitions
export interface SkillWithCategory {
  name: string;
  level: number;
  category: string;
}

export interface SkillWithLevel {
  name: string;
  level: number;
}

export const personalInfo = {
  name: "Md Mahfuzur Rahman",
  title: "QA Automation Engineer",
  tagline: "Building quality into every line of code through strategic testing",
  email: "mahfuzur.rahman@email.com",
  linkedin: "https://linkedin.com/in/mahfuzurrahman",
  github: "https://github.com/mahfuzurrahman",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  summary: `Senior QA Automation Engineer with 6+ years of experience in designing and implementing comprehensive test strategies for web and mobile applications. Expert in test automation frameworks (Cypress, Playwright, Selenium), API testing, CI/CD integration, and performance testing. Proven track record of reducing production bugs by 70% and cutting regression testing time from days to hours. Passionate about shifting left, developer experience, and building quality culture.`,
};

export const skills = {
  automation: [
    { name: "Cypress", level: 95, category: "E2E Testing" },
    { name: "Playwright", level: 90, category: "E2E Testing" },
    { name: "Selenium WebDriver", level: 85, category: "E2E Testing" },
    { name: "Appium", level: 80, category: "Mobile Testing" },
    { name: "WebdriverIO", level: 75, category: "E2E Testing" },
  ],
  api: [
    { name: "Postman", level: 95, category: "API Testing" },
    { name: "RestAssured", level: 85, category: "API Testing" },
    { name: "GraphQL Testing", level: 80, category: "API Testing" },
    { name: "Contract Testing (Pact)", level: 75, category: "API Testing" },
  ],
  performance: [
    { name: "k6", level: 85, category: "Load Testing" },
    { name: "JMeter", level: 80, category: "Load Testing" },
    { name: "Gatling", level: 70, category: "Load Testing" },
    { name: "Lighthouse CI", level: 85, category: "Performance" },
  ],
  ciCd: [
    { name: "GitHub Actions", level: 95, category: "CI/CD" },
    { name: "GitLab CI", level: 90, category: "CI/CD" },
    { name: "Jenkins", level: 85, category: "CI/CD" },
    { name: "CircleCI", level: 80, category: "CI/CD" },
    { name: "Azure DevOps", level: 75, category: "CI/CD" },
  ],
  languages: [
    { name: "TypeScript/JavaScript", level: 95 },
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "Go", level: 70 },
    { name: "SQL", level: 85 },
  ],
  tools: [
    { name: "Jira/Xray", level: 95, category: "Test Management" },
    { name: "TestRail", level: 90, category: "Test Management" },
    { name: "Zephyr", level: 85, category: "Test Management" },
    { name: "Docker", level: 90, category: "Infrastructure" },
    { name: "Kubernetes", level: 75, category: "Infrastructure" },
    { name: "AWS/GCP", level: 80, category: "Cloud" },
    { name: "Grafana/Datadog", level: 80, category: "Monitoring" },
  ],
  methodologies: [
    "BDD/TDD",
    "Shift-Left Testing",
    "Risk-Based Testing",
    "Exploratory Testing",
    "Contract Testing",
    "Visual Regression Testing",
    "Accessibility Testing (WCAG 2.1)",
    "Security Testing Basics",
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Test Automation",
    type: "Automation Framework",
    description: `Built a comprehensive test automation framework from scratch for a high-traffic e-commerce platform serving 2M+ users monthly. The framework covers E2E, API, visual regression, and performance testing.`,
    techStack: ["Cypress", "TypeScript", "Cucumber", "Docker", "GitHub Actions", "AWS"],
    achievements: [
      "Reduced regression testing from 3 days to 45 minutes",
      "Achieved 92% code coverage across critical user journeys",
      "Caught 47 critical bugs pre-production in first quarter",
      "Enabled parallel execution across 20+ browser instances",
    ],
    metrics: {
      testCases: 450,
      executionTime: "45 min",
      coverage: "92%",
      flakiness: "< 1%",
    },
    github: "https://github.com/alexjohnsonqa/ecommerce-automation",
    liveDemo: null,
    featured: true,
    category: "automation",
  },
  {
    id: 2,
    title: "Microservices API Test Suite",
    type: "API Testing",
    description: `Designed and implemented contract-driven API testing strategy for 15+ microservices. Integrated Pact for consumer-driven contracts, ensuring backward compatibility across deployments.`,
    techStack: ["RestAssured", "Java", "Pact", "JUnit 5", "GitLab CI", "Kubernetes"],
    achievements: [
      "Zero production API breaking changes in 18 months",
      "Reduced integration testing feedback loop from 2hrs to 15min",
      "Automated contract validation in every PR",
      "Enabled independent service deployments with confidence",
    ],
    metrics: {
      testCases: 320,
      executionTime: "12 min",
      services: 15,
      contracts: 87,
    },
    github: "https://github.com/alexjohnsonqa/microservices-api-tests",
    liveDemo: null,
    featured: true,
    category: "api",
  },
  {
    id: 3,
    title: "Mobile App Test Automation",
    type: "Mobile Testing",
    description: `Cross-platform mobile automation framework for iOS and Android apps. Implemented device farm integration, parallel execution, and comprehensive reporting with screenshots/video on failure.`,
    techStack: ["Appium", "WebdriverIO", "TypeScript", "BrowserStack", "GitHub Actions", "Allure"],
    achievements: [
      "Supported 50+ device/OS combinations in CI",
      "Reduced mobile release validation from 6hrs to 1hr",
      "Integrated visual regression for UI consistency",
      "Achieved 85% automation coverage for critical flows",
    ],
    metrics: {
      testCases: 280,
      devices: 50,
      executionTime: "55 min",
      coverage: "85%",
    },
    github: "https://github.com/alexjohnsonqa/mobile-automation",
    liveDemo: null,
    featured: true,
    category: "mobile",
  },
  {
    id: 4,
    title: "Performance Testing Dashboard",
    type: "Performance Engineering",
    description: `Built a self-service performance testing platform allowing developers to run load tests on-demand. Integrated k6 with Grafana for real-time metrics and automated performance regression detection.`,
    techStack: ["k6", "Grafana", "InfluxDB", "TypeScript", "React", "Docker"],
    achievements: [
      "Detected 12 performance regressions before production",
      "Enabled 200+ developers to run self-service load tests",
      "Established performance budgets per service",
      "Reduced performance-related incidents by 60%",
    ],
    metrics: {
      testsPerMonth: 500,
      regressionsCaught: 12,
      developers: 200,
      incidentReduction: "60%",
    },
    github: "https://github.com/alexjohnsonqa/perf-dashboard",
    liveDemo: "https://perf-dashboard.demo.com",
    featured: false,
    category: "performance",
  },
  {
    id: 5,
    title: "Accessibility Testing Integration",
    type: "Accessibility",
    description: `Integrated automated accessibility testing into CI/CD pipeline using axe-core. Created custom rules for design system compliance and built dashboards for tracking a11y debt.`,
    techStack: ["axe-core", "Cypress", "TypeScript", "GitHub Actions", "Storybook"],
    achievements: [
      "Achieved WCAG 2.1 AA compliance across 200+ components",
      "Prevented 200+ a11y violations from reaching production",
      "Reduced manual a11y audit time by 80%",
      "Built design system a11y documentation",
    ],
    metrics: {
      components: 200,
      violationsPrevented: 200,
      auditTimeReduction: "80%",
      complianceLevel: "WCAG 2.1 AA",
    },
    github: "https://github.com/alexjohnsonqa/a11y-automation",
    liveDemo: null,
    featured: false,
    category: "accessibility",
  },
  {
    id: 6,
    title: "Test Data Management Platform",
    type: "Test Infrastructure",
    description: `Built a test data management solution providing synthetic test data generation, database seeding, and data privacy compliance (GDPR/CCPA) for testing environments.`,
    techStack: ["Python", "PostgreSQL", "Faker.js", "Docker", "Kubernetes", "Terraform"],
    achievements: [
      "Reduced test environment setup from hours to minutes",
      "Eliminated production data in lower environments",
      "Supported 50+ parallel test environments",
      "Achieved SOC 2 compliance for test data handling",
    ],
    metrics: {
      environments: 50,
      setupTime: "5 min",
      dataTypes: 100,
      compliance: "SOC 2",
    },
    github: "https://github.com/alexjohnsonqa/test-data-platform",
    liveDemo: null,
    featured: false,
    category: "infrastructure",
  },
];

export const testArtifacts = [
  {
    id: 1,
    title: "Master Test Plan - E-Commerce Platform",
    type: "Test Plan",
    description: "Comprehensive test plan covering functional, non-functional, and regression testing for a $50M+ e-commerce platform. Includes risk analysis, entry/exit criteria, and resource allocation.",
    tags: ["Test Strategy", "Risk Analysis", "Resource Planning"],
    downloadUrl: "/artifacts/master-test-plan-ecommerce.pdf",
    featured: true,
  },
  {
    id: 2,
    title: "API Test Design Specification",
    type: "Test Design",
    description: "Detailed API test design document with endpoint coverage matrix, test data requirements, authentication flows, and contract testing approach for 15 microservices.",
    tags: ["API Testing", "Contract Testing", "Coverage Matrix"],
    downloadUrl: "/artifacts/api-test-design.pdf",
    featured: true,
  },
  {
    id: 3,
    title: "Sample Test Cases - Checkout Flow",
    type: "Test Cases",
    description: "BDD-style test cases for critical checkout user journey covering happy paths, edge cases, error handling, and cross-browser scenarios. Written in Gherkin syntax.",
    tags: ["BDD", "Gherkin", "E2E", "Critical Path"],
    downloadUrl: "/artifacts/checkout-test-cases.feature",
    featured: true,
  },
  {
    id: 4,
    title: "Bug Report Template & Examples",
    type: "Bug Reports",
    description: "Standardized bug report template with severity/priority matrix, reproduction steps, environment details, and 5 real-world examples (critical, high, medium, low, cosmetic).",
    tags: ["Bug Reporting", "Templates", "Severity Matrix"],
    downloadUrl: "/artifacts/bug-report-template.md",
    featured: false,
  },
  {
    id: 5,
    title: "Test Automation Strategy Document",
    type: "Strategy",
    description: "Organization-wide test automation strategy covering framework selection, pyramid implementation, CI/CD integration, flaky test management, and ROI measurement framework.",
    tags: ["Strategy", "Automation Pyramid", "CI/CD", "ROI"],
    downloadUrl: "/artifacts/automation-strategy.pdf",
    featured: true,
  },
  {
    id: 6,
    title: "Performance Test Plan & Results",
    type: "Performance",
    description: "Load test plan with scenarios (baseline, stress, spike, soak), success criteria, and sample results report with bottleneck analysis and optimization recommendations.",
    tags: ["Load Testing", "k6", "Bottleneck Analysis", "Optimization"],
    downloadUrl: "/artifacts/performance-test-plan.pdf",
    featured: false,
  },
  {
    id: 7,
    title: "Mobile Test Checklist",
    type: "Checklist",
    description: "Comprehensive mobile testing checklist covering iOS/Android specifics: permissions, orientations, network conditions, background/foreground, push notifications, and app store requirements.",
    tags: ["Mobile", "iOS", "Android", "Checklist"],
    downloadUrl: "/artifacts/mobile-test-checklist.xlsx",
    featured: false,
  },
  {
    id: 8,
    title: "Accessibility Audit Report Template",
    type: "Accessibility",
    description: "WCAG 2.1 AA audit report template with automated + manual testing results, remediation priority matrix, and developer-friendly fix guidelines with code examples.",
    tags: ["WCAG 2.1", "Audit", "Remediation", "Code Examples"],
    downloadUrl: "/artifacts/a11y-audit-template.pdf",
    featured: false,
  },
];

export const certifications = [
  {
    name: "ISTQB Advanced Test Automation Engineer",
    issuer: "ISTQB",
    year: 2023,
    credentialId: "ISTQB-CTAL-TAE-2023-001",
    url: "https://istqb.org",
  },
  {
    name: "Certified Agile Tester (CAT)",
    issuer: "iSQI",
    year: 2022,
    credentialId: "CAT-2022-0456",
    url: "https://isqi.org",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: 2023,
    credentialId: "AWS-CCP-2023-789",
    url: "https://aws.amazon.com/certification",
  },
  {
    name: "Postman API Fundamentals Expert",
    issuer: "Postman",
    year: 2024,
    credentialId: "POSTMAN-EXPERT-2024",
    url: "https://postman.com",
  },
];

export const experience = [
  {
    role: "Senior QA Automation Engineer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA (Hybrid)",
    achievements: [
      "Led test automation initiative across 5 product teams, establishing standards and frameworks",
      "Architected CI/CD-integrated testing pipeline reducing deployment risk by 70%",
      "Mentored 8 engineers on automation best practices, BDD, and framework design",
      "Built self-service performance testing platform used by 200+ developers",
      "Drove accessibility compliance program achieving WCAG 2.1 AA across all products",
    ],
  },
  {
    role: "QA Automation Engineer",
    company: "StartupXYZ",
    period: "2019 - 2022",
    location: "Remote",
    achievements: [
      "Built E2E automation framework from scratch (Cypress + TypeScript)",
      "Implemented API contract testing with Pact for 12 microservices",
      "Reduced regression cycle from 2 days to 30 minutes",
      "Established visual regression testing catching UI bugs pre-merge",
      "Created test data management solution eliminating production data in QA",
    ],
  },
  {
    role: "QA Analyst",
    company: "Enterprise Solutions Ltd.",
    period: "2017 - 2019",
    location: "New York, NY",
    achievements: [
      "Designed and executed test plans for enterprise SaaS products",
      "Automated 200+ manual test cases using Selenium/Java",
      "Collaborated with devs on shift-left initiatives and unit test coverage",
      "Managed UAT cycles for quarterly releases with 50+ stakeholders",
      "Introduced exploratory testing charters reducing escaped defects by 40%",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Technology",
    period: "2013 - 2017",
    honors: "Magna Cum Laude, Dean's List",
  },
];

export const speaking = [
  {
    title: "Shifting Left at Scale: Automation Strategy for Microservices",
    event: "TestJS Summit 2024",
    date: "Oct 2024",
    url: "https://testjs.summit/talks/shifting-left",
  },
  {
    title: "Contract Testing in Practice: Lessons from Production",
    event: "API Days London 2023",
    date: "Jun 2023",
    url: "https://apidays.london/2023/contract-testing",
  },
  {
    title: "Building a Quality Culture: From QA Gatekeepers to Enablers",
    event: "Agile Testing Days 2023",
    date: "Nov 2023",
    url: "https://agiletestingdays.com/2023/quality-culture",
  },
];

export const blogPosts = [
  {
    title: "Why Your E2E Tests Are Flaky (And How to Fix Them)",
    date: "2024-11-15",
    excerpt: "Deep dive into the top 10 causes of flaky tests and practical solutions for each.",
    url: "https://blog.alexjohnsonqa.com/flaky-tests-fix",
    tags: ["Cypress", "Flaky Tests", "Best Practices"],
  },
  {
    title: "Contract Testing with Pact: A Complete Guide",
    date: "2024-09-22",
    excerpt: "Step-by-step guide to implementing consumer-driven contract testing in a microservices architecture.",
    url: "https://blog.alexjohnsonqa.com/pact-contract-testing",
    tags: ["Pact", "Contract Testing", "Microservices"],
  },
  {
    title: "Performance Testing in CI/CD: From Theory to Practice",
    date: "2024-07-10",
    excerpt: "How to integrate k6 performance tests into your pipeline with automated regression detection.",
    url: "https://blog.alexjohnsonqa.com/perf-testing-cicd",
    tags: ["k6", "Performance", "CI/CD"],
  },
];