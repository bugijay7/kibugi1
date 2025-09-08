import React from "react";
import {
  Users,
  Briefcase,
  ShoppingBag,
  Star,
  Heart,
  Globe,
  Crown,
  Gift,
  ShieldCheck,
  Sparkles,
  Package,
  Camera,
  MapPin,
  Tag,
  Scissors,
  Coffee,
  Monitor,
  Phone,
  Truck,
  Award,
} from "lucide-react";

const companies = [
  { name: "Grace & Co.", Icon: Crown },
  { name: "Harvest Apparel", Icon: ShoppingBag },
  { name: "Mercy Makers", Icon: Heart },
  { name: "Anchor Studios", Icon: Camera },
  { name: "Fellowship Furnishings", Icon: Package },
  { name: "Kindred Collective", Icon: Users },
  { name: "Promise Textiles", Icon: Briefcase },
  { name: "Kind Cup", Icon: Coffee },
  { name: "Beacon Logistics", Icon: Truck },
  { name: "Hallelujah Home", Icon: Globe },
  { name: "Loom & Light", Icon: Scissors },
  { name: "Testimony Tech", Icon: Monitor },
  { name: "Clothe the Needy", Icon: Gift },
  { name: "Graceway Goods", Icon: Tag },
  { name: "Called Creatives", Icon: Sparkles },
  { name: "Praise Prints", Icon: Camera },
  { name: "Shepherd Shipping", Icon: ShieldCheck },
  { name: "Harvest Hub", Icon: Star },
  { name: "Mercy Media", Icon: Phone },
  { name: "Corridor Crafts", Icon: MapPin },
];

export default function AboutClients() {
  return (
    <section className="bg-black text-gray-200 py-16 px-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-9xl font-extrabold mb-4 uppercase">
          Brands and Companies we have worked with
        </h2>
        <p className="text-gray-400 max-w-2xl">
          Partners and friends who have collaborated with Neema by Malui on
          collections, community projects, and faith-driven initiatives.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map((c, idx) => (
            <div
              key={c.name + idx}
              className="flex items-center gap-4 p-4 rounded-xl"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-gray-100/10 text-amber-400">
                <c.Icon className="w-7 h-7" />
              </div>

              <div>
                <div className="font-semibold text-gray-100">{c.name}</div>
                <div className="text-xs text-gray-500">Imaginary Company</div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
