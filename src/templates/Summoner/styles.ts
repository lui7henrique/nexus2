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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Aside = styled.aside`
  margin-top: -3rem;

  @media (max-width: 768px) {
    margin-top: 0rem;
  }
`
export const ProfileWrapper = styled.div`
  position: sticky;
  top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  user-select: none;
  -webkit-user-drag: none;
`

export const Nickname = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`

export const Main = styled.section`
  padding: 1rem;
`
