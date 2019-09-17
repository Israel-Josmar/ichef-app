import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Text } from 'react-native'
import { DishList } from './components/dish-list'

const QUERY_DISHES = gql`
  query GetDishes {
    dishes {
      id
      name
      category
      imageUrl
      description
    }
  }
`

const App = () => {
  // const { loading, error, data } = useQuery(QUERY_DISHES)
  const { loading, error, data } = {
    data: {
      dishes: [
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
          imageUrl:
            'https://guiadacozinha.com.br/wp-content/uploads/2017/09/macarrao-almoco-domingo.jpg',
          description: 'Super macarrão',
        },
        {
          id: '13133',
          name: 'Risoto',
          category: 'Italiano',
          imageUrl: 'https://www.saborosaviagem.com.br/wp-content/uploads/2018/02/risocamarao.jpg',
          description: 'Um risoto muito bom',
        },
      ],
    },
  }

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error :( -> {JSON.stringify(error, null, 2)}</Text>

  return <DishList dishList={data.dishes} />
}

export default App
