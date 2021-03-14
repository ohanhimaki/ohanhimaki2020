import React from "react"
export default function IgPostPreview(props: { post: IgPost }) {

    const date = SecondsToDate(props.post.node.timestamp)
    const formattedDate =
        date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    return <div
        className="m-4 w-full md:w-1/3 bg-gray-800 p-5 flex-grow rounded-lg shadow-md"
    >
        <div className="">
            <h4>{formattedDate} </h4>
            <img
                src={props.post.node.original}
            ></img>
            <p> {props.post.node.caption} </p>
        </div>
    </div>

}
export function SecondsToDate(seconds: number){
    return (new Date(seconds*1000));
}
interface IgPostNode {
    timestamp: number,
    original: string,
    preview: string,
    localFile: string,
    caption: string,

}

export interface IgPost {
    node: IgPostNode;
}
