export default function Read(props: { params: { id: any; }; }){
    return (
        <>
            <h2>Read</h2>
            parameters : {props.params.id}
        </>
    )
}