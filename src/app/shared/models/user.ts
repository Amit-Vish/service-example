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
        this.id = params.id;
        this.firstName = params.first_name;
        this.lastName = params.last_name;
        this.email = params.email;
        this.phase = params.phase;        
        this.highschool = params.highschool;
    }
}