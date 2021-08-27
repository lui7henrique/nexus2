/* eslint-disable @next/next/no-img-element */
import { ProgressBar } from "components/Atoms/ProgressBar"
import { ChampionType } from "types/champion"

import * as S from "./styles"

interface IChampionTemplateProps {
  champion: ChampionType
}

export function ChampionTemplate({ champion }: IChampionTemplateProps) {
  console.log(champion)
  return (
    <S.Container>
      <S.BannerWrapper>
        <S.Banner
          splash_art={champion.skins[champion.skins.length - 1].image}
        />
      </S.BannerWrapper>
      <S.Content>
        <S.Infos>
          <S.BasicInfos>
            <S.IconWrapper>
              <S.Icon icon={champion.icon} />
            </S.IconWrapper>
            <h1>{champion.name}</h1>
            <h2>{champion.title}</h2>
          </S.BasicInfos>
          <ProgressBar
            value={champion.info.attack}
            total={10}
            color="#db3a2c"
            type="Dano"
          />
          <ProgressBar
            value={champion.info.defense}
            total={10}
            color="#8cc84b"
            type="Defesa"
          />
          <ProgressBar
            value={champion.info.magic}
            total={10}
            color="#a32ddf"
            type="Magia"
          />
          <ProgressBar
            value={champion.info.difficulty}
            total={10}
            color="#2ac7e3"
            type="Dificuldade"
          />
        </S.Infos>
      </S.Content>
    </S.Container>
  )
}
