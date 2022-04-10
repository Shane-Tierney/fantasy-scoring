const calculateScore = (player) => {
  if (player.position === 'QB') {
    return calculatePassingScore(player)
  } else if (player.position === 'RB' || player.position === 'WR') {
    return calculateRunReceive(player)
  } else if (player.position === 'TE') {
    return calculateTightEnd(player)
  } else return 0
}

const calculateTightEnd = (player) => {
  let recStats = player.stats.receiving
  let score = 0

  score = recStats.receptions
  score += recStats.yards / 10
  score += recStats.touchdowns * 6
  score += recStats.fumbles * -3

  return score
}

const calculateRunReceive = (player) => {
  let rushStats = player.stats.rushing
  let recStats = player.stats.receiving
  let kickStats = player.stats.return.kickreturn
  let puntStats = player.stats.return.puntreturn
  let score = 0

  score = rushStats.yards / 10
  score += rushStats.touchdowns * 6
  score += rushStats.fumbles * -3
  score += recStats.receptions
  score += recStats.yards / 10
  score += recStats.touchdowns * 6
  score += recStats.fumbles * -3
  score += kickStats.yards / 15
  score += kickStats.touchdowns * 6
  score += kickStats.fumbles * -3
  score += puntStats.yards / 15
  score += puntStats.touchdowns * 6
  score += puntStats.fumbles * -3

  return score
}

const calculatePassingScore = (player) => {
  let passStats = player.stats.passing
  let rushStats = player.stats.rushing
  let score = 0

  score = passStats.yards / 25
  score += passStats.touchdowns * 6
  score += passStats.interceptions * -3
  score += rushStats.yards / 10
  score += rushStats.touchdowns * 6
  score += rushStats.fumbles * -3

  return score
}

module.exports = calculateScore
