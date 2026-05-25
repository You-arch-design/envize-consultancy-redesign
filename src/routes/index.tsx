import { createFileRoute } from "@tanstack/react-router";
import EnvizeSite from "@/components/EnvizeSite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Envize Consultancy — Certifying Excellence in Every Industry" },
      { name: "description", content: "Trusted partner for ISO certifications, LWG certification, eco compliance and pollution control consultancy. Expert certifications for a sustainable and secure future." },
      { property: "og:title", content: "Envize Consultancy — Certifying Excellence" },
      { property: "og:description", content: "ISO, LWG and eco-compliance certification assistance for industries." },
    ],
  }),
  component: Index,
});

function Index() {
  return <EnvizeSite />;
}
