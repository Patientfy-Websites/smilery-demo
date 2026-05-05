import Image from "next/image";

type Tile = {
  src: string;
  alt: string;
  className?: string;
};

const tiles: Tile[] = [
  { src: "/images/office/restroom.webp", alt: "Modern restroom at Smilery" },
  { src: "/images/office/reception-front.webp", alt: "Reception and waiting area at Smilery", className: "lg:row-span-2" },
  { src: "/images/office/operatory.webp", alt: "Operatory and consultation room at Smilery" },
  { src: "/images/office/lobby.webp", alt: "Lobby and check-in area at Smilery" },
  { src: "/images/office/exam-area.webp", alt: "Open bay exam area at Smilery" },
  { src: "/images/office/checkout.webp", alt: "Checkout and lounge at Smilery" },
];

export default function OfficeGallery() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] lg:grid-rows-2 gap-3 lg:aspect-[16/7]">
      {tiles.map((tile, i) => (
        <div
          key={i}
          className={`group relative overflow-hidden w-full h-full ${
            tile.className ?? ""
          } ${i >= 4 ? "hidden sm:block" : ""}`}
        >
          <Image
            src={tile.src}
            alt={tile.alt}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-600 group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
