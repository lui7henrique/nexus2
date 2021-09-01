import styled from "styled-components"

export const Container = styled.div``

export const Content = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  gap: 2rem;
  padding: 1rem;

  display: flex;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Infos = styled.aside`
  width: 30%;
  margin-top: -104px;

  display: flex;
  flex-direction: column;
  background: var(--shape);
  gap: 1rem;

  position: relative;
  padding: 1rem;
  border-radius: 3px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Tags = styled.section`
  position: absolute;
  padding: 0 1rem;
  top: 0;
  left: 0;
  display: flex;
  gap: 1rem;
  margin-top: -0.8rem;
`

export const Tag = styled.div`
  background: var(--primary);
  color: var(--white);
  padding: 0.5rem;
  font-size: 0.7rem;
`

export const About = styled.main`
  max-width: 70%;
  background: var(--shape);
  border-radius: 5px;
  box-shadow: 0px -5px 0px var(--background) inset;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const Header = styled.header`
  height: 3rem;
  border-bottom: 1px solid var(--borders);
  display: flex;
  align-items: center;
`

export const Options = styled.section`
  padding: 0 1rem;
  display: flex;
  gap: 1rem;
  height: 3rem;

  h3 {
    margin-top: 0.7rem;
    text-decoration: none;
    color: var(--gray);
    filter: brightness(0.5);
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    font-weight: normal;

    &.active {
      filter: brightness(1);
      border-bottom: 2px solid var(--primary);
    }
    &:hover {
      filter: brightness(1);
      border-bottom: 2px solid var(--primary);
    }
  }
`
interface IAboutContentProps {
  isSkins?: boolean
}

export const AboutContent = styled.div<IAboutContentProps>`
  padding: ${(props) => (props.isSkins ? "0" : "1rem")};
`

export const Lore = styled.p`
  line-height: 1.7;
  text-align: justify;
`
