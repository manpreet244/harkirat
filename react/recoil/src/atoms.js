import {atom , selector} from "recoil";
export const networkAtom = atom({
    key :"networkAtom",
    default :104
})
export const jobsAtom = atom({
    key :"jobsAtom",
    default :0
})
export const notificationsAtom = atom({
    key :"notificationsAtom",
    default :100
})
export const messagingAtom = atom({
    key :"messagingAtom",
    default :100
})

// todos app
// 2 input boxes
//button
//filter(item) =>Atom
//selector 
