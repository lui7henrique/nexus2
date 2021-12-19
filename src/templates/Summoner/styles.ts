import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: -3rem;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Level = styled.h3`
  position: absolute;
  bottom: 10%;
  right: 0%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.shape};

  opacity: 1;
  border-radius: 50%;
  font-size: 14px;
`

export const Avatar = styled.img`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  user-select: none;
  -webkit-user-drag: none;
`

export const Nickname = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`

export const Main = styled.section`
  padding: 1rem;
`
