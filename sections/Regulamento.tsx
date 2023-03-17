export interface Props {
  text: string;
  link: string;
}

function Guides(
  { text, link }: Props,
) {
  return (
    <section class="text-center text-white text-sm mb-8">
      {text}{" "}
      <a class="text-white" href={link} target="_blank">
        Regulamento da II Hackathon deco.cx
      </a>.
    </section>
  );
}

export default Guides;
