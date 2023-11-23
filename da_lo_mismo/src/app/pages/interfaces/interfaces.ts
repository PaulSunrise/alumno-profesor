export interface RespuestaToHeadLines{
    status: string;
    data: Data[];
}

export interface Data {
    date: string;
    title: string; 
    type: string;
    inalienable: number;
    extra: string;
  }


export interface Users{
    id: number,
    username: String;
    password:String;
    isactive: boolean
}
//get, put, delete
export interface Usuarios{
    id: number,
    username: string,
    password: string,
    nombre: string,
    email: string,
    rut: string,
    isactive: boolean;
}



//post
export interface Usuario{
    username: string,
    password: string,
    nombre: string,
    email: string,
    rut: string,
    isactive: boolean;
}

export interface IPalabra{
    palabra: string;
    username: string;
    fecha:string;
}

//get, put, delete
export interface IPalabras{
    id: number;
    palabra: string;
    username: string;
    fecha:string;
}


//get, put, delete
export interface IAnimalitos{
    id:Number;
    nombre:String;
    tipoMascota: String;
    raza: String;

}

//post
export interface IAnimalito{
    nombre:String;
    tipoMascota: String;
    raza: String;
}


