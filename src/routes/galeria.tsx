import { createFileRoute } from "@tanstack/react-router";
import { ImageGallery } from "@/components/ui/carousel-circular-image-gallery";

export const Route = createFileRoute("/galeria")({
  component: GaleriaPage,
  head: () => ({
    meta: [
      { title: "Galeria Circular de Imóveis | Living Canvas" },
      {
        name: "description",
        content:
          "Explore ambientes de imóveis selecionados em Valença-RJ numa galeria circular animada da Living Canvas.",
      },
      { property: "og:title", content: "Galeria Circular de Imóveis | Living Canvas" },
      {
        property: "og:description",
        content:
          "Explore ambientes de imóveis selecionados em Valença-RJ numa galeria circular animada da Living Canvas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function GaleriaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#0a2e2a] px-6 py-16">
      <header className="max-w-xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.05em] text-[#d4af7a]">Galeria</p>
        <h1
          className="mt-3 text-4xl font-bold text-[#f8f5ef]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Ambientes em movimento
        </h1>
        <p className="mt-3 text-base font-normal text-[#e8e2d4]/80">
          Navegue pelos ambientes com a galeria circular — clique nos pontos ou use as setas.
        </p>
      </header>
      <ImageGallery />
    </main>
  );
}
