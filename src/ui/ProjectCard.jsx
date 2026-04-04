import { Label } from './Label.jsx'


export const ProjectCard = ({data}) => {

    const tagsList = data.tags

    if (data.status === 'done') {
        return <div className="group border-2 border-highlight rounded-2xl bg-bg hover:bg-lighter-bg hover:border-transparent hover:shadow-lg">
            <div className="py-7 px-6 flex flex-col gap-5">
                <div className="rounded-sm h-45 overflow-hidden">
                    <img src={`/images/${data.image}.png`} className="group-hover:hidden w-full h-full object-cover object-center" />
                    <img src={`/images/${data.image}.gif`} className="hidden group-hover:block w-full h-full object-cover object-center" />
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                    {tagsList.map(tag => <Label name={tag} type="highlight"/>)}
                </div>
                <div className="flex flex-col gap-2">
                    <h3>{data.title}</h3>
                    <p className="text-sm">{data.description}</p>
                </div>

            </div>
        </div>
    }
    else {
        // WIP Cards, greyed out, no hover effect
        return <div className="group border-2 border-grey rounded-2xl bg-bg">
            <div className="py-7 px-6 flex flex-col gap-5">
                <div className="rounded-sm h-45 overflow-hidden">
                    <img src={`/images/${data.image}.png`} className="w-full h-full object-cover object-center opacity-50"/>
                </div>
                <div className="flex flex-row gap-2 flex-wrap">
                    {tagsList.map(tag => <Label name={tag} type="inactive"/>)}
                </div>                
                <div className="flex flex-col gap-2">
                    <h3>{data.title}</h3>
                    <p className="text-sm">{data.description}</p>
                </div>

            </div>
        </div>
    }
}