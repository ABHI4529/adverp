import {AiOutlineLoading} from "react-icons/ai";


export default function Loading() {
    return (
        <div className={"fixed bg-background z-9 top-[50%] left-[50%] flex justify-center items-center"}>
            <div className={"p-4 border rounded-md"}>
                <AiOutlineLoading className={"animate-spin"}></AiOutlineLoading>
            </div>
        </div>
    );
}