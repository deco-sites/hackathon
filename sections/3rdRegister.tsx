export interface Props {
    label?: string;
    link?: string;
    newTab?: boolean;
}

export default function Register({
    label = "/* inscreva-se */",
    link = "https://hackathon.deco.cx/",
    newTab = true,
  }: Props) {
  return (
    <div class="flex items-center mb-40">
        <a href={link} target={newTab ? "_blank" : "_self"} class="font-mono font-bold mx-auto flex items-center text-2xl md:text-3xl text-primary bg-accent px-8 md:px-14 py-6 md:py-10 shadow-3xl md:hover:(-translate-1 shadow-4xl) duration-200">
            {label}
        </a>
    </div>
  );
}
