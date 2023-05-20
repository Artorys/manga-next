interface IButtonProps{
    text : string
}
export default function Button(props : IButtonProps){
    return (
        <button className="rounded-none p-2 bg-blue-100">{props.text}</button>
    )
}