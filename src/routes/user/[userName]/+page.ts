import {pb} from "../../../lib/pocketbase";
import {json} from "@sveltejs/kit";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const load = async ({params}) => {
    console.log(params.username);
try {
    const result = await pb.collection('users').getFirstListItem(`username~"${params.userName}"`);
    const data = JSON.parse(JSON.stringify(result));
    console.log(data);
    return data;
}
catch (error){
    const jsonError = JSON.parse(JSON.stringify(error));
    console.log({jsonError});
    return {jsonError};
}
}