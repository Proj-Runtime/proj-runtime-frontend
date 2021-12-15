import { Date } from "mongoose";

export class Incident {

    constructor(
        public _id?: string,
        public Description?: string,
        public Priority?: string,
        public RequesterName?: string,
        public RecordNumber?: string,
        public Narrative?: string,
        public Technician?: string,
        public Status?: string,
        public CreatedDate?: Date,
        public TimeStamped?: Date,
        public Resolution?: string
    ){}

}