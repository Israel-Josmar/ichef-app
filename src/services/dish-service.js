const dishes = [
  {
    id: '13131',
    name: 'Hamburgao',
    category: 'Lanche',
    imageUrl:
      'https://ogimg.infoglobo.com.br/in/22318020-42b-a9d/FT1086A/652/HOB_Costela-BBQ_Credito-Ezio-Philot-e-Vinicius-Oliveira-1.jpg',
    description: 'Super Hamburguer',
  },
  {
    id: '13132',
    name: 'Macarrão',
    category: 'Italiano',
    imageUrl: 'https://guiadacozinha.com.br/wp-content/uploads/2017/09/macarrao-almoco-domingo.jpg',
    description: 'Super macarrão',
  },
  {
    id: '13133',
    name: 'Risoto',
    category: 'Italiano',
    imageUrl: 'https://www.saborosaviagem.com.br/wp-content/uploads/2018/02/risocamarao.jpg',
    description: 'Um risoto muito bom',
  },
  {
    id: '13134',
    name: 'Risoto',
    category: 'Italiano',
    imageUrl: 'https://www.saborosaviagem.com.br/wp-content/uploads/2018/02/risocamarao.jpg',
    description: 'Um risoto muito bom',
  },
]

export const getDishList = category => {
  return {
    data: {
      dishes: category ? dishes.filter(dish => dish.category === category) : dishes,
    },
  }
}
