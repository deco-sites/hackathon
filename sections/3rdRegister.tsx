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
        <a href={link} target={newTab ? "_blank" : "_self"} class="no-underline font-mono font-bold mx-auto flex items-center text-2xl md:text-3xl text-primary bg-accent px-8 md:px-14 py-6 md:py-10 shadow-3xl -translate-2 md:hover:(-translate-3 shadow-4xl) duration-200">
            {label}
        </a>
    </div>
  );
}
