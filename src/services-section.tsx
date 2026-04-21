export const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </svg>
      ),
      iconColor: "#22d3ee",
      title: "AI Chatbot",
      description:
        "24/7 intelligent conversations that capture leads, answer questions, and convert visitors—trained on your business knowledge.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      iconColor: "#a78bfa",
      title: "AI Chatbot Agents",
      description:
        "Goal-driven agents that book meetings, qualify leads, and execute multi-step tasks across your stack—autonomously.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          <path d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0" />
        </svg>
      ),
      iconColor: "#f472b6",
      title: "AI Automation",
      description:
        "End-to-end process automation that eliminates repetitive work—connecting apps, data, and decisions intelligently.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
          <circle cx="12" cy="9" r="2" />
        </svg>
      ),
      iconColor: "#34d399",
      title: "Custom AI Integrations",
      description:
        "Bespoke AI solutions engineered into your existing systems—APIs, CRMs, ERPs—designed around your exact workflows.",
    },
  ];

  return (
    <div className="ai-services-grid">
      {services.map((service) => (
        <div key={service.title} className="ai-service-card">
          <div
            className="ai-service-icon"
            style={{ color: service.iconColor }}
          >
            {service.icon}
          </div>
          <h3 className="ai-service-title">{service.title}</h3>
          <p className="ai-service-desc">{service.description}</p>
        </div>
      ))}
    </div>
  );
};
