import React, { FC } from 'react'

import Button from './components/button/Button'
import DefaultLayout from './layouts/Default/DefaultLayout'
import Container from './components/container'
import { PhoneCall } from 'react-feather'
import Center from './components/center'

const App: FC = () => (
  <DefaultLayout>
    <Container>
      <Center>
        <Button icon={<PhoneCall />}>Connect</Button>
        <Button>Wow</Button>
      </Center>
    </Container>
  </DefaultLayout>
)

export default App
