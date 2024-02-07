import {AiOutlineLoading} from "react-icons/ai";


export default function Loading() {
    return (
        <div className={"flex h-[100%] w-[100%] justify-center items-center"}>
            <div className={"p-4 border rounded-md"}>
                <AiOutlineLoading className={"animate-spin"}></AiOutlineLoading>
            </div>
        </div>
    );
}