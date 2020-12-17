export class RegisterUser {

        public  Email:string = "";

        public  Password:string  ="" ;

        public  ConfirmPassword:string =""  ;
    }

    export class LoginUser {

      public  Email:string ="";

        public  Password:string ="" ;

    }

    export class ResponseData{
        public  Message:string  ="";
    }

    export class ProductResponse {
        public  ProductId:number=0;
        public  ProductName:string="";
    }
