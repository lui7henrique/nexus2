import Link from "next/link"
import { useCallback } from "react"
import { formatMatch } from "utils/match/formatMatch"
import { v4 } from "uuid"
import * as S from "./styles"

type TeamProps = {
  participants: ReturnType<typeof formatMatch>["participants"]
}

type ParticipantType = {
  participant: TeamProps["participants"][0]
}

export const Team = ({ participants }: TeamProps) => {
  const Participant = useCallback(({ participant }: ParticipantType) => {
    return (
      <S.Participant team={participant.teamId}>
        <S.Summoner team={participant.teamId}>
          <S.ChampionIconWrapper>
            <S.ChampionIcon
              src={participant.champion.icon}
              layout="fill"
              alt="teste"
            />
          </S.ChampionIconWrapper>
          <Link href={`/summoner/${participant.summoner.name}`} passHref>
            <S.ParticipantNick team={participant.teamId}>
              {participant.summoner.name}
            </S.ParticipantNick>
          </Link>
        </S.Summoner>
        <S.Build>
          {participant.build.map((item) => {
            return (
              <S.ItemWrapper key={v4()}>
                {item === 0 ? (
                  <S.ItemEmpty />
                ) : (
                  <S.Item
                    src={`http://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/${item}.png`}
                  />
                )}
              </S.ItemWrapper>
            )
          })}
        </S.Build>
        <S.Stats>
          <S.KDA>{participant.kda}</S.KDA>
          <S.CreepScore team={participant.teamId}>
            {participant.totalMinionsKilled} cs
          </S.CreepScore>
        </S.Stats>
      </S.Participant>
    )
  }, [])

  return (
    <S.Team>
      {participants.map((participant) => {
        return (
          <Participant
            participant={participant}
            key={participant.summoner.id}
          />
        )
      })}
    </S.Team>
  )
}
