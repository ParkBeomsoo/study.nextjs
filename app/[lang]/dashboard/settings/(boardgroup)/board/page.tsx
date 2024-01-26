export default function Page({ params }: { params: { board: string[] } }) {
    return <div>My Post: {params.board}</div>
}