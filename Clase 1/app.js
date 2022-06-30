class Usuario{
        constructor( {nombre, apellido} ){
            this.nombre = nombre;
            this.apellido = apellido;
            this.mascotas = [];
            this.libros = [];
        }

        getFullName = () =>{
            return `Nombre: ${this.nombre} Apellido: ${this.apellido}`;
        }

        addMascota = (mascotas) =>{
            this.mascotas.push(mascotas);
        }

        countMascota = () => {
            return this.mascotas.length;
        }

        addBook(libro, autor){
            this.libro = libro;
            this.autor = autor;
            this.libros.push({nombre: this.libro, autor: this.autor});
        }

        getBook(){
            let name = this.libros.map((i)=> i.nombre);
            let author = this.libros.map((i)=> i.autor);
            return this.libros;
            
        }
}

let usuario1 = new Usuario({nombre: "Juancho", apellido: "Medina"});

console.log(usuario1.getFullName());

usuario1.addMascota("pepita");
usuario1.addMascota("la pistolera");
console.log(usuario1.countMascota());
usuario1.addBook("libro1", "autor1");
usuario1.addBook("libro2", "autor2");
console.log(usuario1.getBook());