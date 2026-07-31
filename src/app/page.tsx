import Image from "next/image";
import { LinearHeader }from "../components/linear-header";
import { PageHeading } from "../components/page-heading";
import { IntegrationGrid } from "../components/integration-grid";

export default function HomePage() {
  return (
    <div className="page-shell">
      <LinearHeader />

      <main>
        <PageHeading />
        <IntegrationGrid />
      </main>
    </div>
  );
}
