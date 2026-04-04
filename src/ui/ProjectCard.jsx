export const ProjectCard = ({data}) => {


    return <div className="group border-2 border-highlight rounded-2xl bg-bg hover:bg-lighter-bg hover:border-transparent hover:shadow-lg">
        <div className="py-7 px-6 flex flex-col gap-5">
            <div className="rounded-sm max-h-40 overflow-hidden">
                <img src={`/${data.image}.png`} className="group-hover:hidden object-cover object-center" />
                <img src={`/${data.image}.gif`} className="hidden group-hover:block object-cover object-center" />
            </div>
            <div className="flex flex-col gap-2">
                <h3>{data.title}</h3>
                <p className="text-sm">{data.description}</p>
            </div>

        </div>
    </div>

}