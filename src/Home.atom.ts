import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import User from "./models/User";

const { persistAtom } = recoilPersist();

export const countState = atom({
    key: "count",
    default: 0
});

export const userState = atom({
    key: "user",
    default: new User("hoge", 11),
    effects_UNSTABLE: [persistAtom]
})
