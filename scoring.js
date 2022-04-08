const calculateScore = (player) => {
  if (player.position === 'QB') {
    return calculatePassingScore(player)
  } else if (player.position === 'RB' || player.position === 'WR') {
    return calculateRunReceive (player)
  } else if (player.position === 'TE') {
    return calculateTightEnd (player)
  } else return 0
}

const calculateTightEnd = (player) => {

}

const calculateRunReceive = (player) => {

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
