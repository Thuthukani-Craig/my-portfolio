import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaCloud, FaServer } from "react-icons/fa";

const sampleCloudMetrics = [
  { label: "AWS EC2 CPU", value: "37%", trend: "-8%", source: "CloudWatch sample" },
  { label: "Azure App Uptime", value: "99.98%", trend: "+0.04%", source: "Azure Monitor sample" },
  { label: "API Latency", value: "142ms", trend: "-18ms", source: "Synthetic probe" },
  { label: "Error Rate", value: "0.3%", trend: "-0.6%", source: "App telemetry" },
];

const categoryRules = [
  {
    label: "Cloud Infrastructure",
    keywords: ["cloud", "aws", "azure", "server", "compute", "uptime", "monitor", "infrastructure"],
  },
  {
    label: "Cybersecurity",
    keywords: ["security", "firewall", "identity", "iam", "threat", "risk", "audit", "zero trust"],
  },
  {
    label: "AI & Automation",
    keywords: ["ai", "model", "automation", "machine learning", "predict", "classify", "data"],
  },
];

const accuracyBars = [
  { label: "Training", value: 92 },
  { label: "Validation", value: 86 },
];

function fetchSampleCloudMetrics() {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(sampleCloudMetrics), 550);
  });
}

function classifyTender(text) {
  const normalized = text.toLowerCase();
  const scores = categoryRules.map((category) => ({
    label: category.label,
    score: category.keywords.reduce(
      (total, keyword) => total + (normalized.includes(keyword) ? 1 : 0),
      0,
    ),
  }));

  const winner = scores.sort((a, b) => b.score - a.score)[0];
  const confidence = Math.min(96, 58 + winner.score * 13 + Math.min(text.length, 80) / 4);

  if (!text.trim()) {
    return { label: "Awaiting input", confidence: 0 };
  }

  if (winner.score === 0) {
    return { label: "General Technology Tender", confidence: 61 };
  }

  return { label: winner.label, confidence: Math.round(confidence) };
}

export default function CloudAiPlayground() {
  const [metrics, setMetrics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState(
    "Need cloud monitoring, identity security, and automated uptime reporting for a client portal.",
  );

  useEffect(() => {
    let isMounted = true;

    fetchSampleCloudMetrics().then((data) => {
      if (isMounted) {
        setMetrics(data);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const prediction = useMemo(() => classifyTender(input), [input]);

  return (
    <motion.aside
      className="cloud-ai-playground glass-panel"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.65 }}
    >
      <div className="playground-head">
        <span>
          <FaCloud />
          Cloud & AI Playground
        </span>
        <strong>
          This playground demonstrates my ability to integrate cloud services and machine learning
          models into live systems.
        </strong>
      </div>

      <div className="cloud-metrics-grid">
        {(isLoading ? sampleCloudMetrics.map((metric) => ({ ...metric, value: "..." })) : metrics).map(
          (metric) => (
            <article className="metric-card" key={metric.label}>
              <div>
                <FaServer />
                <span>{metric.source}</span>
              </div>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
              <small>{metric.trend} vs previous window</small>
            </article>
          ),
        )}
      </div>

      <div className="ml-demo">
        <div className="ml-input-panel">
          <label htmlFor="tender-classifier">
            <span>Tender Category Prediction</span>
            <textarea
              id="tender-classifier"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows="4"
              placeholder="Paste a tender, project brief, or service request..."
            />
          </label>
          <div className="prediction-result">
            <FaBrain />
            <span>
              <small>Classification</small>
              <strong>{prediction.label}</strong>
            </span>
            <b>{prediction.confidence}%</b>
          </div>
        </div>

        <div className="accuracy-panel">
          <div className="accuracy-title">
            <FaChartLine />
            <span>Model Accuracy</span>
          </div>
          {accuracyBars.map((bar) => (
            <div className="accuracy-row" key={bar.label}>
              <div>
                <span>{bar.label}</span>
                <strong>{bar.value}%</strong>
              </div>
              <i>
                <motion.b
                  initial={{ width: 0 }}
                  animate={{ width: `${bar.value}%` }}
                  transition={{ duration: 0.9, delay: 0.7 }}
                />
              </i>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}
