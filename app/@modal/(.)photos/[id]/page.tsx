import {Modal} from "@/app/@modal/(.)photos/[id]/modal";

export default function PhotoModal({
    params : { id: photoId},
}:{
    params : { id: string };
}) {
    return <Modal>{photoId}</Modal>
}