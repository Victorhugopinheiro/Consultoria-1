interface InputProps{
placeholder:string
name:string | undefined
}


export function Input({placeholder, name }:InputProps){
    return(
        <input placeholder={placeholder} name={name} className="h-12 w-10/12 mb-2 py-1 px-2 decoration-none bg-slate-700 rounded-md md:w-1/2 lg:w-1/3 ">
        </input>
    )
}