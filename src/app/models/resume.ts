export class Resume {
   private title: string;
   name: string;
   private phone: string;
   private email: string;
   private summary: string;
   private hobbies: Array<string>;


   public constructor(title: string, name: string, phone: string, email: string, summary: string, hobbies: Array<string>) {
      // Initialization inside the constructor

      this.title = title;
      this.name = name;
      this.phone = phone;
      this.email = email;
      this.summary = summary;
      this.hobbies = hobbies;

   }
   sayHello() {
      return "Hello " + this.name + "!";
   }


}


function sayHello(user: any) {
   throw new Error("Function not implemented.");
}
