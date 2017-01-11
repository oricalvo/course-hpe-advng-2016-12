export class ContactService {
    constructor() {
    }

    getAll(): Promise<Contact[]> {
        return new Promise(function(resolve, reject) {
            setTimeout(function(){
                resolve([
                    {id:1, name: "Ori"},
                    {id:2, name: "Roni"},
                ]);
            }, 1500);
        });
    }
}

export interface Contact {
    id: number;
    name: string;
}