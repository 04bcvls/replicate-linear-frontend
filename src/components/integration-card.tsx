import Image from "next/image";
import Link from "next/link";

import type { Integration } from "@/data/integrations";

type IntegrationCardProps = {
    integration: Integration;
};

export function IntegrationCard({
    integration,
}: IntegrationCardProps) {
    const externalLinkLabel = integration.external
        ? ", opens in a new tab"
        : "";

    return (
        <Link
            href={integration.href}
            className="integration-card"
            target={integration.external ? "_blank" : undefined}
            rel={integration.external ? "noopener noreferrer" : undefined}
            aria-label={`${integration.name}: ${integration.description}${externalLinkLabel}`}
        >
            <div className="integration-card__media">
                <Image
                    src={integration.icon}
                    alt=""
                    width={38}
                    height={38}
                    className="integration-card__icon"
                    aria-hidden="true"
                />
            </div>

            <div className="integration-card__copy">
                <div className="integration-card__content">
                    <h2 className="integration-card__title">
                        {integration.name}
                    </h2>

                    <p className="integration-card__description">
                        {integration.description}
                    </p>
                </div>

                <span className="integration-card__action" aria-hidden="true">
                    <svg
                        className="integration-card__action-icon"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M7.5 5.5 12.5 10l-5 4.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </Link>
    );
}