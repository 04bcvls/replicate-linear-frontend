import { IntegrationCard } from "@/components/integration-card";
import { integrations } from "@/data/integrations";

export function IntegrationGrid() {
  return (
    <section
      className="integration-section"
      aria-labelledby="integration-section-title"
    >
      <h2
        id="integration-section-title"
        className="sr-only"
      >
        Essential integrations
      </h2>

      <ul className="integration-grid">
        {/* slug render */}
        {integrations.map((integration) => (
          <li
            key={integration.slug}
            className="integration-grid__item"
          >
            <IntegrationCard integration={integration} />
          </li>
        ))}
      </ul>
    </section>
  );
}