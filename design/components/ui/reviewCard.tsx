import { cn } from "@/libs/utils"

export const ReviewCard = ({
    img,
    name,
    desc,
    body,
}: {
img: string;
name: string;
desc: string;
body: string;
}) => {
return (
    <figure
        className={cn(
            "relative w-full cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
        )}
        >
        <div className="flex flex-row items-center gap-2">
            <img className="mr-4 h-[72px] w-[72px] rounded-full object-cover"alt="" src={img} />
            <div className="flex flex-col">
                <div className="flex flex-row items-center gap-2">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M768 832v384q0 80-56 136t-136 56H192q-80 0-136-56T0 1216V512q0-104 40.5-198.5T150 150T313.5 40.5T512 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136m896 0v384q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V512q0-104 40.5-198.5T1046 150t163.5-109.5T1408 0h64q26 0 45 19t19 45v128q0 26-19 45t-45 19h-64q-106 0-181 75t-75 181v32q0 40 28 68t68 28h224q80 0 136 56t56 136"/></svg>
                    </div>                        
                    <p className="mt-2 text-lg font-bold">{body}</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.19em" height="1em" viewBox="0 0 1664 1408"><path fill="currentColor" d="M768 192v704q0 104-40.5 198.5T618 1258t-163.5 109.5T256 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h384q80 0 136 56t56 136m896 0v704q0 104-40.5 198.5T1514 1258t-163.5 109.5T1152 1408h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64q106 0 181-75t75-181v-32q0-40-28-68t-68-28h-224q-80 0-136-56t-56-136V192q0-80 56-136t136-56h384q80 0 136 56t56 136"/></svg>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <div>{name}</div>
                    <p className="text-sm font-medium text-blue-700">{desc}</p>
                </div>
                
            </div>
        </div>
    </figure>
    );
};