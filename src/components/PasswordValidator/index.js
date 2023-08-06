// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Title,
  Text,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const errorMsg =
    password.length < 8 ? 'Your password must be at least 8 characters' : ''

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <Title>Password Validator</Title>
        <Text>Check how strong and secure your password</Text>
        <Input type="password" onChange={onChangePassword} />
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
