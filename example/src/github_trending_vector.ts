import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { wrapUpTrending } from './github_trending_vector.config.js'

const result = await teamwork(wrapUpTrending)

console.log(solution(result))
