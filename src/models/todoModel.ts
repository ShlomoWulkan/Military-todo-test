import { v4 } from "uuid"

export default class Mission {
    public id:string
    constructor(
        public name:string,
        public status:string,
        public priority:string,
        public description:string,
    ) {
        this.id = v4()
    }
}