import Image from "../models/Image";

export default{
    render(image: Image) {
        return {            
            id: image.id,
            //TODO mudar o endereco para variavel de ambiente - googar artigo da rockeseat sobre isso
            url: `http://localhost:3333/uploads/${image.path}`
        };
    },

    renderMany(images: Image[]){
        return images.map(image => this.render(image));
    }
};