import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Layout(props: { children: any }){
    return (
        <form>
            <h2>Create</h2>
            {props.children}
        </form>
    )
}