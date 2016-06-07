export interface iUser{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phase: string;
    highschool: string;
}

export class User implements iUser{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phase:string;
    highschool:string;
    
    constructor(params: any){
        this.id = params.data.id;
        this.firstName = params.data.first_name;
        this.lastName = params.data.last_name;
        this.email = params.data.email;
        this.phase = params.data.phase;        
        this.highschool = params.data.highschool;
    }
}