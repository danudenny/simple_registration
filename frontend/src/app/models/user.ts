export class User {
	id: Number;	
	firstname: String;
	lastname: String;
    phone: Number;
    gender: String;
    dob: Date;
	email: String;
	constructor(obj: any = null) {
		if(obj != null) {
			Object.assign(this, obj);
		}
	}
}