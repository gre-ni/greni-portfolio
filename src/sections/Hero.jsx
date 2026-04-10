import { copy_intro } from "../data/copy_intro.js";

export const Hero = () => {
  const highlightClass = "font-mono text-(--color-highlight)";

  return (
    <div className="pt-8 md:pt-12 grid grid-cols-6 gap-8">
      <h1 className="col-span-6 text-5xl/snug md:text-[4rem]/tight">
        Hi, I'm <span className={highlightClass}>Nikol</span>.
        <br />I am a Prague-based{" "}
        <span className={highlightClass}>developer</span>
        <br />
        with focus on <span className={highlightClass}>data</span> and
        {"\u00A0"}
        <span className={highlightClass}>design</span>.
      </h1>
      <p
        className="col-span-6 md:col-start-2 md:col-span-5 leading-normal"
        style={{ whiteSpace: "pre-line" }}
      >
        {copy_intro.description}
      </p>
    </div>
  );
};
