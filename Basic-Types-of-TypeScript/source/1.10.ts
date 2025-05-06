//We use {} to enclose the full code on this files for the global accessing issues

{
    //Union types (|)

    type BackendDeveloper = 'juniorDeveloper' | 'seniorDeveloper'
    const newDeveloper: BackendDeveloper = 'juniorDeveloper'

    type FrontendDeveloper = 'juniorDeveloper' | 'seniorDeveloper'
    type Developer = FrontendDeveloper | BackendDeveloper;

    const employee: Developer = 'seniorDeveloper'


    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: 'b+' | 'o+' | 'a+' | 'b-' | 'o-' | 'a-'
    }

    const newPerson: User = {
        name: 'riyal',
        email: 'riyalashikur@gmail.com',
        gender: 'male',
        bloodGroup: 'b+'
    }


    //Intersection Types
    type frontendDeveloper = {
        skills : string[];
        designation1: 'Frontend Developer'
    }
    type backendDeveloper = {
        skills : string[];
        designation2: 'Backend Developer'
    }
    type FullStackDeveloper = frontendDeveloper & backendDeveloper

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', "CSS", 'EXpress'],
        designation1: 'Frontend Developer',
        designation2: 'Backend Developer' 
    }





}