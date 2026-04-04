import { copy_intro } from '../data/copy_intro.js'

export const Hero = () => {

    const highlightClass = "font-mono text-(--color-highlight)";

    return <div className="pt-20 grid grid-cols-6 gap-12">
    <h1 className="col-span-6">Hi, I'm <span className={highlightClass}>Nikol</span>.
        <br />I am a Prague-based <span className={highlightClass}>developer</span>
        <br />with focus on <span className={highlightClass}>data</span> and <span className={highlightClass}>design</span>.</h1>
    <p className="col-start-2 col-span-5">{copy_intro.description}</p>
    </div>
}