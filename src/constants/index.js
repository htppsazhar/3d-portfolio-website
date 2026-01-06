import { lambdatest } from "../assets/images";

import {
  python,
  excel,
  sql,
  powerbi,
  pandas,
  numpy,
  matplotlib,
  seaborn,
  github,
  docker,
  vscode,
  jupyter,
  fastapi,
  sklearn,
  contact,
  linkedin,
  health,
  expense,
  warehouse
} from "../assets/icons";


export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Programming",
  },
  {
    imageUrl: excel,
    name: "Excel",
    type: "Data Analysis",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },
  {
    imageUrl: powerbi,
    name: "Power BI",
    type: "Data Visualization",
  },
  {
    imageUrl: pandas,
    name: "Pandas",
    type: "Data Manipulation",
  },
  {
    imageUrl: numpy,
    name: "NumPy",
    type: "Numerical Computing",
  },
  {
    imageUrl: matplotlib,
    name: "Matplotlib",
    type: "Visualization",
  },
  {
    imageUrl: seaborn,
    name: "Seaborn",
    type: "Statistical Visualization",
  },
  {
    imageUrl: sklearn,
    name: "Scikit-learn",
    type: "Machine Learning",
  },
  {
    imageUrl: fastapi,
    name: "FastAPI",
    type: "Model Deployment",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Containerization",
  },
  {
    imageUrl: vscode,
    name: "VS Code",
    type: "Development Environment",
  },
  {
    imageUrl: jupyter,
    name: "Jupyter Notebook",
    type: "Analysis Environment",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];


export const experiences = [
  {
    title: "Data Analyst",
    company_name: "LambdaTest",
    icon: lambdatest,
    iconBg: "#e6f0ff",
    date: "Jan 2025 – May 2025",
    points: [
      'Designed and developed interactive Power BI dashboards to analyze business data and present key trends.',
      'Performed data cleaning, transformation, and modeling using SQL and Power Query.',
      'Created DAX measures and KPIs to track performance metrics and deliver actionable insights.',
      'Collaborated with the analytics team to support data-driven decision-making and reporting efficiency.'
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/htppsazhar",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/azhar-ullah-khan-b8293a252",
  },
];


export const projects = [
  {
    iconUrl: health,
    theme: "btn-back-blue",
    name: "Health Insurance Cost Predictor",
    description:
      "Built a predictive modeling system to estimate health insurance premiums using Python. Performed data cleaning, EDA, feature engineering, and regression modeling. Deployed the solution using Streamlit for real-time predictions.",
    githubLink: "https://github.com/htppsazhar/Health-premium-prediction-ML",
    liveLink: "https://health-insurance-app.streamlit.app",
    period: "Sep 2025 – Oct 2025",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "EDA",
      "Regression",
      "Streamlit",
    ],
  },

  {
    iconUrl: expense,
    theme: "btn-back-green",
    name: "Expense Management System",
    description:
      "Developed a Python-based expense tracking system with FastAPI and SQL. Implemented REST APIs and CRUD operations, enabling users to track, categorize, and analyze expenses with monthly summaries.",
    githubLink: "https://github.com/htppsazhar/Expense-Management-System",
    liveLink: "https://expense-tracker.streamlit.app",
    period: "Aug 2025 – Sep 2025",
    tech: [
      "FastAPI",
      "Python",
      "SQL",
      "MySQL",
      "REST APIs",
      "CRUD",
      "Streamlit",
    ],
  },

  {
  iconUrl: warehouse,
  theme: "btn-back-purple", // ✅ correct + defined in CSS
  name: "SQL Data Warehouse",
  description:
    "Designed and implemented a SQL-based data warehouse using star schema. Built optimized fact and dimension tables and developed ETL workflows to improve reporting and query performance.",
  githubLink: "https://github.com/htppsazhar/sql-data-warehouse-project",
  liveLink: null, // ✅ no live app is perfectly fine
  period: "May 2025 – Jun 2025",
  tech: [
    "SQL",
    "Data Warehousing",
    "ETL",
    "Star Schema",
    "Data Modeling",
  ],
}
];
