export const Label = ({name, type}) => {
    if (type === "highlight") {
        return <div className="py-1 px-3 bg-highlight rounded-sm group-hover:bg-dark">
            <p className="text-sm text-dark group-hover:text-white">{name}</p>
        </div>
    }
    else if (type === "inactive") {
        return <div className="py-1 px-3 bg-inactive rounded-sm">
            <p className="text-sm text-dark">{name}</p>
        </div>
    }
    else {
        return <div className="py-1 px-3 bg-dark rounded-sm">
            <p className="text-sm text-white">{name}</p>
        </div>
    }

}