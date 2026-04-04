export const ProjectCard = ({data}) => {


    return <div className="group border-2 border-highlight rounded-2xl bg-bg hover:bg-lighter-bg hover:border-transparent hover:shadow-lg">
        <div className="py-7 px-6 flex flex-col gap-5">
            <div className="rounded-sm h-45 overflow-hidden">
                <img src={`/images/${data.image}.png`} className="group-hover:hidden w-full h-full object-cover object-center" />
                <img src={`/images/${data.image}.gif`} className="hidden group-hover:block w-full h-full object-cover object-center" />
            </div>
            <div className="flex flex-col gap-2">
                <h3>{data.title}</h3>
                <p className="text-sm">{data.description}</p>
            </div>

        </div>
    </div>

}