import {Metadata} from "next";

export async function generateMetadata(
): Promise<Metadata> {
    // read route params
    const title = crypto.randomUUID();
    return {
        title: title,
    }
}
export default function Page({
    params: {id},
}:{
    params: {id:string};
}) {
    return <div className="card">{id}</div>
}