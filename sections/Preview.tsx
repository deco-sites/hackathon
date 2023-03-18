export interface Props {
  sites: Array<
    { label: string; url: string; teamLabel?: string; teamDescription?: string }
  >;
}

export default function Preview({ sites }: Props) {
  return (
    <div class="w-full text-white">
      <div>
        <h1>II Hackathon deco.cx</h1>
        <p>Veja os sites desenvolvidos</p>
      </div>
      {sites.map(({ label, url }) => (
        <div>
          <span>{label}</span>
          <iframe src={url} class="w-[400px] h-[300px]" />
        </div>
      ))}
    </div>
  );
}
