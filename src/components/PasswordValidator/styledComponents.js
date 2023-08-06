// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  height: 100vh;
  background-size: cover;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  width: 53%;
  height: 48vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  border: none;
  border-radius: 8px;
  padding: 20px;
  margin: 20px;
  @media and screen (min-width: 768px) {
    width: 50%;
    height: 43vh;
  }
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: bold;
  padding: 10px;
  margin: 0px;
  @media and screen (min-width: 768px) {
    font-size: 40px;
  }
`
export const Text = styled.p`
  color: #f8fafc;
  font-size: 19px;
  text-align: center;
  font-family: 'Roboto';
  margin-top: 14px;
  margin-bottom: 18px;
  @media and screen (min-width: 768px) {
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 28px;
  }
`
export const Input = styled.input`
  color: #f8fafc;
  background-color: #edeeff;
  font-size: 14px;
  height: 43px;
  border: 1px solid #24263c;
  border-radius: 2px;
  margin-top: 16px;
  padding: 8px 16px;
  min-width: 280px;
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    height: 47px;
    margin-top: 28px;
    min-width: 383px;
  }
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  font-size: 13px;
  font-family: 'Roboto';
  padding: 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
