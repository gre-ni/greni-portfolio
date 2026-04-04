export const ProjectLink = ({ url, name }) => {
    if (name === 'Github') {
        return <div className="flex flex-row gap-2 items-center">
            <img src="/icons/code_icon.svg" className="pb-0.5"/>
            <a href={url} className="text-dark underline font-bold" target="_blank" rel="noopener noreferrer">{name}</a>
        </div>
    }
    else {
        return <div className="flex flex-row gap-2 items-center">
            <img src="/icons/arrow_icon.svg" />
            <a href={url} className="text-dark underline font-bold" target="_blank" rel="noopener noreferrer">{name}</a>
        </div>
    }
}