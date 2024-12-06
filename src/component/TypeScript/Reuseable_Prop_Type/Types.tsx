
type info = {
   id:number
    name:string;
    age:number
    email:string;
}

type adminInfoList = info & {
    role: string;
    lastLogin: Date
}

export  {type info, type adminInfoList};