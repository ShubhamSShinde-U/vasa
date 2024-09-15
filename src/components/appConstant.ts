export interface Service {
  icon: string; // Using an icon component (like from Material-UI or FontAwesome)
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "assets/settings-icon.svg",
    title: "End-to-End Engineering Solutions",
    description:
      "Full product design and development for new two-wheeler models. Expertise in electric two-wheeler design solutions",
  },
  {
    icon: "assets/battery-li-ion.svg",
    title: "Battery Design Expertise",
    description:
      "Specialization in NMC and LFP cell-based battery design. Optimized for efficiency and safety.",
  },
  {
    icon: "assets/durable-structure.svg",
    title: "Durable Structural Design",
    description:
      "Extensive experience in designing durable components like frames and chassis. Expertise in swingarm design and load-bearing structures.",
  },
  {
    icon: "assets/manufacture.svg",
    title: "Manufacturing Process Design",
    description:
      "Sheet metal forming Welding MachiningTube bending Casting Forging",
  },
  {
    icon: "assets/plastic-design.svg",
    title: "Plastic Design",
    description:
      "Expertise in injection molding and blow molding for plastic components.",
  },
  
  
  {
    icon: "assets/benchmark.svg",
    title: "Benchmarking & Reverse Engineering",
    description:
      "Expertise in reverse engineering and competitor product benchmarking to improve performance.",
  },
];

export const caeServices: Service[] = [
  {
    icon: "assets/static-load.svg",
    title: "Static Load Analysis",
    description:
      "Evaluate structural strength and stiffness under various loads.",
  },
  {
    icon: "assets/modal-harmonic.svg",
    title: "Modal & Harmonic Analysis",
    description:
      "Identify potential vibration issues and analyze failure modes based on frequency response.",
  },
  {
    icon: "assets/durability-icon.svg",
    title: "Durability Analysis (MBD)",
    description:
      "Perform durability validation through MBD to assess potential fatigue failures.",
  },
  {
    icon: "assets/cfd-icon.svg",
    title: "CFD Analysis",
    description:
      "Simulate fluid dynamics for cooling systems, optimizing air flow for electric components.",
  },
  
];